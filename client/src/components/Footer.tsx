import React from 'react';
import logo from '../assets/RainyCityLogo2.png';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-social">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Rainy City Tech Blog Logo" />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Rainy City Tech Blog. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
