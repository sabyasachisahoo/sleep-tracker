import React, { useEffect, useState } from 'react';
import './Stats.css';

interface SleepSession {
  start: number;
  end: number;
  duration: number;
}

const Stats: React.FC = () => {
  const [sessions, setSessions] = useState<SleepSession[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem('sleepSessions');
    if (stored) {
      setSessions(JSON.parse(stored));
    }
  }, []);

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const formatDuration = (ms: number) => {
    const mins = Math.floor(ms / (1000 * 60));
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    return `${hrs}h ${remMins}m`;
  };

  return (
    <div className="stats-container">
      <h2>🛌 Sleep History</h2>
      {sessions.length === 0 ? (
        <p>No sleep data available yet.</p>
      ) : (
        <ul className="session-list">
          {sessions.map((session, index) => (
            <li key={index} className="session-card">
              <p><strong>Session:</strong> {index + 1}</p>
              <p><strong>Start:</strong> {formatTime(session.start)}</p>
              <p><strong>End:</strong> {formatTime(session.end)}</p>
              <p><strong>Duration:</strong> {formatDuration(session.duration)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Stats;
