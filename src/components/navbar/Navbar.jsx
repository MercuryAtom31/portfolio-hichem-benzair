import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Glitch Logo */}
          <div className="text-2xl font-bold glitch">Hichem A. Benzaïr</div>

          {/* Links with wave effect */}
          <div className="flex space-x-6">
            <a href="#" className="link">
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">Blog</span>
                  <span className="link-title2 title">Blog</span>
                </div>
              </span>
            </a>
            <a href="mailto:hichembenzair@gmail.com" className="link">
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">Contact</span>
                  <span className="link-title2 title">Contact</span>
                </div>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/hichem-a-benzair"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">LinkedIn</span>
                  <span className="link-title2 title">LinkedIn</span>
                </div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
