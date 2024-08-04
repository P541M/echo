import React from "react";

const Hero = ({ goToSection }) => {
  return (
    <div
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="gradient-bg absolute inset-0"></div>
      <div className="relative z-10 max-w-4xl p-8 text-left">
        <p className="mb-4 text-4xl font-medium">
          A platform where your voice is heard and your thoughts can be shared
          freely.
        </p>
        <p className="mb-8 text-4xl font-medium">
          It's simply{" "}
          <i className="tracking-wide-animation font-bold">
            Your Voice, Your Echo.
          </i>
        </p>
        <button
          className="transform rounded-full bg-primary px-6 py-3 text-2xl font-semibold shadow-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-accent"
          onClick={() => goToSection("post-message")}
        >
          C'mon, Echo.
        </button>
      </div>
    </div>
  );
};

export default Hero;
