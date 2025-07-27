import React, { useContext } from 'react';
import { ThemeContext } from '../utils/TheContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ marginTop: '1rem' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode 🌗
    </button>
  );
};

export default ThemeToggle;
