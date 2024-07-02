import React from "react";
import { skills } from "../assets/skills-icons/index.tsx";

const Skills = () => {
  return (
    <div id="skills" className="page-section flex flex-col gap-3">
      <h2 className="title">My Skills</h2>
      <p className="text-text text-lg">
        Since elementary school, I've been involved in various computer science
        clubs, classes, and hobby projects. Here are some of the languages,
        frameworks, and tools I've learned along the way.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center mx-auto mb-10  mt-6">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="bg-white w-fit p-3 duration-500 hover:scale-110 shadow-md shadow-accent hover:shadow-2xl hover:shadow-accent rounded-lg"
          >
            <img
              src={icon}
              alt={"Logo for " + name}
              className="w-32 bg-white"
            />
            <p className="text-xl text-text font-bold text-center">{name}</p>
          </div>
        ))}
      </div>
      <a href="/Resume_EdwardStump.pdf" className="button mx-auto">
        View my resume!
      </a>
    </div>
  );
};

export default Skills;
