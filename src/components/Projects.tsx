import React from "react";
import { projects } from "../assets/index.tsx";
import videoTest from "../assets/planet-physics-demo.mov";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-fit min-h-screen bg-slate-900 content-center pt-24"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-3">
        <h2 className="text-gray-300 font-bold text-xl border-b-2 border-pink-600 w-fit pr-4">
          My Projects
        </h2>
        <p className="text-gray-300 text-lg">
          Explore some of the projects I've worked on over the years.
        </p>
        <div>
          {projects.map(({ title, description, media_src, isVideo }) => (
            <div key={title}>
              <p className="text-gray-300 text-lg">{title}</p>
              {isVideo ? (
                <video
                  src={media_src}
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                />
              ) : (
                <img src={media_src} alt={title} />
              )}
              <p className="text-gray-300 text-lg">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
