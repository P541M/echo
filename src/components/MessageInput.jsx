import React, { useState, useEffect } from 'react';

const MessageInput = ({ addMessage, fadeClass }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const element = document.querySelector('.MessageInput');
    if (element) {
      element.classList.add(fadeClass);
    }
  }, [fadeClass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(input);
    setInput('');
  };

  return (
    <div className={`MessageInput transition-opacity duration-1000 ease-in-out w-full flex flex-col items-center ${fadeClass}`}>
      <h1 className="text-5xl font-bold mb-4 font-schoolbell">FreshStart</h1>
      <p className="text-xl mb-6 font-nunito">Start Fresh Every Day.</p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Speak your mind..."
          className="p-2 border border-gray-300 rounded mb-4 w-3/3 max-w-md font-schoolbell"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition font-nunito">
          Post
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
