import React from "react";

const BottomBar = () => (
  <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
    <div className="flex gap-4 items-center">
      <i className="text-3xl ri-arrow-down-line"></i>
      <h3 className="text-md sd cursor-pointer">Scroll Down</h3>
    </div>
    <img
      className="absolute h-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      src="./ps5.png"
      alt=""
    />
    <div className="flex gap-4 items-center absolute right-10 bottom-[35%]">
      <h3 className="text-md sd cursor-pointer">Coming Soon</h3>
      <i className="text-2xl ri-arrow-right-line"></i>
      </div>
  </div>
);

export default BottomBar;
