import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MenuLinks } from "./Navbar";
import DarkMode from "./DarkMode";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Navigate to home after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const handleExploreClick = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown menu
  };

  const handleIndianUniversitiesClick = () => {
    navigate("/university"); // Navigate to the university page
  };

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
        <nav className="mt-8">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="mb-5 inline-block"
                  onClick={toggleMenu}
                >
                  {name}
                </a>
              </li>
            ))}
            {/* Explore Option */}
            <li className="relative">
              <button
                onClick={handleExploreClick}
                className="text-lg font-medium hover:text-primary py-2"
              >
                Explore
              </button>
              {showDropdown && (
                <ul className="mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full">
                  <li>
                    <button
                      onClick={handleIndianUniversitiesClick}
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Indian Universities
                    </button>
                  </li>
                </ul>
              )}
            </li>
            {/* Logout or Get in Touch */}
            <li>
              {user ? (
                <button className="primary-btn" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <a href="/clients">
                  <button className="primary-btn" onClick={toggleMenu}>
                    Get in Touch
                  </button>
                </a>
              )}
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
          {/* Social Handles */}
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

import PropTypes from "prop-types";

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default ResponsiveMenu;
