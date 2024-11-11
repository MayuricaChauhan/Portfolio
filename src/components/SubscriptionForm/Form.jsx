import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Form Component
const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
    .sendForm(
      "service_gww3nnl", // Replace with your EmailJS service ID
      "template_ohvzoio", // Replace with your EmailJS template ID
      formRef.current,
      "jDGsTZzaR7TZgGvpB" // Replace with your EmailJS public key
    )
      .then(
        () => {
          setFormStatus("Email sent successfully!");
        },
        (error) => {
          console.log("EmailJS error:", error.text);
          setFormStatus("Failed to send email. Please try again.");
        }
      );
  };

  const handleReload = () => {
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
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
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            name="message" // Matches the template placeholder
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/100 focus:outline-none text-black placeholder-black"
            required
            placeholder="Type your message"
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
