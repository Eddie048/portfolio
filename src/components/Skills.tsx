import React from "react";

const Skills = () => {
  const skills = [
    { name: "Java", icon: undefined },
    { name: "c", icon: undefined },
    { name: "Python", icon: undefined },
    { name: "Javascript", icon: undefined },
    { name: "HTML", icon: undefined },
    { name: "CSS", icon: undefined },
    { name: "Tyescript", icon: undefined },
    { name: "React", icon: undefined },
    { name: "Tailwind", icon: undefined },
    { name: "SQL", icon: undefined },
  ];

  return (
    <div className="w-full h-screen bg-slate-900">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h2 className="text-gray-300 font-bold text-xl border-b-2 border-pink-600 w-fit pr-4 my-4">
          My Skills
        </h2>
        <p className="text-gray-300 text-lg">
          Since elementary school, I've been involved in various computer
          science clubs, classes, and hobby projects. Here are some of the
          languages, frameworks, and tools I've learned along the way.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Skills;
