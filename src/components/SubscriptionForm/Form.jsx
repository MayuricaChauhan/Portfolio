import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add contact to Brevo list
      const contactResponse = await axios.post(
        "https://api.brevo.com/v3/contacts",
        {
          email: formData.email,
          attributes: {
            FIRSTNAME: formData.name,
          },
          listIds: [2], // Replace with your actual Brevo list ID
        },
        {
          headers: {
            "api-key": "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", // Replace with your actual Brevo API key
            "Content-Type": "application/json",
          },
        }
      );

      if (contactResponse.status === 201) {
        setFormStatus("Subscription mail sent and email added to newsletter successfully!");
      } else {
        setFormStatus("Failed to send message or add email to newsletter.");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        setFormStatus("Error: " + error.response.data.message);
      } else if (error.request) {
        setFormStatus("No response received from the server.");
      } else {
        setFormStatus("Error: " + error.message);
      }
    }
  };

  const handleReload = () => {
    setFormData({
      name: "",
      email: "",
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
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">Subscribe to the newsletter</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/100 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/100 focus:outline-none"
            required
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
            <p>{formStatus}</p>
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
