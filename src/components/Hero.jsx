import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-[600px] flex flex-col items-center justify-center text-text"
      style={{ background: "linear-gradient(135deg, #080a1d, #8e94df)" }}
    >
      <div className="relative z-10 text-center p-4">
        <h1 className="text-6xl font-bold text-text">Echo</h1>
        <p className="text-xl font-medium mt-2 mb-4 text-text">
          Your Voice, Your Echo
        </p>
        <button className="px-4 py-2 bg-secondary text-text rounded hover:bg-accent transition">
          Make An Echo
        </button>
      </div>
    </div>
  );
};

export default Hero;
