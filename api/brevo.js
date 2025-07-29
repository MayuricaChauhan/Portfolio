import SibApiV3Sdk from 'sib-api-v3-sdk';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }
  const { user_name, user_email, user_message } = req.body;

  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY.replace(/[\r\n\t]/g, '').trim();

  const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();

  const emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
  emailCampaigns.name = 'Campaign via API';
  emailCampaigns.subject = 'Welcome to Mayurica Education';
  emailCampaigns.sender = {
    name: 'Mayurica',
    email: 'iec@mayuricaeducation.in',
  };
  emailCampaigns.type = 'classic';

  emailCampaigns.htmlContent = `
    <h1>Welcome, ${user_name}!</h1>
    <p>${user_message}</p>
    <p>Contact: ${user_email}</p>
  `;

  emailCampaigns.recipients = { listIds: [10] };
  emailCampaigns.scheduledAt = new Date().toISOString();

  try {
    const data = await apiInstance.createEmailCampaign(emailCampaigns);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Campaign creation failed:', error);
    return res.status(500).json({ error: error.message });
  }
}

export default handler; // ✅ Important for Vercel API route
