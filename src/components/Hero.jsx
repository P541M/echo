import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex h-screen w-full flex-col items-center justify-center text-text"
      style={{ background: "linear-gradient(135deg, #080a1d, #8e94df)" }}
    >
      <div className="relative z-10 p-4 text-center">
        <h1 className="text-7xl font-bold text-text">Echo</h1>
        <p className="mb-4 mt-2 text-2xl font-medium text-text">
          Your Voice, Your Echo
        </p>
        <button className="rounded bg-secondary px-4 py-2 text-text transition hover:bg-accent">
          Make An Echo
        </button>
      </div>
    </div>
  );
};

export default Hero;
