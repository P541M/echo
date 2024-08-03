import React from "react";

const Hero = ({ goToSection }) => {
  return (
    <div
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-text"
    >
      <div className="gradient-bg absolute inset-0"></div>
      <div className="relative z-10 max-w-3xl p-8 text-left">
        <p className="mb-4 text-3xl font-medium text-text">
          Welcome to Echo, a platform where your voice is heard and your
          thoughts can be shared freely.
        </p>
        <p className="mb-8 text-3xl font-medium">
          It's simply{" "}
          <i className="tracking-wide-animation font-bold">
            Your Voice, Your Echo.
          </i>
        </p>
        <button
          className="rounded bg-secondary px-4 py-2 text-text transition hover:bg-accent"
          onClick={() => goToSection("about")}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
