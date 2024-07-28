import React from "react";

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="w-full flex flex-col items-center bg-background text-text py-8"
    >
      <h2 className="text-4xl font-bold mb-4">How It Works</h2>
      <ul className="list-none text-center">
        <li className="mb-2">Say whatever you want</li>
        <li className="mb-2">Look at others' messages</li>
        <li className="mb-2">Like messages that resonate with you</li>
        <li className="mb-2">Stay 100% anonymous</li>
        <li>Everything is cleared at 12 AM EST</li>
      </ul>
    </div>
  );
};

export default HowItWorks;
