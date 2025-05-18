import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

import FranceFlag from "../../assets/france-flag.svg";
import UkFlag from "../../assets/united-states-of-america-flag.svg";

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
    setIsOpen(false); // Close menu after logout
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && window.innerWidth < 1024) {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold glitch whitespace-nowrap hover:opacity-80 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Hichem A. Benzaïr
          </Link>

          {/* Hamburger Button */}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Menu Container */}
          <div
            ref={menuRef}
            className={`
              ${isOpen ? "flex flex-col items-center space-y-4" : "hidden"}
              lg:flex lg:flex-row lg:items-center lg:justify-start lg:space-x-6 lg:space-y-0
              absolute lg:static top-16 left-0 w-full bg-gray-900
              lg:w-auto lg:bg-transparent
              text-center lg:text-left
            `}
          >
            {[
              { label: t("Home"), link: "/", internal: true },
              { label: t("Projects"), link: "/projects", internal: true },
              { label: t("Contact Me"), link: "/contact", internal: true },
              {
                label: t("LinkedIn"),
                link: "https://www.linkedin.com/in/hichem-benzair",
                internal: false,
              },
              {
                label: t("Github"),
                link: "https://github.com/MercuryAtom31",
                internal: false,
              },
            ].map((item, index) =>
              item.internal ? (
                <Link
                  to={item.link}
                  key={index}
                  className="link"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">{item.label}</span>
                      <span className="link-title2 title">{item.label}</span>
                    </div>
                  </span>
                </Link>
              ) : (
                <a
                  href={item.link}
                  key={index}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">{item.label}</span>
                      <span className="link-title2 title">{item.label}</span>
                    </div>
                  </span>
                </a>
              )
            )}

            {/* Admin Dashboard link for admin user */}
            {user && user.email === "hichembenzair@gmail.com" && (
              <Link
                to="/admin/testimonials"
                className="link"
                onClick={() => setIsOpen(false)}
              >
                <span className="mask">
                  <div className="link-container">
                    <span className="link-title1 title">Admin</span>
                    <span className="link-title2 title">Admin</span>
                  </div>
                </span>
              </Link>
            )}

            {/* Language Switcher */}
            <div className="mt-2 lg:mt-0 text-center lg:text-left">
              <button
                onClick={() => {
                  changeLanguage("en");
                  setIsOpen(false);
                }}
                className="mr-2"
              >
                <img
                  src={UkFlag}
                  alt="English"
                  className="inline-block h-6 w-6"
                />
              </button>
              <button
                onClick={() => {
                  changeLanguage("fr");
                  setIsOpen(false);
                }}
              >
                <img
                  src={FranceFlag}
                  alt="French"
                  className="inline-block h-6 w-6"
                />
              </button>
            </div>

            {/* Authentication Buttons */}
            <div className="mt-2 lg:mt-0 text-center lg:text-left">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="animated-border-btn"
                >
                  {t("logout")}
                </button>
              ) : (
                <Link
                  to="/login"
                  className="animated-border-btn"
                  onClick={() => setIsOpen(false)}
                >
                  {t("login")}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
