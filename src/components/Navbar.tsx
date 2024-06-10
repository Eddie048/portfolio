import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pageSections = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
  ];

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 z-10 bg-slate-900 text-gray-300 text-xl">
      <a className="font-bold text-2xl content-center" href="/">
        Edward Stump
      </a>

      {/* Menu */}
      <ul className="hidden md:flex">
        {pageSections.map(({ name, id }) => (
          <Link
            to={id}
            key={id + "-topNav"}
            smooth="true"
            duration={500}
            className="px-4 h-20 cursor-pointer hover:bg-slate-800 content-center"
          >
            {name}
          </Link>
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
        {pageSections.map(({ name, id }) => (
          <Link
            to={id}
            key={id + "-mobile"}
            className="px-4 cursor-pointer w-3/4 text-center py-6 text-4xl hover:bg-slate-800"
          >
            {name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
