import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center bg-background text-text py-8"
    >
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="max-w-3xl text-center mb-4">
        Echo is a platform where you can express your thoughts freely and
        anonymously. Every message gets cleared at 12 AM EST, giving you a fresh
        start each day.
      </p>
      <button className="px-4 py-2 bg-secondary text-background rounded hover:bg-accent transition">
        Learn More
      </button>
    </div>
  );
};

export default About;
