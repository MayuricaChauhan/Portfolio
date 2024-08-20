import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import axios from "axios";

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

const Footer = () => {
  const [showSupport, setShowSupport] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSupportClick = () => {
    setShowSupport(!showSupport);
    if (!showSupport) {
      document.getElementById("support-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://api.brevo.com/v3/smtp/email',
        {
          sender: { email: 'iec@mayuricaeducation.in', name: formData.name }, // Sender is the user
        to: [{ email: 'iec@mayuricaeducation.in', name: 'Customer Support' }],
          subject: 'Customer Support Request',
          htmlContent: `
            <html>
              <body>
                <h1>Support Request</h1>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Message:</strong> ${formData.message}</p>
              </body>
            </html>
          `,
        },
        {
          headers: {
            'api-key': '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',
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.status === 201) {
        setFormStatus("Your message has been sent successfully! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Failed to send message.");
      }
    } catch (error) {
      console.error('Error sending email:', error.response ? error.response.data : error.message);
      setFormStatus("Error sending message.");
    }
  };

  return (
    <>
    
    <div id="support-section" className="bg-gray-900 text-white py-10">
            <div className="container">
              <h2 className="text-3xl font-bold mb-4 text-primary">Customer Support</h2>
              <p className="mb-4">
                If you have any questions or need help, feel free to reach out to the customer support team.
                You can also contact Ms. Mayurica directly via WhatsApp for quick assistance.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-4 rounded-lg">
                  Send
                </button>
                {formStatus && (
                  <div className="text-center mt-4 text-gray-600 dark:text-gray-400">
                    <p>{formStatus}</p>
                    <button onClick={() => setFormStatus("")} className="mt-4 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded">
                      Reload Form
                    </button>
                  </div>
                )}
              </form>
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
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://wa.me/919654223759" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl hover:text-primary duration-300" />
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
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                      onClick={link.title === "Customer Support" ? handleSupportClick : undefined}
                    >
                      {link.link.startsWith("mailto:") ? (
                        <a href={link.link}>
                          <span>{link.title}</span>
                        </a>
                      ) : (
                        <span>{link.title}</span>
                      )}
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
        {/* Customer Support Section */}
         
          
        
      </section>
    </div>
    </>
  );
};

export default Footer;
