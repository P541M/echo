import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const MessageBoard = ({
  messages,
  showMessageInput,
  likeMessage,
  userId,
  goToDisclaimer,
}) => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-background text-text">
      <div className="mb-4 w-full">
        <h2 className="mb-4 text-center text-5xl font-bold text-text">Echo</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 justify-center gap-6 text-text sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {messages
              .slice()
              .reverse()
              .map((message) => (
                <div
                  key={message.id}
                  className="rounded-xl bg-primary p-4 shadow-md"
                >
                  <p>{message.text}</p>
                  <p className="text-xs text-gray-500">{message.timestamp}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => likeMessage(message.id)}
                      className="mr-2 text-red-500"
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
        <div className="mt-6 flex justify-center">
          <button
            onClick={showMessageInput}
            className="rounded bg-accent px-4 py-2 text-background transition hover:bg-secondary"
          >
            Speak your mind...
          </button>
        </div>
      </div>
      <footer className="mt-auto flex w-full justify-center border-t border-gray-300 bg-background py-4">
        <button
          onClick={goToDisclaimer}
          className="rounded border border-gray-300 px-4 py-2 text-text transition hover:bg-secondary"
        >
          View Disclaimer
        </button>
      </footer>
    </div>
  );
};

export default MessageBoard;
