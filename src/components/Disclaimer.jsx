import React from "react";

// Disclaimer component renders the disclaimer text and a go-back button
const Disclaimer = ({ goBack }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="max-w-3xl bg-primary p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center text-text">
          Disclaimer
        </h1>
        <p className="mb-4 text-lg text-text">
          This website is a free roam website where users can type whatever they
          want. As such, the website owner and administrators are not held
          liable for any content posted by users. By using this website, you
          agree that the{" "}
          <i>
            responsibility for any content lies solely with the individual who
            posted it
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
  );
};

export default Disclaimer;
