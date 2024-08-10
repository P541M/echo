import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GiSpeakerOff } from "react-icons/gi";

const MessagePreview = ({ messages, likeMessage, muffleMessage, userId }) => {
  const recentMessages = messages.slice(-5).reverse();

  const formatTime = (timestampString) => {
    if (!timestampString) return "No Time Provided";
    const date = new Date(timestampString);
    return isNaN(date.getTime())
      ? "Invalid Date"
      : date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  };

  return (
    <div
      id="messages"
      className="relative flex h-[75vh] w-full flex-col items-center justify-center"
    >
      <div className="relative z-10 p-8 text-left">
        <h2 className="mb-20 text-center text-6xl font-bold">
          Join the others, Echo.
        </h2>
        <div className="container mx-auto flex justify-center px-4">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {recentMessages.map((message) => (
              <div
                key={message.id}
                className="items-left relative flex flex-col justify-center rounded-2xl bg-secondary p-6 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
              >
                <p className="mb-4 text-left text-lg">{message.text}</p>
                <div className="mt-auto w-full">
                  <hr className="mb-4 border-t border-primary" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => likeMessage(message.id)}
                        className="text-accent transition-transform duration-200 ease-in-out hover:scale-125"
                      >
                        {message.likedBy && message.likedBy.includes(userId) ? (
                          <AiFillHeart className="text-2xl" />
                        ) : (
                          <AiOutlineHeart className="text-2xl" />
                        )}
                      </button>
                      <span className="text-lg">{message.likes || 0}</span>
                      <button
                        onClick={() => muffleMessage(message.id)}
                        className="text-red-500 transition-transform duration-200 ease-in-out hover:scale-125"
                      >
                        <GiSpeakerOff className="text-2xl" />
                      </button>
                      <span className="text-lg">{message.muffles || 0}</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-20 rounded-full bg-primary px-8 py-4 text-xl font-semibold text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-accent">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagePreview;
