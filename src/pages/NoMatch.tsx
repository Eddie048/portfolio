import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NoMatch = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="w-full h-screen content-center text-center">
        <h1 className="sm:text-7xl xs text-5xl font-bold text-secondary py-2">
          404 :(
        </h1>
        <h2 className="text-2xl text-accent m-5">404 - Page not found</h2>
        <Link
          to="/"
          className="text-xl text-gray border-gray bg-primary-medium flex border-2 items-center px-6 py-3 w-fit hover:bg-secondary hover:border-secondary hover:text-primary rounded-lg mx-auto justify-center"
        >
          Return to Home Page <IoIosArrowForward className="ml-2" />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NoMatch;
