import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// MessageBoard component renders the list of messages and handles likes
const MessageBoard = ({
  messages,
  showMessageInput,
  likeMessage,
  userId,
  fadeClass,
}) => {
  return (
    <div
      className={`transition-opacity mb-4 duration-1000 ease-in-out w-full ${fadeClass}`}
    >
      <h2 className="text-5xl font-bold mb-4 font-schoolbell text-center text-[#120E09]">
        FreshStart
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center text-[#120E09]">
          {messages
            .slice()
            .reverse()
            .map((message) => (
              <div
                key={message.id}
                className="bg-[#FEFCFB] p-4 rounded-xl shadow-md font-schoolbell"
              >
                <p>{message.text}</p>
                <p className="text-xs text-gray-500 font-nunito">
                  {message.timestamp}
                </p>
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
      <div className="flex justify-center mt-6">
        <button
          onClick={showMessageInput}
          className="px-4 py-2 bg-[#ADD8A3] text-[#FEFCFB] rounded hover:bg-[#8DB383] transition font-nunito"
        >
          Speak your mind...
        </button>
      </div>
    </div>
  );
};

export default MessageBoard;
