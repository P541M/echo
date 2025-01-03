import React, { useState, useEffect } from "react";
import axios from "axios";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import MessagePreview from "./components/MessagePreview";
import InputPage from "./components/InputPage";
import MessageBoard from "./components/MessageBoard";
import "./index.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [showBoard, setShowBoard] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const initFirebase = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/initialize-firebase",
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
        return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Failed to initialize Firebase:", error);
      }
    };

    initFirebase();
  }, []);

  const addMessage = async (message) => {
    try {
      await axios.post("http://localhost:5000/add-message", { message });
      setShowBoard(true);
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
            : msg,
        ),
      );
    } catch (error) {
      console.error("Failed to like message:", error);
    }
  };

  const generateUserId = () => {
    const userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("userId", userId);
    return userId;
  };

  const goToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const muffleMessage = async (messageId) => {
    const userId = localStorage.getItem("userId") || generateUserId();
    try {
      await axios.post("http://localhost:5000/muffle-message", {
        messageId,
        userId,
      });
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                muffles: msg.muffledBy.includes(userId)
                  ? msg.muffles - 1
                  : msg.muffles + 1,
                muffledBy: msg.muffledBy.includes(userId)
                  ? msg.muffledBy.filter((id) => id !== userId)
                  : [...msg.muffledBy, userId],
              }
            : msg,
        ),
      );
    } catch (error) {
      console.error("Failed to muffle message:", error);
    }
  };

  return (
    <div className="h-full w-full bg-background text-text">
      {showSplash && (
        <SplashScreen onFadeComplete={() => setShowSplash(false)} />
      )}
      <Navbar goToSection={goToSection} />
      {!showSplash && (
        <>
          {showBoard ? (
            <MessageBoard
              messages={messages}
              showMessageInput={() => setShowBoard(false)}
              likeMessage={likeMessage}
              userId={localStorage.getItem("userId") || generateUserId()}
              goToDisclaimer={() => setShowDisclaimer(true)}
            />
          ) : (
            <>
              <Hero />
              <HowItWorks />
              <MessagePreview
                messages={messages}
                likeMessage={likeMessage}
                muffleMessage={muffleMessage}
                userId={localStorage.getItem("userId") || generateUserId()}
              />
              <InputPage
                addMessage={addMessage}
                goToMessageBoard={setShowBoard}
                showDisclaimer={showDisclaimer}
                goToDisclaimer={() => setShowDisclaimer(true)}
                goBack={() => setShowDisclaimer(false)}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
