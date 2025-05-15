import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';
import profileImage from '../../assets/profile.jpeg';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/videos/montreal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to improve text readability */}
      <div className="video-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">{t("greeting")}</h1>
        <h2 className="hero-subtitle">{t("welcome")}</h2>
        <a
          href="/CVs_Eng_Fr_Hichem_Benzair.pdf"
          download="CVs_Eng_Fr_Hichem_Benzair.pdf"
          className="hero-btn"
        >
          {t("download_resume")}
        </a>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default HeroSection;
