import React from "react";

const Disclaimer = ({ goBack }) => {
  return (
    <div className="Disclaimer w-full h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="max-w-3xl bg-[#FEFCFB] p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center font-schoolbell">
          Disclaimer
        </h1>
        <p className="mb-4 text-lg font-nunito">
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
            className="px-4 py-2 border border-gray-300 text-gray-600 rounded transition font-nunito hover:bg-gray-100"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
