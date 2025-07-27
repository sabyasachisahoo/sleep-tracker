import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Made with ☕ and 💤 by Sabyasachi</p>
      <small>&copy; {new Date().getFullYear()} Sleep Tracker</small>
    </footer>
  );
};

export default Footer;
