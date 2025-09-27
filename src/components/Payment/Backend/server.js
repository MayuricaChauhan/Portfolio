import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Transporter config
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",  // ya "smtp.zoho.com" try karo agar ye fail ho
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

// ✅ API Route
app.post("/send-confirmation", async (req, res) => {
  const { transactionId, customerData } = req.body;
  const { name, email, phone } = customerData;

  try {
    let info = await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: email,
      cc: process.env.ZOHO_USER,
      subject: "Counselling Session Confirmation",
      text: `Hello ${name},

We have received your payment successfully.
Transaction ID: ${transactionId}
Phone: ${phone}

We will check the payment details and confirm your counselling session shortly.
After confirmation, please proceed to fill in your details here:
👉 https://educationandcareercounsellor.zohobookings.in/#/educationandcareercounsellor

Thank you!`,
    });

    console.log("✅ Email sent:", info.messageId);
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
