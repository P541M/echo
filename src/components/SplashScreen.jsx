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
      className={`fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-background transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-bold text-text">Echo</h1>
        <p className="mt-2 text-2xl font-medium text-text">
          Your Voice, Your Echo
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
