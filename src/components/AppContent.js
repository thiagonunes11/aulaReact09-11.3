import React from 'react';
import { useTheme } from './ThemeContext';


function AppContent() {
  const { theme, toggleTheme } = useTheme();


  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Olá, mundo!</h1>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
}


export default AppContent;