// src/components/Header.js
import React from 'react';
import backgroundImage from '../image.png'; // Ensure correct path
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons
import TypingAnimation from './TypingAnimation'; // Import TypingAnimation
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/jayank-mahaur/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/jayank-3112" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub size={20} />
        </a>
        <a href="tel:+917055055277" className="icon-link">
          <FaPhone size={20} />
        </a>
        <a
          href="#"
          className="icon-link"
          onClick={() => {
            console.log("Mailto link clicked");
            window.open('mailto:jayankmahaur@gmail.com');
          }}
        >
          <FaEnvelope size={20} />
        </a>
      </div>
      <div className="content">
        <h1 className="name">Jayank Mahaur</h1>
        <h3 className="subtitle">
          <TypingAnimation
            phrases={["Web Developer", "Technology Enthusiast", "Problem Solver", "Keen Learner"]}
            delay={2000} // Delay between phrases
          />
        </h3>
        <button className="button" onClick={() => window.open('https://drive.google.com/file/d/1Xwb0r9tS5Vwm81adrSQFsQNWheq7TXHG/view?usp=sharing')}>
          Open Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
