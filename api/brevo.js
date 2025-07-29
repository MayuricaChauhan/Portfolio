import SibApiV3Sdk from 'sib-api-v3-sdk';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { user_name, user_email, user_message, action } = req.body;

  SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey =
    process.env.BREVO_API_KEY.replace(/[\r\n\t]/g, '').trim();

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  // 🔁 Map actions to Brevo template IDs
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

  sendSmtpEmail.to = [{ email: user_email, name: user_name }];
  sendSmtpEmail.templateId = templateId;
  sendSmtpEmail.params = {
    name: user_name,
    email: user_email,
    message: user_message,
  };
  sendSmtpEmail.replyTo = { email: user_email, name: user_name };

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ error: error.message });
  }
}

export default handler;
