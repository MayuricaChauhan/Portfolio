import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MenuLinks } from "./Navbar";
import DarkMode from "./DarkMode";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "right-0" : "-right-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="absolute top-6 right-14">
        <DarkMode />
      </div>
      <div className="card">
        {showMenu}
        <nav className="mt-8">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a href={data.link} className="mb-5 inline-block" onClick={toggleMenu}>
                  {data.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact-form">
                <button className="primary-btn" onClick={toggleMenu}>Get in Touch</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <div>
          <h1 className="text-xl font-bold sm:text-left text-justify flex items-center gap-1">
            Mayurica<span className="text-primary">Chauhan</span>
          </h1>
          <br />
          {/* Social Handle */}
          <div className="flex items-center gap-4">
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
      </div>
    </div>
  );
};

export default ResponsiveMenu;
