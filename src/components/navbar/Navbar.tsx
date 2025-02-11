import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation() || { t: (key) => key, i18n: { changeLanguage: () => {} } };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold glitch">Hichem A. Benzaïr</div>

          <div className="flex space-x-6">
            <Link to="/" className="link">{t("home")}</Link>
            <Link to="/projects" className="link">{t("projects")}</Link>
            <a href="mailto:hichembenzair@gmail.com" className="link">{t("contact")}</a>
            <a href="https://www.linkedin.com/in/hichem-a-benzair" target="_blank" rel="noopener noreferrer" className="link">{t("linkedin")}</a>
            <a href="https://github.com/MercuryAtom31" target="_blank" rel="noopener noreferrer" className="link">{t("github")}</a>
            <div className="language-switcher ml-4">
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
