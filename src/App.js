import React, { useState, useEffect } from "react";
import { ref, onValue, push, remove, off } from "firebase/database";
import LandingPage from "./components/LandingPage";
import MessageInput from "./components/MessageInput";
import MessageBoard from "./components/MessageBoard";
import Disclaimer from "./components/Disclaimer";
import { database } from "./firebase";
import "./index.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [showBoard, setShowBoard] = useState(false);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [timeLeft, setTimeLeft] = useState("");
  const [showLanding, setShowLanding] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = data ? Object.values(data) : [];
      setMessages(loadedMessages);
    });

    const updateTimer = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const timeDiff = midnight - now;
      if (timeDiff <= 0) {
        handleRefresh();
      } else {
        const hours = Math.floor(timeDiff / 1000 / 60 / 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const intervalId = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(intervalId);
      off(messagesRef);
    };
  }, []);

  const handleRefresh = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      remove(ref(database, "messages"));
      window.location.reload();
    }, 1000);
  };

  const addMessage = (message) => {
    const newMessage = {
      text: message,
      timestamp: new Date().toLocaleTimeString(),
    };
    push(ref(database, "messages"), newMessage);
    setFadeClass("fade-out");
    setTimeout(() => {
      setShowBoard(true);
      setFadeClass("fade-in");
    }, 1000);
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
          <div
            className="text-xl p-4 font-schoolbell"
            style={{ color: "#67B378" }}
          >
            {timeLeft}
          </div>
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
