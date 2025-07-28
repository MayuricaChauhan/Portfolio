import { useState, useRef } from "react"; // Make sure useRef is imported here
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

// Rest of the component code...


// Footer Links, Help Links, Resources Links
const FooterLinks = [
  { title: "About", link: "/#about" },
  { title: "Features", link: "/#blogs" },
  { title: "Works", link: "/#testimonials" },
  { title: "Career", link: "/#services" },
];

const HelpLinks = [
  { title: "Customer Support", link: "/#support-section" },
  { title: "Contact Us", link: "mailto:mayurica87@gmail.com" },
];

const ResourcesLinks = [
  { title: "Free Ebooks", link: "/#ebooks" },
  { title: "How To Blog", link: "/#blogs" },
];


// Form Component
const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

const { user_name, user_email , user_message} = formData;

 try {
    const response = await fetch("/api/brevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_name,
        user_email,
        user_message
      })
    });

    const data = await response.json();

    if (response.ok) {
      setFormStatus("✅ Subscription successful!");
    } else {
      setFormStatus(`❌ Error: ${data.error || "Could not add contact."}`);
    }
  } catch (error) {
    console.error("Brevo API error:", error);
    setFormStatus("⚠️ Something went wrong. Please try again.");
  }
};

  const handleReload = () => {
    setFormData({
      user_name: "",
      user_email: "",
      user_message: ""
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/100 focus:outline-none text-black placeholder-gray-500"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/100 focus:outline-none text-black placeholder-gray-500"
            required
            placeholder="Enter your email"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/100 focus:outline-none text-black placeholder-gray-500"
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

// Main Footer Component
const Footer = () => {

  return (
    <>
      <div id="support-section" className="bg-gray-900 text-white py-10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-primary">Customer Support</h2>
          <p className="mb-4">
            If you have any questions or need help, feel free to reach out to the customer support team.
            You can also contact Ms. Mayurica directly via WhatsApp for quick assistance.
          </p>

          {/* Include the Form Component Here */}
          <Form />

          <div className="text-center mt-6">
            <p className="text-primary text-lg">Or contact Ms. Mayurica on WhatsApp:</p>
            <a href="https://wa.me/919654223759" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 mx-auto">
                <FaWhatsapp className="text-2xl" />
                Chat on WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white text-justify" id="footer">
        <section className="container py-10">
          <div className="grid md:grid-cols-3 py-5">
            {/* Company Details */}
            <div className="py-8 px-4">
              <br />
              {/* Social Handles */}
              <div className="flex items-center gap-4 mt-6">
                <a href="https://www.instagram.com/uninxt/">
                  <FaInstagram className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.facebook.com/uninxt.uni?mibextid=LQQJ4d">
                  <FaFacebook className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.linkedin.com/company/uninxt/posts/?feedView=all">
                  <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="https://wa.me/919654223759" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="mailto:iec@mayuricaeducation.in">
        <TfiEmail className="text-2xl hover:text-primary duration-300" />
</a>

              </div>
            </div>
            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Company</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400">
                        <a href={link.link}>
                          <span>{link.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Help</h1>
                  <ul className="flex flex-col gap-3">
                    {HelpLinks.map((link) => (
                      <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400">
                        <a href={link.link}>
                          <span>{link.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Resources</h1>
                  <ul className="flex flex-col gap-3">
                    {ResourcesLinks.map((link) => (
                      <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400">
                        <a href={link.link}>
                          <span>{link.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
