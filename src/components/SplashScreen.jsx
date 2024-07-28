import React, { useEffect, useState } from "react";

const SplashScreen = ({ onFadeComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onFadeComplete();
      }, 1000); // This timeout is for the fade-out animation duration
    }, 1500); // This timeout is for the initial display duration

    return () => clearTimeout(timeoutId);
  }, [onFadeComplete]);

  return (
    <div
      className={`z-[9999] fixed top-0 left-0 w-full h-full flex items-center justify-center bg-background transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
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
