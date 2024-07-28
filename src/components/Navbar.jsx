import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ goToSection }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="z-[1000] fixed left-0 right-0 h-20 bg-background text-text">
      <div className="flex justify-between items-center h-full px-8 relative">
        <div
          onClick={() => goToSection("home")}
          className="logo-container nav-link cursor-pointer absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none"
        >
          <span className="text-2xl font-bold">Echo</span>
        </div>

        <ul className="hidden lg:flex font-medium items-center text-lg space-x-8">
          <li className="nav-link">
            <a href="#about" onClick={() => goToSection("about")}>
              About
            </a>
          </li>
          <li className="nav-link">
            <a href="#messages" onClick={() => goToSection("messages")}>
              Echoes
            </a>
          </li>
          <li className="nav-link">
            <a href="#post-message" onClick={() => goToSection("post-message")}>
              Make an Echo
            </a>
          </li>
        </ul>

        <div
          onClick={handleNav}
          className="block lg:hidden fixed top-4 right-4 z-30"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={`${
          nav ? "block" : "hidden"
        } fixed w-full z-20 bg-backgroundDark text-text lg:hidden`}
      >
        <ul className="font-semibold text-center my-8">
          <li className="my-3 nav-link relative">
            <a
              href="#about"
              onClick={() => {
                handleNav();
                goToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li className="my-3 nav-link relative">
            <a
              href="#messages"
              onClick={() => {
                handleNav();
                goToSection("messages");
              }}
            >
              Echoes
            </a>
          </li>
          <li className="my-3 nav-link relative">
            <a
              href="#post-message"
              onClick={() => {
                handleNav();
                goToSection("post-message");
              }}
            >
              Make an Echo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
