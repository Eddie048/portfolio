import React from "react";
import { projects } from "../assets/index.tsx";
import Card from "./Card.tsx";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-fit min-h-screen content-center py-24"
    >
      <div className="max-w-[1000px] mx-auto px-14 flex flex-col justify-center h-full gap-3">
        <h2 className="text-gray font-bold text-xl border-b-2 border-secondary w-fit pr-4">
          My Projects
        </h2>
        <p className="text-gray text-lg">
          Explore some of the projects I've worked on over the years. Click/tap
          or hover the images to learn more!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mx-auto gap-14 mt-6">
          {projects.map(
            ({
              projectTitle,
              description,
              display_media,
              pageAddress,
              links,
            }) => (
              <Card
                key={projectTitle}
                title={projectTitle}
                description={description}
                media_src={display_media}
                pageAddress={pageAddress}
                links={links}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
