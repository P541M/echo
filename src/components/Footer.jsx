import React from "react";

const Footer = ({ goToDisclaimer }) => {
  return (
    <footer className="w-full py-4 border-t border-gray-300 mt-auto flex justify-center bg-background">
      <button
        onClick={goToDisclaimer}
        className="px-4 py-2 border border-gray-300 text-text rounded transition hover:bg-secondary"
      >
        View Disclaimer
      </button>
    </footer>
  );
};

export default Footer;
