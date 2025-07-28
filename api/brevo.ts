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
    return res.status(500).json({ error: error.message });
  }
}
