import React, { useEffect } from 'react';

const LandingPage = ({ onFadeComplete }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFadeComplete();
    }, 1000); // Adjust the duration to match the animation duration

    return () => clearTimeout(timeoutId);
  }, [onFadeComplete]);

  return (
    <div className="LandingPage w-full h-full flex items-center justify-center">
      <h1 className="text-5xl font-bold font-schoolbell animate-fadeMove">FreshStart</h1>
    </div>
  );
};

export default LandingPage;
