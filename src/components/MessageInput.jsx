import React, { useState, useEffect } from "react";

// MessageInput component renders the form to add a new message
const MessageInput = ({ addMessage, goToMessageBoard, fadeClass }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const element = document.querySelector(".MessageInput");
    if (element) {
      element.classList.add(fadeClass);
    }
  }, [fadeClass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(input);
    setInput("");
  };

  const handleGoToMessageBoard = () => {
    goToMessageBoard();
  };

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out w-full flex flex-col items-center ${fadeClass} bg-background`}
    >
      <h1 className="text-5xl font-bold mb-4 text-text">FreshStart</h1>
      <p className="mb-6 text-text">
        <i>Start Fresh Every Day.</i>
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
  );
};

export default MessageInput;
