import React, { useEffect, useState } from "react";

// SplashScreen component renders the welcome screen and triggers complete after a timeout
const SplashScreen = ({ onFadeComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onFadeComplete();
      }, 1000); // Additional timeout to allow fade-out transition
    }, 2000); // 2 seconds for display before starting fade-out

    return () => clearTimeout(timeoutId);
  }, [onFadeComplete]);

  return (
    <div className={`w-full h-screen flex items-center justify-center bg-background transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-bold text-text">Echo</h1>
        <p className="text-2xl font-medium mt-2 text-text">
          Your Voice, Your Echo
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
