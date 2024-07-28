import React from "react";

// LandingPage component renders the welcome screen
const LandingPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-text">Echo</h1>
        <p className="text-xl pt-3 text-text">Your Voice, Your Echo</p>
      </div>
    </div>
  );
};

export default LandingPage;
