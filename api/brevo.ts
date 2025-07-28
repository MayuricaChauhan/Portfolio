// File: /api/brevo.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { user_name, user_email, message } = req.body;

  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email: user_email,
        attributes: {
          FIRSTNAME: user_name
        },
        listIds: [2], // Replace with real list ID
        updateEnabled: true
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    return res.status(200).json({ message: 'Contact added', data: response.data });
  } catch (error) {
    console.error('Brevo API failed:', error.response?.data || error.message);

    return res.status(500).json({
      error: error.response?.data?.message || 'Brevo API error'
    });
  }
}
