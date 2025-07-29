import SibApiV3Sdk from 'sib-api-v3-sdk';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST method is allowed' });
  }

  const { user_name, user_email, user_message, action } = req.body;

  if (!user_name || !user_email || !action) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Setup Brevo API key
  SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey =
    process.env.BREVO_API_KEY.replace(/[\r\n\t]/g, '').trim();

  const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

  const templateMap = {
    subscribe: 3,
    unsubscribe: 7,
    confirmation_final: 6,
    confirmation_simple: 5,
    confirmation_double: 4,
    order: 1,
  };

  const templateId = templateMap[action];
  if (!templateId) {
    return res.status(400).json({ error: `Invalid action: ${action}` });
  }

  try {
    // 1️⃣ Send email to user via template
    const sendToUser = new SibApiV3Sdk.SendSmtpEmail();
    sendToUser.to = [{ email: user_email, name: user_name }];
    sendToUser.templateId = templateId;
    sendToUser.params = {
      FIRSTNAME: user_name,
      EMAIL: user_email,
      MESSAGE: user_message || '',
    };
    sendToUser.replyTo = { email: 'iec@mayuricaeducation.in', name: 'Mayurica Support' };

    await emailApi.sendTransacEmail(sendToUser);

    // 2️⃣ Send full form details to support email
    const sendToSupport = new SibApiV3Sdk.SendSmtpEmail();
    sendToSupport.to = [{ email: 'iec@mayuricaeducation.in', name: 'Mayurica' }];
    sendToSupport.subject = 'New Support Request Submitted';
    sendToSupport.htmlContent = `
      <h1>New Support Request</h1>
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Message:</strong> ${user_message || 'No message provided'}</p>
      <hr/>
      <p><em>This message is sent from the website contact form.</em></p>
    `;
    sendToSupport.sender = { email: 'iec@mayuricaeducation.in', name: 'Mayurica Website' };

    await emailApi.sendTransacEmail(sendToSupport);

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    return res.status(500).json({ error: 'Failed to send emails' });
  }
}

export default handler;
