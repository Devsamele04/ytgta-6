import React from "react";
import heroText from "../content/herotext";

const CharacterSection = () => (
  <div className="w-full h-screen flex items-center justify-center bg-black">
    <div className="cntnr flex text-white w-full h-full">
      {/* Left Image Section */}
      <div className="limg relative w-1/2 h-full overflow-hidden">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.1] max-w-full max-h-full"
          src="./imag.png"
          alt="Character"
        />
      </div>

      {/* Right Text Section */}
      <div className="rg w-[35%] ml-10 py-32">
        <h1 className="text-6xl font-bold">{heroText.heading1}</h1>
        <h1 className="text-6xl font-bold">{heroText.heading2}</h1>

        {heroText.paragraphs.map((para, i) => (
          <p key={i} className="mt-6 text-md sd font-bold leading-relaxed">
            {para}
          </p>
        ))}
        <button className="bg-yellow-500 px-7  active:scale-95 rounded py-4 text-black mt-10 text-3xl font-semibold hover:bg-yellow-400 transition cursor-pointer">
          Download Now
        </button>
      </div>
    </div>
  </div>
);

export default CharacterSection;
