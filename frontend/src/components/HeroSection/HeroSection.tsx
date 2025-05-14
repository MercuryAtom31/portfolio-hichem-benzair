import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';
import profileImage from '../../assets/profile.jpeg';

const HeroSection: React.FC = () => {
    const { t } = useTranslation(); // Use i18n translation

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">{t("greeting")}</h1>
                <h2 className="hero-subtitle">{t("welcome")}</h2>
                {/* <p className="hero-tagline">{t("unleashing_creativity")}</p> */}

                {/* Download Resume Button */}
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
