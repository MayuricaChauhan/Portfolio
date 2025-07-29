import SibApiV3Sdk from 'sib-api-v3-sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { user_name, user_email, user_message } = req.body;

  if (!user_name || !user_email || !user_message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Setup Brevo API
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();

  const emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
  emailCampaigns.name = `Form submitted by ${user_name}`;
  emailCampaigns.subject = 'New Form Submission';
  emailCampaigns.sender = {
    name: 'Mayurica Education',
    email: 'iec@mayuricaeducation.in',
  };
  emailCampaigns.type = 'classic';

  // 👇 HTML content using submitted form data
  emailCampaigns.htmlContent = `
    <h1>New Form Submission</h1>
    <p><strong>Name:</strong> ${user_name}</p>
    <p><strong>Email:</strong> ${user_email}</p>
    <p><strong>Message:</strong> ${user_message}</p>
  `;

  // 👇 Send this to all contacts in your existing list
  emailCampaigns.recipients = { listIds: [10] };

  // 👇 Optional: schedule right now
  // emailCampaigns.scheduledAt = new Date(Date.now() + 1 * 60 * 1000).toISOString(); // 1 min later

  try {
    const response = await apiInstance.createEmailCampaign(emailCampaigns);
    return res.status(200).json({ success: true, campaignId: response.id });
  } catch (error) {
    console.error('Campaign creation failed:', error?.response?.body || error.message);
    return res.status(500).json({ error: 'Failed to create and send campaign' });
  }
}
