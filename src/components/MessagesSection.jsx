import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GiSpeakerOff } from "react-icons/gi"; // Example icon for the "Muffle" button

const MessagesSection = ({ messages, likeMessage, muffleMessage, userId }) => {
  return (
    <div
      id="messages"
      className="relative flex h-screen w-full flex-col items-center bg-background py-8"
    >
      <div className="relative z-10 p-8 text-left">
        <h2 className="mb-20 text-center text-6xl font-bold">C'mon, Echo.</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 justify-center gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {messages
              .slice()
              .reverse()
              .map((message) => (
                <div
                  key={message.id}
                  className="relative flex flex-col rounded-2xl bg-secondary p-6 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
                >
                  <p className="mb-4 text-lg">{message.text}</p>
                  <div className="mt-auto">
                    <hr className="mb-4 border-t border-primary" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <button
                          onClick={() => likeMessage(message.id)}
                          className="text-accent transition-transform duration-200 ease-in-out hover:scale-125"
                        >
                          {message.likedBy &&
                          message.likedBy.includes(userId) ? (
                            <AiFillHeart className="text-2xl" />
                          ) : (
                            <AiOutlineHeart className="text-2xl" />
                          )}
                        </button>
                        <span className="ml-2 text-lg">
                          {message.likes || 0}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => muffleMessage(message.id)}
                          className="text-red-500 transition-transform duration-200 ease-in-out hover:scale-125"
                        >
                          <GiSpeakerOff eOff className="text-2xl" />
                        </button>
                        <span className="ml-2 text-lg">
                          {message.muffles || 0}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{message.time}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <button className="mt-10 rounded-full bg-primary px-8 py-4 text-xl font-semibold text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-accent">
          Read All
        </button>
      </div>
    </div>
  );
};

export default MessagesSection;
