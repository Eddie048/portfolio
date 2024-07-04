import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosArrowForward } from "react-icons/io";

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="flex px-2 sm:px-6">
        <div className="page-section mt-32">
          <p className="title">About Me</p>
          <p className="text-text text-lg"> Thisis about me</p>
          <a href="/" className="button mx-auto md:mx-0">
            Return to home page <IoIosArrowForward className="ml-2" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
