import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const pageSections = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-gray-300">
      <div>Edward Stump</div>

      {/* Menu */}
      <ul className="hidden md:flex">
        {pageSections.map((pageSection) => (
          <li className="px-4 cursor-pointer">{pageSection}</li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          nav
            ? " absolute top-0 left-0 w-full h-screen bg-slate-800 justify-center items-center flex flex-col"
            : "hidden"
        }
      >
        {pageSections.map((pageSection) => (
          <li className="px-4 cursor-pointer py-6 text-4xl">{pageSection}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
