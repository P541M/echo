import React, { useEffect } from "react";

// LandingPage component renders the welcome screen and triggers fade complete after a timeout
const LandingPage = ({ onFadeComplete }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFadeComplete();
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [onFadeComplete]);

  return (
    <div className="w-full h-full flex items-center justify-center transition-opacity duration-500 fade-in bg-background">
      <div className="flex flex-col items-center">
        <p className="text-xl pb-3 text-text">Welcome to</p>
        <h1 className="text-5xl font-bold text-text">FreshStart</h1>
      </div>
    </div>
  );
};

export default LandingPage;
