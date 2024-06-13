import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="w-full h-screen bg-slate-900">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-gray-300 font-bold text-xl">Hello, my name is</p>
          <h1 className="sm:text-7xl xs text-5xl font-bold text-pink-600 py-2">
            Eddie Stump
          </h1>
          <h2 className="text-2xl text-sky-400">
            I'm a Software Engineer and Web Developer
          </h2>
          <Link
            to="projects"
            smooth="true"
            duration={500}
            className="group w-fit cursor-pointer my-7"
          >
            <div className="animate-bounce text-xl text-gray-300 border-gray-300 flex border-2 items-center px-6 py-3 w-fit group-hover:bg-pink-600 group-hover:border-pink-600 group-hover:text-slate-900 rounded-lg">
              Explore my work <IoIosArrowForward className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
