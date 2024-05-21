import React, { useEffect } from "react";

const LandingPage = ({ onFadeComplete }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFadeComplete();
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [onFadeComplete]);

  return (
    <div className="LandingPage w-full h-full flex items-center justify-center transition-opacity duration-500 fade-in">
      <div className="flex flex-col items-center">
        <p className="font-nunito text-xl pb-3 text-[#120E09]">Welcome to</p>
        <h1 className="text-5xl font-bold font-schoolbell text-[#120E09]">
          FreshStart
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
