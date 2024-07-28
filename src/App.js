import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import MessageInput from "./components/MessageInput";
import MessageBoard from "./components/MessageBoard";
import Disclaimer from "./components/Disclaimer";
import Timer from "./components/Timer";
import "./index.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [showBoard, setShowBoard] = useState(false);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [showLanding, setShowLanding] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const initFirebase = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/initialize-firebase"
        );
        console.log(response.data.message);

        const monitorMessages = async () => {
          try {
            const response = await axios.get("http://localhost:5000/messages");
            const data = response.data;
            const loadedMessages = data
              ? Object.keys(data).map((key) => ({ ...data[key], id: key }))
              : [];
            setMessages(loadedMessages);
          } catch (error) {
            console.error("Failed to fetch messages:", error);
          }
        };

        monitorMessages();

        const intervalId = setInterval(monitorMessages, 5000);

        return () => {
          clearInterval(intervalId);
        };
      } catch (error) {
        console.error("Failed to initialize Firebase:", error);
      }
    };

    initFirebase();
  }, []);

  const addMessage = async (message) => {
    try {
      await axios.post("http://localhost:5000/add-message", { message });
      setFadeClass("fade-out");
      setTimeout(() => {
        setShowBoard(true);
        setFadeClass("fade-in");
      }, 1000);
    } catch (error) {
      console.error("Failed to add message:", error);
    }
  };

  const likeMessage = async (messageId) => {
    const userId = localStorage.getItem("userId") || generateUserId();
    try {
      await axios.post("http://localhost:5000/like-message", {
        messageId,
        userId,
      });
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                likes: msg.likedBy.includes(userId)
                  ? msg.likes - 1
                  : msg.likes + 1,
                likedBy: msg.likedBy.includes(userId)
                  ? msg.likedBy.filter((id) => id !== userId)
                  : [...msg.likedBy, userId],
              }
            : msg
        )
      );
    } catch (error) {
      console.error("Failed to like message:", error);
    }
  };

  const generateUserId = () => {
    const userId = `user-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    localStorage.setItem("userId", userId);
    return userId;
  };

  const showMessageInput = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setShowBoard(false);
      setFadeClass("fade-in");
    }, 1000);
  };

  const handleLandingFadeComplete = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setShowLanding(false);
      setFadeClass("fade-in");
    }, 1000);
  };

  const goToMessageBoard = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setShowBoard(true);
      setFadeClass("fade-in");
    }, 1000);
  };

  const goToDisclaimer = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setShowDisclaimer(true);
      setFadeClass("fade-in");
    }, 1000);
  };

  const goBack = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setShowDisclaimer(false);
      setFadeClass("fade-in");
    }, 1000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-100 transition-opacity duration-1000 ${fadeClass}`}
    >
      {showLanding ? (
        <div className="flex flex-col flex-grow items-center justify-center">
          <LandingPage onFadeComplete={handleLandingFadeComplete} />
        </div>
      ) : showDisclaimer ? (
        <Disclaimer goBack={goBack} />
      ) : (
        <div className="flex flex-col flex-grow items-center justify-center">
          <Timer />
          {!showBoard ? (
            <MessageInput
              addMessage={addMessage}
              goToMessageBoard={goToMessageBoard}
              fadeClass={fadeClass}
            />
          ) : (
            <MessageBoard
              messages={messages}
              showMessageInput={showMessageInput}
              likeMessage={likeMessage}
              userId={localStorage.getItem("userId") || generateUserId()}
              fadeClass={fadeClass}
            />
          )}
        </div>
      )}
      {!showDisclaimer && !showLanding && (
        <footer className="w-full py-4 border-t border-gray-300 mt-auto flex justify-center bg-white">
          <button
            onClick={goToDisclaimer}
            className="px-4 py-2 border border-gray-300 text-gray-600 rounded transition font-nunito hover:bg-gray-100"
          >
            View Disclaimer
          </button>
        </footer>
      )}
    </div>
  );
};

export default App;
