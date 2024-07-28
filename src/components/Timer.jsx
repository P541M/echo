import React, { useState, useEffect } from "react";

// Timer component shows countdown to the next reset at midnight ET
const Timer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setUTCHours(5, 0, 0, 0); // Midnight ET (UTC-5)
    if (now > nextMidnight) {
      nextMidnight.setDate(nextMidnight.getDate() + 1);
    }
    const difference = nextMidnight - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl text-text">Next reset in:</h2>
      <div className="text-xl text-text">
        {timeLeft.hours !== undefined ? (
          <span>
            {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default Timer;
