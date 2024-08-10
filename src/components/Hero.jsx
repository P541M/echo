import React from "react";

const Hero = ({ goToSection, goToLearnMore }) => {
  return (
    <div className="relative flex h-[125vh] w-full flex-col items-center overflow-hidden">
      <div className="gradient-bg absolute inset-0 h-full"></div>
      <div
        id="home"
        className="relative flex h-[100vh] w-full flex-row items-center justify-center"
      >
        <div className="relative z-10 w-full max-w-5xl p-8 text-left">
          <p className="mb-5 text-5xl font-medium">
            A platform where your voice is heard and your thoughts can be shared
            freely.
          </p>
          <i className="tracking-wide-animation mb-8 block text-5xl font-bold">
            Your Voice, Your Echo.
          </i>

          <button
            className="transform rounded-full bg-primary px-6 py-3 text-3xl font-semibold shadow-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-accent"
            onClick={() => goToSection("post-message")}
          >
            C'mon, Echo.
          </button>
        </div>
      </div>
      <div
        id="about"
        className="relative flex h-[25vh] w-full flex-col items-center justify-center"
      >
        {/* Divider */}
        <hr className="relative z-10 mb-8 w-3/4 border-t border-text" />
        <div className="relative z-10 max-w-5xl p-4 text-center">
          <p className="mb-4 text-3xl">
            Discover <span className="font-semibold">Echo</span>, your go-to
            spot for expressing thoughts freely and anonymously. Start fresh
            every day with messages cleared at 12 AM EST.
          </p>
          <p
            className="tracking-wide-transition cursor-pointer text-xl font-medium"
            onClick={goToLearnMore}
          >
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
