import { useState, useEffect } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logo.png";
import DarkMode from "./DarkMode";
import { useNavigate } from "react-router-dom";
export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services", 
  },
  {
    id: 3, 
    name: "Testimonials",
    link: "/#testimonials", 
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blogs",
  }
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();// State to control dropdown visibility

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToContactForm = (event) => {
    event.preventDefault();
    const contactForm = document.getElementById("support-section");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  const handleExploreClick = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown menu
  };

  const handleIndianUniversitiesClick = () => {
    navigate("/university");
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-12" />
            <span
              className="text-2xl sm:text-3xl font-semibold p-1"
              style={{
                fontFamily: "lulo-clean-w01-one-bold, sans-serif",
                fontSize: "24px",
                letterSpacing: "0.1em",
              }}
            >
              Mayurica
            </span>
            <span
              style={{
                color: `#F2C21A`,
                fontFamily: "lulo-clean-w01-one-bold, sans-serif",
                fontSize: "24px",
                letterSpacing: "0.1em",
              }}
              className="text-2xl sm:text-3xl font-semibold"
            >
              Chauhan
            </span>
          </div>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border- transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* Explore Dropdown */}
              <li className="relative py-4">
                <button
                  onClick={handleExploreClick}
                  className="text-lg font-medium hover:text-primary py-2"
                >
                  Explore
                </button>
                {showDropdown && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                    <li>
                      <button
                        onClick={handleIndianUniversitiesClick}
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Indian Universities
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              {user ? (
                <button
                  className="primary-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <a className="primary-btn" href="/clients" onClick={toggleMenu}>
                  Get in Touch
                </a>
              )}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden right-0">
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
                style={{ zIndex: 99 }}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} scrollToContactForm={scrollToContactForm} />
    </div>
  );
};

export default Navbar;
