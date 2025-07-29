import SibApiV3Sdk from 'sib-api-v3-sdk';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { user_name, user_email, user_message } = req.body;

  // Set API key securely
  SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey =
    process.env.BREVO_API_KEY.replace(/[\r\n\t]/g, '').trim();

  // ✅ Use transactional API instead of campaigns
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const emailData = {
    sender: {
      name: 'Mayurica',
      email: 'iec@mayuricaeducation.in',
    },
    to: [
      {
        email: user_email,
        name: user_name,
      },
    ],
    subject: 'Support Request',
    htmlContent: `
      <h1>Support Request</h1>
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Message:</strong> ${user_message}</p>
    `,
    replyTo: {
      email: user_email,
      name: user_name,
    },
  };

  try {
    const response = await apiInstance.sendTransacEmail(emailData);
    return res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ error: error.message });
  }
}

export default handler;
