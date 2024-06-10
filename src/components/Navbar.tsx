import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const handleClick = () => setNav(!nav);
  const pageSections = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 z-10 bg-slate-900 text-gray-300 text-xl">
      <a className="font-bold text-2xl content-center" href="/">
        Edward Stump
      </a>

      {/* Menu */}
      <ul className="hidden md:flex">
        {pageSections.map((pageSection) => (
          <li
            key={pageSection}
            className="px-4 h-20 cursor-pointer hover:bg-slate-800 content-center"
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
            ? "md:hidden absolute top-0 left-0 w-full h-screen bg-slate-900 justify-center items-center flex flex-col"
            : "hidden"
        }
      >
        {pageSections.map((pageSection) => (
          <li
            key={pageSection}
            className="px-4 cursor-pointer w-3/4 text-center py-6 text-4xl hover:bg-slate-800"
          >
            {pageSection}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
