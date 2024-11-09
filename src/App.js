import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import AppContent from './components/AppContent';


function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}


export default App;