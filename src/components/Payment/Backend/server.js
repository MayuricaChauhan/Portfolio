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

  if (!transactionId || !email) {
    return res.status(400).json({ success: false, message: "Missing details" });
  }

  try {
    // Send mail
    let info = await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: email, // customer ka email
      cc: process.env.ZOHO_USER, // tumhe bhi copy milegi
      subject: "Counselling Session Payment Received",
      text: `Hello ${name},

We have received your payment request.

Transaction ID: ${transactionId}
Phone: ${phone}
Email: ${email}

We will verify the payment and confirm your counselling session shortly.
After confirmation, please complete your booking details here:
👉 https://educationandcareercounsellor.zohobookings.in/#/educationandcareercounsellor

Thank you!`,
    });

    console.log("✅ Email sent:", info.messageId);

    // ✅ Tum yaha DB (MongoDB/MySQL/JSON file) me save kar sakte ho
    // Example ke liye:
    // fs.appendFileSync("payments.json", JSON.stringify({ name, email, phone, transactionId }) + "\n");

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
