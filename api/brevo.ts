// File: /api/brevo.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { user_name, user_email, message } = req.body;

  try {
    const brevoRes = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email: user_email,
        attributes: {
          FIRSTNAME: user_name,
          MESSAGE: message,
        },
        listIds: [2], // replace with your actual list ID
        updateEnabled: true,
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY || '',
          'Content-Type': 'application/json',
        },
      }
    );

    return res.status(200).json({ success: true, data: brevoRes.data });
  } catch (error: any) {
  console.error('Brevo API failed:', error.response?.data || error.message);

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

  return res.status(statusCode).json({
    error: errorMessage
  });
}
}
