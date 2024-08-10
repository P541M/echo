import React from "react";
import {
  FaCommentDots,
  FaEye,
  FaUserSecret,
  FaClock,
  FaLock,
  FaSyncAlt,
} from "react-icons/fa";
import { GiSpeakerOff } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai"; // Import the outline heart icon

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="relative flex h-[75vh] w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="gradient-bg absolute inset-0 opacity-10"></div>
      <div className="relative z-10 max-w-5xl p-8 text-left">
        <h2 className="mb-20 text-center text-6xl font-bold">
          It's That Simple
        </h2>
        <ul className="grid grid-cols-1 gap-16 text-center sm:grid-cols-2 md:grid-cols-4">
          <li className="flex flex-col items-center">
            <FaLock className="mb-4 text-5xl" />
            <span className="text-2xl">No signup, no information stored</span>
          </li>
          <li className="flex flex-col items-center">
            <FaUserSecret className="mb-4 text-5xl" />
            <span className="text-2xl">Maintain complete anonymity</span>
          </li>
          <li className="flex flex-col items-center">
            <FaCommentDots className="mb-4 text-5xl" />
            <span className="text-2xl">Express yourself freely</span>
          </li>
          <li className="flex flex-col items-center">
            <FaEye className="mb-4 text-5xl" />
            <span className="text-2xl">Read anonymous messages</span>
          </li>
          <li className="flex flex-col items-center">
            <AiFillHeart className="mb-4 text-5xl" />{" "}
            {/* Replacing FaThumbsUp with AiOutlineHeart */}
            <span className="text-2xl">Like what resonates</span>
          </li>
          <li className="flex flex-col items-center">
            <GiSpeakerOff className="mb-4 text-5xl" />
            <span className="text-2xl">Muffle what doesn't</span>
          </li>
          <li className="flex flex-col items-center">
            <FaClock className="mb-4 text-5xl" />
            <span className="text-2xl">Database reset daily at 12 AM EST</span>
          </li>
          <li className="flex flex-col items-center">
            <FaSyncAlt className="mb-4 text-5xl" />
            <span className="text-2xl">Real-time Updates</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
