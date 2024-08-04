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
    <div className="fixed left-0 right-0 top-0 z-[1000] h-20 bg-background/10 backdrop-blur-md">
      <div className="relative flex h-full items-center justify-between px-14">
        <div
          onClick={() => goToSection("home")}
          className="logo-container nav-link absolute left-1/2 -translate-x-1/2 transform cursor-pointer lg:static lg:transform-none"
        >
          <span className="text-2xl font-bold">Echo</span>
        </div>

        <ul className="hidden items-center space-x-8 text-lg font-medium lg:flex">
          <li className="nav-link tracking-wide-transition">
            <a href="#about" onClick={() => goToSection("about")}>
              About
            </a>
          </li>
          <li className="nav-link tracking-wide-transition">
            <a href="#messages" onClick={() => goToSection("messages")}>
              Echoes
            </a>
          </li>
          <li className="nav-link tracking-wide-transition">
            <a href="#post-message" onClick={() => goToSection("post-message")}>
              Echo.
            </a>
          </li>
        </ul>

        <div
          onClick={handleNav}
          className="fixed right-4 top-4 z-30 block lg:hidden"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={`${
          nav ? "flex" : "hidden"
        } fixed left-0 top-20 z-20 w-full flex-col items-center bg-background/10 backdrop-blur-lg lg:hidden`}
      >
        <ul className="flex flex-col items-center text-center font-semibold">
          <li className="nav-link tracking-wide-transition relative mb-3">
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
          <li className="nav-link tracking-wide-transition relative my-3">
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
          <li className="nav-link tracking-wide-transition relative mb-6 mt-3">
            <a
              href="#post-message"
              onClick={() => {
                handleNav();
                goToSection("post-message");
              }}
            >
              Echo.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
