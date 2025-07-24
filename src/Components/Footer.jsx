import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made by Salman Khalid</p>
      <div className="social-icons">
        <a
          href="https://github.com/salmankhalid7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/salman-khalid7/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;