import React from "react";

const About = ({ goToLearnMore }) => {
  return (
    <div
      id="about"
      className="relative flex h-[25vh] w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="gradient-bg absolute inset-0 opacity-50"></div>
      <div className="relative z-10 max-w-4xl p-4 text-center">
        <p className="mb-4 text-2xl">
          Discover Echo, your go-to platform for expressing thoughts freely and
          anonymously. Start fresh every day with messages cleared at 12 AM EST.
        </p>
        <p
          className="tracking-wide-transition cursor-pointer text-xl font-medium"
          onClick={goToLearnMore}
        >
          Learn More
        </p>
      </div>
    </div>
  );
};

export default About;
