import React from "react";
import img from "../Assets/photo_esms.png";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center bg-bunker-950 w-full lg:p-20 pt-2">
      <div className="w-2/3 lg:w-1/3 text-center lg:text-left flex flex-col">
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-snug flex lg:block justify-center items-center flex-col lg:text-left">
          CodeShowdown Festival:{" "}
          <span className="text-customGreen">Coding</span> Challenges
        </h1>
        <p className="mt-5 text-center lg:text-left ">
          {" "}
          Innovation, camaraderie, and the crowning of CodeShowdown Champions!
        </p>
        <button className="mt-12 mx-auto rounded-full bg-customGreen px-5 text-black">
          Show More
        </button>
        <p className="mt-16 text-lg">DECEMBER 29th, 2023</p>
      </div>
      <div className="absolute lg:top-[37%]  opacity-50 lg:opacity-100 lg:left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[200%] z-10">
        <img src={img} alt="img" className="mx-auto w-1/3 z-0" />
      </div>
      <div className="w-2/3 lg:w-1/3 mt-auto">
        <p className="font-semibold text-center lg:text-left  m-10 mb-0  flex flex-col justify-end items-end">
          Explore CodeShowdown, where coding prowess meets creativity in
          competitive challenges and collaborative coding
        </p>
      </div>
    </div>
  );
};

export default Hero;
