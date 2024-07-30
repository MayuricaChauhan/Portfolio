import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Features",
    link: "/#blogs",
  },
  {
    title: "Works",
    link: "/#testimonials",
  },
  {
    title: "Career",
    link: "/#services",
  },
];

const HelpLinks = [
  {
    title: "Customer Support",
    link: "#",
  },
  {
    title: "Contact Us",
    link: "mailto:mayurica87@gmail.com",
  }
];

const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
];

const Footer = () => {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(!showSupport);
    document.getElementById("support")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-dark text-white" id="footer">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-2">
              Mayurica<span className="text-primary">Chauhan</span>
            </h1>
            <p className="text-sm">
              Ms.Mayurica’s educational background includes a Bachelor of Commerce from Kirori Mal College, Delhi and an MBA in Human Resource Management from the University of New Haven in the United States. 
            <br/>
            In addition, Ms. Chauhan holds the prestigious UCLA certification in career counselling. 
            <br />
            She is also a proud recipient of the prestigious IEC certificate from University of California, Irvine. Ms Chauhan’s own experience as an international student has allowed her to empathize deeply with aspiring students.{" "}
            </p>
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
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                    >
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
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
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
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                    >
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
        {showSupport && (
          <div id="support" className="bg-gray-900 text-white py-10">
            <div className="container">
              <h2 className="text-2xl font-bold mb-4 text-primary">Customer Support</h2>
              <p className="mb-4">
                If you have any questions or need help, feel free to reach out
                to the customer support team.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
                  ></textarea>
                </div>
                <button type="submit" className="primary-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Footer;
