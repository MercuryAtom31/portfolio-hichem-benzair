import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <a href="https://www.youtube.com/@zinoenglish6019" target="_blank" rel="noopener noreferrer" title="YouTube">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube Icon" className="footer__icon" />
          </a>
          <a href="https://www.linkedin.com/in/hichem-a-benzair" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384072.png" alt="LinkedIn Icon" className="footer__icon" />
          </a>
          <a href="https://github.com/MercuryAtom31" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub Icon" className="footer__icon" />
          </a>
          <a href="mailto:hichembenzair@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail Icon" className="footer__icon" />
          </a>
        </div>
        <p className="footer__credit">&copy; 2025 Hichem A. Benzaïr. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
