import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { GiSpeakerOff } from "react-icons/gi"; // Import the muffle icon

const Hero = ({ goToSection, goToLearnMore }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const randomMessages = [
      "Just had the best coffee!",
      "Today was a good day.",
      "Learning React is fun!",
      "Keep pushing forward.",
      "Grateful for this moment.",
      "Trying something new today.",
      "Random thoughts flying around.",
    ];

    const generateMessages = () => {
      return Array.from({ length: 5 }, () => {
        const message =
          randomMessages[Math.floor(Math.random() * randomMessages.length)];
        const likes = Math.floor(Math.random() * 1000); // Random likes between 0 and 99
        const muffles = Math.floor(Math.random() * 500); // Random muffles between 0 and 49
        return { text: message, likes, muffles };
      });
    };

    setMessages(generateMessages());
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden">
      <div className="gradient-bg absolute inset-0 h-[125vh]"></div>
      {/* Hero Section */}
      <div
        id="home"
        className="relative flex h-[100vh] w-full flex-row items-center justify-between"
      >
        <div className="relative z-10 w-1/2 p-8 text-left">
          <p className="mb-5 pl-32 text-5xl font-medium">
            A platform where your voice is heard and your thoughts can be shared
            freely.
          </p>
          <i className="tracking-wide-animation pl-32 text-5xl font-bold">
            Your Voice, Your Echo.
          </i>

          <button
            className="ml-32 mt-5 transform rounded-full bg-primary px-6 py-3 text-3xl font-semibold shadow-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-accent"
            onClick={() => goToSection("post-message")}
          >
            C'mon, Echo.
          </button>
        </div>

        <div className="relative z-10 flex w-1/2 items-center justify-center">
          {messages.map((message, index) => (
            <div
              key={index}
              className="animate-float absolute flex flex-col rounded-2xl bg-secondary p-6 text-white shadow-lg"
              style={{
                top: `${20 + index * 15}%`, // Fixed positions
                left: `${50}%`,
                transform: `translate(-50%, -50%)`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: "4s", // Adjust to slow down the float
              }}
            >
              <p className="mb-4 text-lg">{message.text}</p>
              <div className="mt-auto">
                <hr className="mb-4 border-t border-primary" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AiFillHeart className="text-2xl text-accent" />
                    <span className="ml-2 text-lg">{message.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <GiSpeakerOff className="text-2xl text-red-500" />
                    <span className="ml-2 text-lg">{message.muffles}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="relative z-10 my-8 w-3/4 border-t border-text" />

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
