import { useState, useEffect } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logo.png";
import DarkMode from "./DarkMode";
import { useNavigate } from "react-router-dom";
import SkillEnhancementSection from "../TrainingFeeTable/TrainingFeeTable";

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
  },
  {
    id: 5,
    name: "Program",
    submenu: [
      {
        name: "Skill Enhancement",
        link: "/#skill-enhancement",
      },
      {
        name: "IELTS",
        link: "/#ielts",
      },
      {
        name: "Communication Skills",
        link: "/#communication-skills",
      },
    ],
  },
];


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  const navigate = useNavigate();

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
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const handleExploreClick = () => {
    setShowDropdown(showDropdown === "explore" ? null : "explore");
  };

  const handleIndianUniversitiesClick = () => {
    navigate("/university");
  };

  // ✅ Smooth Scroll to Section Function
  const handleScrollLink = (e, link) => {
    e.preventDefault();
    const id = link.replace("/#", ""); // remove '/#'
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
      setShowDropdown(null);
    }
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* ---------- Logo ---------- */}
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

          {/* ---------- Desktop Navbar ---------- */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map((menu) => (
                <li key={menu.id} className="relative py-4 group">
                  {/* Main Menu Item */}
                  {!menu.submenu ? (
                    <a
                      href={menu.link}
                      onClick={(e) => handleScrollLink(e, menu.link)}
                      className="text-lg font-medium hover:text-yellow-500 py-2 transition-colors duration-300"
                    >
                      {menu.name}
                    </a>
                  ) : (
                    <>
                      {/* Dropdown Trigger */}
                      <button
                        onClick={() =>
                          setShowDropdown(
                            showDropdown === menu.id ? null : menu.id
                          )
                        }
                        className="flex items-center gap-1 text-lg font-medium hover:text-yellow-500 py-2 transition-colors duration-300"
                      >
                        {menu.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-4 h-4 mt-0.5 transition-transform duration-300 ${
                            showDropdown === menu.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      <ul
                        className={`absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg transition-all duration-300 z-50 ${
                          showDropdown === menu.id
                            ? "opacity-100 visible translate-y-1"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        {menu.submenu.map((sub, idx) => (
                          <li key={idx}>
                            <a
                              href={sub.link}
                              onClick={(e) => handleScrollLink(e, sub.link)}
                              className="block px-4 py-2 text-gray-800 hover:bg-yellow-100 hover:text-yellow-700 rounded-md"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}

              {/* ---------- Explore Dropdown ---------- */}
              <li className="relative py-4">
                <button
                  onClick={handleExploreClick}
                  className="text-lg font-medium hover:text-yellow-500 py-2"
                >
                  Explore
                </button>
                {showDropdown === "explore" && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-50">
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

              {/* ---------- Auth Buttons ---------- */}
              {user ? (
                <button className="primary-btn" onClick={handleLogout}>
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

          {/* ---------- Mobile Menu ---------- */}
          <div className="flex items-center gap-4 md:hidden right-0">
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

      <ResponsiveMenu
        showMenu={showMenu}
        toggleMenu={toggleMenu}
        scrollToContactForm={scrollToContactForm}
      />
    </div>
  );
};

export default Navbar;
