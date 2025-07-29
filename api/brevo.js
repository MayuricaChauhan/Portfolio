// File: /api/brevo.js
  
 import axios from 'axios';

export default async function handler(req, res) {
  console.log('Received body:', req.body);
  console.log('BREVO_API_KEY exists:', !!process.env.BREVO_API_KEY);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { user_name, user_email, user_message, action } = req.body;

  if (!user_name || !user_email || !user_message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const SUBSCRIBE_TEMPLATE_ID = 3; // 🔁 replace with real ID
  let templateId;

  if (action === 'subscribe') {
    templateId = SUBSCRIBE_TEMPLATE_ID;
  } else {
    return res.status(400).json({ error: 'Invalid or missing action type' });
  }

  try {
    // STEP 1: Add contact
    if (action !== 'unsubscribe') {
      await axios.post(
        'https://api.brevo.com/v3/contacts',
        {
          email: user_email,
          attributes: {
            FIRSTNAME: user_name,
            MESSAGE: user_message,
          },
          listIds: [10], // 👉 Replace with your list ID
          updateEnabled: true,
        },
        {
          headers: {
            'api-key': process.env.BREVO_API_KEY || '',
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // STEP 2: Send transactional email
    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: user_name,
          email: user_email,
        },
        to: [
          {
            email: 'iec@mayuricaeducation.in',
            name: 'Admin',
          },
        ],
        templateId,
        params: {
          FIRSTNAME: user_name,
          EMAIL: user_email,
          MESSAGE: user_message,
        },
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY || '',
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    return res.status(200).json({ success: true, message: 'User processed and email sent.' });
  } catch (error) {
    console.error('Brevo API failed:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config,
    });

    const statusCode = error.response?.status || 500;
    let errorMessage = 'Brevo API error';

    if (error.response?.data) {
      const data = error.response.data;
      if (typeof data === 'object') {
        errorMessage = data.message || JSON.stringify(data);
      } else if (typeof data === 'string') {
        errorMessage = data;
      }
    } else {
      errorMessage = error.message || 'Unknown server error';
    }

    return res.status(statusCode).json({ error: errorMessage });
  }
}
