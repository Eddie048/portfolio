import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className="w-full h-screen bg-slate-900">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-300 font-bold text-xl">Hello, my name is</p>
        <h1 className="text-7xl font-bold text-pink-600 py-2">Eddie Stump</h1>
        <h2 className="text-2xl text-sky-400">
          I'm a Software Engineer and Web Developer
        </h2>
        <button className="group w-fit">
          <div className="text-xl text-gray-300 border-gray-300 flex border-2 items-center px-6 py-3 my-5 w-fit group-hover:rotate-90 group-hover:bg-pink-600 group-hover:border-pink-600 duration-500 group-hover:text-slate-900 origin-[11%_50%]">
            Explore my work <IoIosArrowForward className="ml-2" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
