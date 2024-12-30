import React from 'react';
import './HeroSection.css';
import profileImage from '../../assets/profile.jpeg';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Hey there 👋</h1>
                <h2 className="hero-subtitle">Welcome to My Portfolio</h2>
                <p className="hero-tagline">Unleashing Creativity</p>
                <button className="hero-btn">Explore</button>
            </div>
            <div className="hero-image">
                <img src={profileImage} alt="Profile" />
            </div>
        </section>
    );
};

export default HeroSection;
