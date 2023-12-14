import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center p-7 px-20 justify-between bg-bunker-950 font-sans text-white text-[22px] w-screen">
      <h1>Logo</h1>

      <div className="flex gap-8 m-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-customGreen text-black px-10 rounded-full" : "px-10"
          }
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bg-customGreen text-black px-10 rounded-full" : "px-10"
          }
        >
          <span>About</span>
        </NavLink>
        <NavLink
          to="/agenda"
          className={({ isActive }) =>
            isActive ? "bg-customGreen text-black px-10 rounded-full" : "px-10"
          }
        >
          <span>Agenda</span>
        </NavLink>
        <NavLink
          to="/challenges"
          className={({ isActive }) =>
            isActive ? "bg-customGreen text-black px-10 rounded-full" : "px-10"
          }
        >
          <span>Challenges</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
