import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const handleClick = () => setNav(!nav);
  const pageSections = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-gray-300 text-xl">
      <a className="font-bold text-2xl h-[80px] content-center" href="/">
        Edward Stump
      </a>

      {/* Menu */}
      <ul className="hidden md:flex">
        {pageSections.map((pageSection) => (
          <li
            key={pageSection}
            className="px-4 h-[80px] cursor-pointer hover:bg-slate-700 content-center"
          >
            {pageSection}
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden z-10">
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          isNavOpen
            ? "md:hidden absolute top-0 left-0 w-full h-screen bg-slate-800 justify-center items-center flex flex-col"
            : "hidden"
        }
      >
        {pageSections.map((pageSection) => (
          <li
            key={pageSection}
            className="px-4 cursor-pointer py-6 text-4xl hover:bg-slate-700"
          >
            {pageSection}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
