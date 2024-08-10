import React, { useState, useEffect } from "react";

const InputPage = ({
  addMessage,
  goToMessageBoard,
  showDisclaimer,
  goToDisclaimer,
  goBack,
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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
    <div
      id="post-message"
      className="flex w-full flex-col items-center bg-background py-8 text-text"
    >
      {showDisclaimer ? (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-4">
          <div className="max-w-3xl rounded-xl bg-primary p-8 shadow-lg">
            <h1 className="mb-4 text-center text-4xl font-bold">Disclaimer</h1>
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
                className="rounded border border-gray-300 px-4 py-2 text-background transition hover:bg-secondary"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8 text-center">
            <h2 className="text-2xl">Echoes in:</h2>
            <div className="mt-2 text-xl">
              {timeLeft.hours !== undefined ? (
                <span>
                  {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span>
              ) : (
                <span>Loading...</span>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col items-center">
            <h1 className="mb-4 text-5xl font-bold">Echo</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addMessage(e.target.message.value);
                e.target.message.value = "";
              }}
              className="flex w-full max-w-md flex-col items-center"
            >
              <input
                type="text"
                name="message"
                placeholder="Speak your mind..."
                className="mb-4 w-full rounded-xl border border-gray-300 p-2 text-background"
                required
              />
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="rounded bg-accent px-4 py-2 text-background transition hover:bg-secondary"
                >
                  Post
                </button>
                <button
                  type="button"
                  onClick={() => goToMessageBoard(true)}
                  className="rounded bg-secondary px-4 py-2 text-background transition hover:bg-accent"
                >
                  Messages
                </button>
              </div>
            </form>
          </div>
          <footer className="flex w-full justify-center border-t border-gray-300 bg-background py-4">
            <button
              onClick={goToDisclaimer}
              className="rounded border border-gray-300 px-4 py-2 text-background transition hover:bg-secondary"
            >
              View Disclaimer
            </button>
          </footer>
        </>
      )}
    </div>
  );
};

export default InputPage;
