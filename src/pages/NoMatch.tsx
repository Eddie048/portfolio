import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NoMatch = () => {
  return (
    <>
      <Navbar />
      <div className="px-6">
        <div className="w-full h-screen content-center text-center">
          <div className="bg-background-secondary rounded-lg p-14 w-fit mx-auto">
            <h1 className="sm:text-7xl xs text-5xl font-bold text-text py-2">
              404 :(
            </h1>
            <h2 className="text-2xl text-text m-5">404 - Page not found</h2>
            <Link to="/" className="sm:hidden button mx-auto">
              Home Page <IoIosArrowForward className="ml-2" />
            </Link>
            <div className="hidden sm:block">
              <Link to="/" className="button mx-auto">
                Return to Home Page <IoIosArrowForward className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default NoMatch;
