import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const MessagesSection = ({ messages, likeMessage, userId }) => {
  return (
    <div
      id="messages"
      className="w-full flex flex-col items-center bg-background text-text py-8"
    >
      <h2 className="text-4xl font-bold mb-4">Current Posted Messages</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center text-text">
          {messages
            .slice()
            .reverse()
            .map((message) => (
              <div
                key={message.id}
                className="bg-primary p-4 rounded-xl shadow-md"
              >
                <p>{message.text}</p>
                <p className="text-xs text-gray-500">{message.timestamp}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => likeMessage(message.id)}
                    className="text-red-500 mr-2"
                  >
                    {message.likedBy && message.likedBy.includes(userId) ? (
                      <AiFillHeart />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </button>
                  <span>{message.likes || 0}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <button className="px-4 py-2 mt-4 bg-secondary text-background rounded hover:bg-accent transition">
        Read All
      </button>
    </div>
  );
};

export default MessagesSection;
