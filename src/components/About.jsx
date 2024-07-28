import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-center py-20 bg-backgroundLight"
    >
      <div className="relative z-10 text-center p-4 max-w-3xl">
        <p className="text-xl mb-4">
          Echo is a platform where you can express your thoughts freely and
          anonymously. Every message gets cleared at 12 AM EST, giving you a
          fresh start each day.
        </p>
        <p
          className="text-secondary cursor-pointer hover:text-accent transition"
          onClick={() => alert("Learn More clicked!")}
        >
          Learn More
        </p>
      </div>
    </div>
  );
};

export default About;
