import qrImage from "../Payment/PaymentQR.jpeg"; // aapka QR code image yaha import karein

export default function PaymentPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Book Your Counselling Session
        </h2>
        <p className="text-lg font-semibold text-violet-700 mb-6">
          ₹499 for 30 minutes
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <img
            src={qrImage}
            alt="UPI QR Code"
            className="w-48 h-48 rounded-lg border p-2"
          />
        </div>

        {/* Payment Details */}
        <div className="text-left bg-gray-50 p-4 rounded-lg shadow-inner">
          <p className="mb-2">
            <span className="font-semibold">UPI ID:</span>{" "}
            mayurica87-1@okicici
          </p>
          <p className="mb-2">
            <span className="font-semibold">Bank Name:</span> ICICI Bank
          </p>
          <p className="mb-2">
            <span className="font-semibold">Account Holder:</span> Mayurica
            Chauhan
          </p>
          <p className="mb-2">
            <span className="font-semibold">Amount:</span> ₹499
          </p>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-500 mt-6">
          Please complete your payment and share the screenshot with us for
          confirmation.
        </p>
      </div>
    </div>
  );
}
