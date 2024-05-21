import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import MessageInput from './components/MessageInput';
import MessageBoard from './components/MessageBoard';
import './index.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [showBoard, setShowBoard] = useState(false);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [timeLeft, setTimeLeft] = useState('');
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(savedMessages);

    const updateTimer = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const timeDiff = midnight - now;
      if (timeDiff <= 0) {
        handleRefresh();
      } else {
        const hours = Math.floor(timeDiff / 1000 / 60 / 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRefresh = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      window.location.reload();
    }, 1000); // Match the CSS transition duration
  };

  const addMessage = (message) => {
    const newMessages = [...messages, { text: message, timestamp: new Date().toLocaleTimeString() }];
    setMessages(newMessages);
    localStorage.setItem('messages', JSON.stringify(newMessages));
    setFadeClass('fade-out');
    setTimeout(() => {
      setShowBoard(true);
      setFadeClass('fade-in');
    }, 1000); // Match the CSS transition duration
  };

  const showMessageInput = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setShowBoard(false);
      setFadeClass('fade-in');
    }, 1000); // Match the CSS transition duration
  };

  const handleLandingFadeComplete = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setShowLanding(false);
      setFadeClass('fade-in');
    }, 1000); // Match the CSS transition duration
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-gray-100 transition-opacity duration-1000 ${fadeClass}`}>
      {showLanding ? (
        <LandingPage onFadeComplete={handleLandingFadeComplete} />
      ) : (
        <>
          <div className="text-xl mb-4 font-schoolbell">
            {timeLeft}
          </div>
          {!showBoard ? (
            <MessageInput addMessage={addMessage} fadeClass={fadeClass} />
          ) : (
            <MessageBoard messages={messages} showMessageInput={showMessageInput} fadeClass={fadeClass} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
