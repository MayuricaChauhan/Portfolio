import { useState } from "react";
import { useLocation } from "react-router-dom";
import qrImage from "../Payment/PaymentQR.jpeg";



export default function PaymentPage() {
  const location = useLocation();
  const customerData = location.state; // ✅ { name, email, phone }

  const [confirmed, setConfirmed] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);

  const canProceed = confirmed && transactionId.trim() !== "";

 const handleProceed = async () => {
  setLoading(true);
  try {
    await fetch("http://localhost:5000/send-confirmation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        transactionId,
        customerData: {
          name: customerData?.name,   // ✅ correct
          email: customerData?.email,
          phone: customerData?.phone,
        },
      }),
    });

    // ✅ Redirect after email
    window.location.href =
      "https://educationandcareercounsellor.zohobookings.in/#/educationandcareercounsellor";
  } catch (error) {
    alert("❌ Failed to send email. Try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center border-2 border-yellow-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Complete Your Payment
        </h2>
        <p className="text-lg font-semibold text-yellow-600 mb-6">
          ₹499 for 30 minutes Counselling
        </p>

        {/* Payment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* QR Payment */}
          <div className="p-4 border rounded-lg bg-yellow-50 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Pay via QR
            </h3>
            <img
              src={qrImage}
              alt="UPI QR Code"
              className="w-40 h-40 mx-auto mb-3 rounded-md border"
            />
            <p className="text-sm text-gray-600">Scan & Pay using UPI</p>
            <p className="text-sm font-medium mt-2">
              UPI ID:{" "}
              <span className="text-gray-800">mayurica87-1@okicici</span>
            </p>
          </div>

          {/* Bank Transfer */}
          <div className="p-4 border rounded-lg bg-yellow-100 shadow-sm text-left">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Pay via Bank Transfer
            </h3>
            <p><b>Account Holder:</b> Mayurica Chauhan</p>
            <p><b>Account Number:</b> 418401503544</p>
            <p><b>Bank:</b> ICICI Bank</p>
            <p><b>Branch:</b> Bestech Business Tower, Gurugram</p>
            <p><b>IFSC:</b> ICIC000418</p>
            <p><b>Amount:</b> ₹499</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          After payment, please enter your Transaction ID and confirm to proceed.
        </p>

        <input
          type="text"
          placeholder="Enter Transaction ID (required)"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <div className="flex items-center justify-center gap-2 mb-6">
          <input
            type="checkbox"
            id="confirmPayment"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
          />
          <label htmlFor="confirmPayment" className="text-gray-700 text-sm">
            I have completed the payment
          </label>
        </div>

        <button
          onClick={handleProceed}
          disabled={!canProceed || loading}
          className={`px-6 py-2 rounded-lg shadow-md font-semibold transition 
            ${
              canProceed
                ? "bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
        >
          {loading ? "Sending..." : "Proceed to Book Slot"}
        </button>
      </div>
    </div>
  );
}
