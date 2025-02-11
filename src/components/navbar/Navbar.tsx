import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation() || { t: (key) => key, i18n: { changeLanguage: () => {} } };
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Glitch Effect */}
          <div className="text-2xl font-bold glitch">Hichem A. Benzaïr</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Navigation Links with Wave Effect */}
          <div className={`lg:flex space-x-6 ${isOpen ? "block" : "hidden"} lg:block absolute lg:static top-16 left-0 w-full bg-gray-900 lg:w-auto lg:bg-transparent text-center lg:text-left`}>
            {[
              { label: t("Home"), link: "/" },
              { label: t("Projects"), link: "/projects" },
              { label: t("Contact"), link: "mailto:hichembenzair@gmail.com" },
              { label: t("LinkedIn"), link: "https://www.linkedin.com/in/hichem-a-benzair" },
              { label: t("GitHub"), link: "https://github.com/MercuryAtom31" },
              { label: t("YouTube"), link: "https://www.youtube.com/@zinoenglish6019" }
            ].map((item, index) => (
              <a href={item.link} key={index} className="link">
                <span className="mask">
                  <div className="link-container">
                    <span className="link-title1 title">{item.label}</span>
                    <span className="link-title2 title">{item.label}</span>
                  </div>
                </span>
              </a>
            ))}

            {/* Language Switcher */}
            <div className="mt-2 lg:mt-0 text-center lg:text-left">
              <button onClick={() => changeLanguage("en")} className="mr-2">🇬🇧 English</button>
              <button onClick={() => changeLanguage("fr")}>🇫🇷 Français</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
