// File: /api/brevo.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('Received body:', req.body);
  console.log('BREVO_API_KEY exists:', !!process.env.BREVO_API_KEY);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { user_name, user_email, user_message, action } = req.body;

  if (!user_name || !user_email || !user_message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (action !== 'subscribe') {
    return res.status(400).json({ error: 'Invalid or missing action type' });
  }

  const apiKey = `${process.env.BREVO_API_KEY}`.trim();
  if (!apiKey || apiKey.includes('undefined') || apiKey.includes('null')) {
    return res.status(500).json({ error: 'Missing or invalid Brevo API key' });
  }

  try {
    // Add contact to Brevo list
    await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email: user_email,
        attributes: {
          FIRSTNAME: user_name,
          MESSAGE: user_message,
        },
        listIds: [10], // ✅ Replace with your actual Brevo List ID
        updateEnabled: true,
      },
      {
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    return res.status(200).json({ success: true, message: 'User added to Brevo contacts.' });
  } catch (error: any) {
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
