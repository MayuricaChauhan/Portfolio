import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone } from "lucide-react";

export default function BookCounsellingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form data backend ya Brevo API ko bhejna hai
    navigate("/payment"); // pehle payment page par bhejenge
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg border border-yellow-300"
      >
        <h2 className="text-3xl font-extrabold text-black mb-8 text-center">
          Book Your Counselling Session
        </h2>

        {/* Full Name */}
        <div className="mb-6 relative">
          <label className="block text-gray-800 mb-2 font-medium">Full Name</label>
          <div className="flex items-center">
            <User className="absolute left-3 text-yellow-600" size={20} />
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-yellow-400 rounded-lg 
                         focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6 relative">
          <label className="block text-gray-800 mb-2 font-medium">Email</label>
          <div className="flex items-center">
            <Mail className="absolute left-3 text-yellow-600" size={20} />
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-yellow-400 rounded-lg 
                         focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-8 relative">
          <label className="block text-gray-800 mb-2 font-medium">Phone</label>
          <div className="flex items-center">
            <Phone className="absolute left-3 text-yellow-600" size={20} />
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-yellow-400 rounded-lg 
                         focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
              placeholder="Enter your phone"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-900 text-yellow-400 font-bold py-3 
                     rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}
