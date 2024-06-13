import React from "react";
import { projects } from "../assets/index.tsx";
import Card from "./Card.tsx";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-fit min-h-screen bg-slate-900 content-center py-24"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-3">
        <h2 className="text-gray-300 font-bold text-xl border-b-2 border-pink-600 w-fit pr-4">
          My Projects
        </h2>
        <p className="text-gray-300 text-lg">
          Explore some of the projects I've worked on over the years.
        </p>
        <div className="grid grid-cols-2 justify-items-center mx-auto gap-12">
          {projects.map(({ title, description, media_src, isVideo }) => (
            <Card
              key={title}
              title={title}
              description={description}
              media_src={media_src}
              isVideo={isVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
