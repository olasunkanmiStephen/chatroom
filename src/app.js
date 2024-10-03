import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './component/Chat/Chat';
import Join from './component/Join/Join';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <button 
          className="fixed top-4 right-4 z-10 p-2 bg-gray-800 dark:bg-gray-100 text-white dark:text-black rounded-md"
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Router>
          <Routes>
            <Route path='/' element={<Join />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
