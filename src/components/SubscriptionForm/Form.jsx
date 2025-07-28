import { useState, useRef } from "react";
import axios from "axios";


const Form = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
    action: "subscribe", // 👈 Important to tell backend which template to use
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/brevo", formData);

      if (response.status === 200) {
        setFormStatus("Subscription mail sent and email added to newsletter successfully!");
      } else {
        setFormStatus("Failed to send message or add email to newsletter.");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        const errData = error.response.data;
        const message = typeof errData === "object" ? errData.message : errData;
        setFormStatus("Error: " + message);
      } else if (error.request) {
        setFormStatus("No response received from the server.");
      } else {
        setFormStatus("Error: " + error.message);
      }
    }
  };

  const handleReload = () => {
    setFormData({
      user_name: "",
      user_email: "",
      user_message: "",
      action: "subscribe", // Keep this consistent
    });
    setFormStatus("");
  };

  return (
    <span
      data-aos="fade-up"
      data-aos-offset="0"
      id="contact-form"
      className="flex items-center justify-center min-h-[60vh] dark:bg-gray-800"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
          Subscribe to the newsletter
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name="user_name" // Matches the template placeholder
            id="name"
            value={formData.user_name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/100 focus:outline-none text-black placeholder-black"
            required
            placeholder="Enter your name"
            autoComplete="user_name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            name="user_email" // Matches the template placeholder
            id="email"
            value={formData.user_email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/100 focus:outline-none text-black placeholder-black"
            required
            placeholder="Enter your email"
            autoComplete="user_email"

          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            name="user_message" // Matches the template placeholder
            id="message"
            value={formData.user_message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/100 focus:outline-none text-black placeholder-black"
            required
            placeholder="Type your message"
            autoComplete="user_message"

          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>

        {formStatus && (
          <div className="text-center mt-4">
            <p className="text-black">{formStatus}</p>
            <button
              onClick={handleReload}
              className="mt-4 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded"
            >
              Reload Form
            </button>
          </div>
        )}
      </form>
    </span>
  );
};

export default Form;
