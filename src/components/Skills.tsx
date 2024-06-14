import React from "react";
import { skills } from "../assets/index.tsx";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full h-fit min-h-screen bg-slate-900 content-center py-24"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-3">
        <h2 className="text-gray-300 font-bold text-xl border-b-2 border-pink-600 w-fit pr-4">
          My Skills
        </h2>
        <p className="text-gray-300 text-lg">
          Since elementary school, I've been involved in various computer
          science clubs, classes, and hobby projects. Here are some of the
          languages, frameworks, and tools I've learned along the way.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center mx-auto mb-10  mt-6">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="bg-slate-700 w-fit p-3 hover:border-pink-300 duration-700 hover:scale-110 hover:shadow-lg hover:shadow-sky-400 rounded-lg"
            >
              <img
                src={icon}
                alt={"Logo for " + name}
                className="w-32 bg-white"
              />
              <p className="text-xl text-gray-300 font-bold text-center">
                {name}
              </p>
            </div>
          ))}
        </div>
        <a
          href="/Resume_EdwardStump.pdf"
          className="animate-bounce text-xl text-gray-300 border-gray-300 flex border-2 items-center px-6 py-3 w-fit hover:bg-pink-600 hover:border-pink-600 hover:text-slate-900 rounded-lg"
        >
          View my resume!
        </a>
      </div>
    </div>
  );
};

export default Skills;
