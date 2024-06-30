import React from "react";
import { skills } from "../assets/skills-icons/index.tsx";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-fit min-h-screen content-center py-24">
      <div className="max-w-[1000px] mx-auto px-14 flex flex-col justify-center h-full gap-3">
        <h2 className="text-gray font-bold text-xl border-b-2 border-secondary w-fit pr-4">
          My Skills
        </h2>
        <p className="text-gray text-lg">
          Since elementary school, I've been involved in various computer
          science clubs, classes, and hobby projects. Here are some of the
          languages, frameworks, and tools I've learned along the way.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center mx-auto mb-10  mt-6">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="bg-primary-medium w-fit p-3 duration-700 hover:scale-110 hover:shadow-lg hover:shadow-accent rounded-lg"
            >
              <img
                src={icon}
                alt={"Logo for " + name}
                className="w-32 bg-white"
              />
              <p className="text-xl text-gray font-bold text-center">{name}</p>
            </div>
          ))}
        </div>
        <a
          href="/Resume_EdwardStump.pdf"
          className="animate-bounce text-xl text-gray border-gray bg-primary-medium border-2 items-center px-6 py-3 w-fit hover:bg-secondary hover:border-secondary hover:text-primary rounded-lg"
        >
          View my resume!
        </a>
      </div>
    </div>
  );
};

export default Skills;
