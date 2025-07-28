import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStartSleep = () => {
    navigate('/sleep-tracker/tracker'); // Navigate to SleepTimer page or similar
  };

  return (
    <div className="home-container">
      <header className="home-header">
        {/* <h1>🌙 Sleep Tracker</h1> */}
        <p>Track your sleep and wake with clarity and calm.</p>
      </header>

      <main className="home-main">
        <button onClick={handleStartSleep} className="start-btn">
          Start Sleep Session
        </button>
        <a href="/stats" className="stats-link">
          View Sleep Stats →
        </a>
      </main>

      {/* <footer className="home-footer">
        <p>Made with 💤 by Sabyasachi</p>
      </footer> */}
    </div>
  );
};

export default Home;
