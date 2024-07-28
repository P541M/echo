import React, { useState } from "react";

// component combines Disclaimer, MessageInput, Timer, and Footer
const InputPage = ({ addMessage, goToMessageBoard }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const goToDisclaimer = () => setShowDisclaimer(true);
  const goBack = () => setShowDisclaimer(false);

  const handleGoToMessageBoard = () => {
    goToMessageBoard(true);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-background">
      {showDisclaimer ? (
        <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-background">
          <div className="max-w-3xl bg-primary p-8 rounded-xl shadow-md">
            <h1 className="text-4xl font-bold mb-4 text-center text-text">
              Disclaimer
            </h1>
            <p className="mb-4 text-lg text-text">
              This website is a free roam website where users can type whatever
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
                className="px-4 py-2 border border-gray-300 text-gray-600 rounded transition hover:bg-secondary"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center">
            <h2 className="text-2xl font-nunito">Next reset in:</h2>
            <div className="text-xl font-mono">{/* Timer Logic */}</div>
          </div>
          <div className="w-full flex flex-col items-center bg-background">
            <h1 className="text-5xl font-bold mb-4 text-text">Echo</h1>
            <p className="mb-6 text-text">
              <i>Your Voice, Your Echo</i>
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addMessage(e.target.message.value);
                e.target.message.value = "";
              }}
              className="w-full flex flex-col items-center"
            >
              <input
                type="text"
                name="message"
                placeholder="Speak your mind..."
                className="p-2 border border-gray-300 rounded-xl mb-4 w-3/3 max-w-md text-background"
                required
              />
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent text-background rounded hover:bg-secondary transition"
                >
                  Post
                </button>
                <button
                  type="button"
                  onClick={handleGoToMessageBoard}
                  className="px-4 py-2 bg-secondary text-background rounded hover:bg-accent transition"
                >
                  Messages
                </button>
              </div>
            </form>
          </div>
          <footer className="w-full py-4 border-t border-gray-300 mt-auto flex justify-center bg-background">
            <button
              onClick={goToDisclaimer}
              className="px-4 py-2 border border-gray-300 text-text rounded transition hover:bg-secondary"
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
