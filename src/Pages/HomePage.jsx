import React from "react";
import Hero from "../Components/Hero";
import FAQ from "../Components/FAQ";

const HomePage = () => {
  return (
    <div className="bg-bunker-950 h-fit w-full font-sans text-white text-[22px]">
      <Hero />
      <FAQ />
    </div>
  );
};

export default HomePage;
