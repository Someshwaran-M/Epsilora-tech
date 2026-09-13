import React from "react";
import { FiStar } from "react-icons/fi";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center">

      
        <div className="mb-10 animate-pulse">
          <img
            src="/logo.jpeg"
            alt="EPSILORA Technology"
            className="w-52 h-auto object-contain"
          />
        </div>

        
        <div className="star-loader">

          <div className="loader-ring"></div>

          <FiStar
            size={38}
            strokeWidth={1.8}
            className="star-icon"
          />

        </div>

        
        <div className="mt-6 flex text-[11px] font-semibold tracking-[5px] uppercase">
          {"Loading".split("").map((letter, index) => (
            <span
              key={index}
              className="animate-letter"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Loader;