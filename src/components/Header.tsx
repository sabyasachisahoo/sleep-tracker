import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🌙 Sleep Tracker</h1>
        <nav>
          <a href="/sleep-tracker">Home</a>
          <a href="/sleep-tracker/stats">Stats</a>
          <a href="/sleep-tracker/tracker">Tracker</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
