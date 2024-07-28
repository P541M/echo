import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiSun, HiMoon } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="z-50 fixed top-0 left-0 right-0 flex justify-between items-center max-w-auto h-20 px-4 text-l bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text navbar">
      <a href="#home" className="p-5 lg:ml-0 mx-auto nav-link">
        <span>Echo</span>
      </a>

      <ul className="hidden lg:flex font-semibold items-center">
        <li className="p-5 text nav-link">
          <a href="#about">
            <span>About</span>
          </a>
        </li>
        <li className="p-5 nav-link">
          <a href="#post-message">
            <span>Post a Message</span>
          </a>
        </li>
        <li className="p-5 nav-link">
          <a href="#messages">
            <span>Message Board</span>
          </a>
        </li>
        <li className="p-5 flex items-center">
          <button onClick={toggleDarkMode} className="nav-link">
            {darkMode ? (
              <HiSun className="text-2xl" />
            ) : (
              <HiMoon className="text-2xl" />
            )}
          </button>
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="block lg:hidden fixed top-4 right-4 z-30"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={`navbar-small-screen ${
          nav ? "active" : ""
        } fixed top-20 left-0 w-full shadow-lg z-20 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text lg:hidden`}
      >
        <ul className="font-semibold text-center">
          <li className="py-5 nav-link">
            <a href="#about" onClick={handleNav}>
              <span>About</span>
            </a>
          </li>
          <li className="py-5 nav-link">
            <a href="#post-message" onClick={handleNav}>
              <span>Post a Message</span>
            </a>
          </li>
          <li className="py-5 nav-link">
            <a href="#messages" onClick={handleNav}>
              <span>Message Board</span>
            </a>
          </li>
          <li className="py-5 nav-link">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <HiSun className="text-2xl" />
              ) : (
                <HiMoon className="text-2xl" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
