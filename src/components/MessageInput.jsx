import React, { useState, useEffect } from "react";

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
      className={`MessageInput transition-opacity duration-1000 ease-in-out w-full flex flex-col items-center ${fadeClass}`}
    >
      <h1 className="text-5xl font-bold mb-4 font-schoolbell text-[#120E09]">
        FreshStart
      </h1>
      <p className="mb-6 font-nunito text-[#120E09]">
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
          className="p-2 border border-gray-300 rounded-xl mb-4 w-3/3 max-w-md font-schoolbell text-[#120E09]"
          required
        />

        <div className="flex space-x-2">
          <button
            type="submit"
            className="px-4 py-2 bg-[#ADD8A3] text-[#FEFCFB] rounded hover:bg-[#8DB383] transition font-nunito"
          >
            Post
          </button>

          <button
            type="button"
            onClick={handleGoToMessageBoard}
            className="px-4 py-2 bg-[#7BC78C] text-[#FEFCFB] rounded hover:bg-[#67B378] transition font-nunito"
          >
            Messages
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
