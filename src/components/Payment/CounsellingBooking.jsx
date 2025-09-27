import { useState } from "react";
import qrImage from "../Payment/PaymentQR.jpeg"; // aapka QR code image yaha import karein

export default function PaymentPage() {
  const [confirmed, setConfirmed] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const canProceed = confirmed && transactionId.trim() !== "";

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center border-2 border-yellow-300">
        {/* Heading */}
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
            <p>
              <span className="font-semibold">Account Holder:</span> Mayurica
              Chauhan
            </p>
            <p>
              <span className="font-semibold">Account Number:</span> 418401503544
            </p>
            <p>
              <span className="font-semibold">Bank:</span> ICICI Bank
            </p>
            <p>
              <span className="font-semibold">Branch:</span> Bestech Business
              Tower, Gurugram
            </p>
            <p>
              <span className="font-semibold">IFSC:</span> ICIC000418
            </p>
            <p>
              <span className="font-semibold">Amount:</span> ₹499
            </p>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-500 mb-4">
          After payment, please enter your Transaction ID and confirm to proceed.
        </p>

        {/* Transaction ID Input */}
        <input
          type="text"
          placeholder="Enter Transaction ID (required)"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Checkbox Confirmation */}
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

        {/* Direct Redirect Button */}
        <button
          onClick={() =>
            (window.location.href =
              "https://educationandcareercounsellor.zohobookings.in/#/educationandcareercounsellor")
          }
          disabled={!canProceed}
          className={`px-6 py-2 rounded-lg shadow-md font-semibold transition 
            ${
              canProceed
                ? "bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
        >
          Proceed to Book Slot
        </button>
      </div>
    </div>
  );
}
