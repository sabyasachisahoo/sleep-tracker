import React, { useState } from 'react';
import './SleepTimer.css';

interface SleepSession {
  start: number;
  end: number;
  duration: number;
}

const SleepTimer: React.FC = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [isSleeping, setIsSleeping] = useState(false);

  const handleStart = () => {
    const now = Date.now();
    setStartTime(now);
    setIsSleeping(true);
  };

  const handleStop = () => {
    const now = Date.now();
    setEndTime(now);
    setIsSleeping(false);

    if (startTime) {
      const duration = now - startTime;
      const sleepSession: SleepSession = {
        start: startTime,
        end: now,
        duration,
      };

      // Save to sessionStorage
      const storedSessions = sessionStorage.getItem('sleepSessions');
      const sessions = storedSessions ? JSON.parse(storedSessions) : [];
      sessions.push(sleepSession);
      sessionStorage.setItem('sleepSessions', JSON.stringify(sessions));
    }
  };

  return (
    <div className="sleep-timer-container">
      <h2>Sleep Session Tracker</h2>
      {!isSleeping ? (
        <button onClick={handleStart} className="sleep-btn">
          Start Sleep 💤
        </button>
      ) : (
        <button onClick={handleStop} className="wake-btn">
          Wake Up 🌤️
        </button>
      )}
      {startTime && endTime && (
        <p>
          Slept for {(endTime - startTime) / (1000 * 60)} minutes.
        </p>
      )}
    </div>
  );
};

export default SleepTimer;
