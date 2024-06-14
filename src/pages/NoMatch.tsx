import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NoMatch = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="w-full h-screen content-center text-center">
        <h1 className="sm:text-7xl xs text-5xl font-bold text-pink-600 py-2">
          404 :(
        </h1>
        <h2 className="text-2xl text-sky-400 m-5">404 - Page not found</h2>
        <Link
          to="/"
          className="text-xl text-gray-300 border-gray-300 flex border-2 items-center px-6 py-3 w-fit hover:bg-pink-600 hover:border-pink-600 hover:text-slate-900 rounded-lg mx-auto justify-center"
        >
          Return to Home Page <IoIosArrowForward className="ml-2" />
        </Link>
      </div>
    </>
  );
};

export default NoMatch;
