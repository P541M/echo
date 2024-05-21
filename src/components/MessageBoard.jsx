import React, { useEffect } from 'react';

const MessageBoard = ({ messages, showMessageInput, fadeClass }) => {
  useEffect(() => {
    const element = document.querySelector('.MessageBoard');
    if (element) {
      element.classList.add(fadeClass);
    }
  }, [fadeClass]);

  return (
    <div className={`MessageBoard transition-opacity duration-1000 ease-in-out w-full ${fadeClass}`}>
      <h2 className="text-5xl font-bold mb-4 font-schoolbell text-center">FreshStart</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {messages.map((message, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-md font-nunito">
              <p className='font-schoolbell'>{message.text}</p>
              <p className="text-xs text-gray-500">{message.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={showMessageInput}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition font-nunito"
        >
          Type Another Message
        </button>
      </div>
    </div>
  );
};

export default MessageBoard;
