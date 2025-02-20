import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold glitch">Hichem A. Benzaïr</div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          <div
            className={`lg:flex space-x-6 ${
              isOpen ? "block" : "hidden"
            } lg:block absolute lg:static top-16 left-0 w-full bg-gray-900 lg:w-auto lg:bg-transparent text-center lg:text-left`}
          >
            {[
              { label: t("Home"), link: "/", internal: true },
              { label: t("Projects"), link: "/projects", internal: true },
              { label: t("Contact Me"), link: "/contact", internal: true },
              {
                label: t("LinkedIn"),
                link: "https://www.linkedin.com/in/hichem-a-benzair",
                internal: false,
              },
              {
                label: t("Github"),
                link: "https://github.com/MercuryAtom31",
                internal: false,
              },
              { label: t("Youtube"), link: "/videos", internal: true },
            ].map((item, index) =>
              item.internal ? (
                <Link to={item.link} key={index} className="link">
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

            {/* Conditionally show Admin Dashboard link for the admin user */}
            {user && user.email === "hichembenzair@gmail.com" && (
              <Link to="/admin/testimonials" className="link">
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
              <button onClick={() => changeLanguage("en")} className="mr-2">
                🇬🇧
              </button>
              <button onClick={() => changeLanguage("fr")}>🇫🇷</button>
            </div>

            {/* Authentication Buttons */}
            <div className="mt-2 lg:mt-0 text-center lg:text-left">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded"
                >
                  {t("logout")}
                </button>
              ) : (
                <Link to="/login" className="bg-green-500 px-4 py-2 rounded">
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
