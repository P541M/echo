import React, { useState, useEffect } from "react";

const InputPage = ({ addMessage, goToMessageBoard }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const goToDisclaimer = () => setShowDisclaimer(true);
  const goBack = () => setShowDisclaimer(false);

  const handleGoToMessageBoard = () => {
    goToMessageBoard(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
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
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-text">
      {showDisclaimer ? (
        <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-background">
          <div className="max-w-3xl bg-primary p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-center">Disclaimer</h1>
            <p className="mb-4 text-lg">
              This website is a free roam website where users can post whatever
              they want. As such, the website owner and administrators are not
              held liable for any content posted by users. By using this
              website, you agree that the{" "}
              <i>
                responsibility for any content lies solely with the individual
                who posted it
              </i>
              .
            </p>
            <div className="flex justify-center">
              <button
                onClick={goBack}
                className="px-4 py-2 border border-gray-300 rounded transition hover:bg-secondary text-background"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-nunito">Echoes in:</h2>
            <div className="text-xl mt-2">
              {timeLeft.hours !== undefined ? (
                <span>
                  {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span>
              ) : (
                <span>Loading...</span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-4">Echo</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addMessage(e.target.message.value);
                e.target.message.value = "";
              }}
              className="w-full max-w-md flex flex-col items-center"
            >
              <input
                type="text"
                name="message"
                placeholder="Speak your mind..."
                className="p-2 border border-gray-300 rounded-xl mb-4 w-full text-background"
                required
              />
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent rounded hover:bg-secondary transition text-background"
                >
                  Post
                </button>
                <button
                  type="button"
                  onClick={handleGoToMessageBoard}
                  className="px-4 py-2 bg-secondary rounded hover:bg-accent transition text-background"
                >
                  Messages
                </button>
              </div>
            </form>
          </div>
          <footer className="w-full py-4 border-t border-gray-300 flex justify-center bg-background">
            <button
              onClick={goToDisclaimer}
              className="px-4 py-2 border border-gray-300 rounded transition hover:bg-secondary text-background"
            >
              View Disclaimer
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default InputPage;
