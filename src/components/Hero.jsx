import React from "react";

const Hero = ({ goToSection, goToLearnMore }) => {
  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden">
      <div className="gradient-bg absolute inset-0 h-[125vh]"></div>
      {/* Hero Section */}
      <div
        id="home"
        className="relative flex h-[100vh] w-full flex-col items-center justify-center"
      >
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

      {/* Divider */}
      <hr className="relative z-10 my-8 w-2/4 border-t border-text" />

      {/* About Section */}
      <div
        id="about"
        className="relative flex h-[25vh] w-full flex-col items-center justify-center"
      >
        <div className="relative z-10 max-w-4xl p-4 text-center">
          <p className="mb-4 text-2xl">
            Discover Echo, your go-to platform for expressing thoughts freely
            and anonymously. Start fresh every day with messages cleared at 12
            AM EST.
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
