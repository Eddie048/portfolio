import React from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";

type projectProps = {
  projectName: string;
  content: {
    type: "text" | "image" | "video";
    data: string;
    id: number;
  }[];
  links?: {
    name: string;
    url: string;
    id: number;
  }[];
};

const ProjectPage = ({ projectName, content, links = [] }: projectProps) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:px-6 px-2">
        <div className="page-section flex flex-col gap-6 mt-32">
          <h2 className="title">{projectName}</h2>
          {content.map(({ type, data, id }) => {
            switch (type) {
              case "text":
                return (
                  <p key={id} className="text-text">
                    {data}
                  </p>
                );
              case "image":
                return (
                  <img
                    key={id}
                    src={data}
                    alt={"Image showing off the " + projectName + "project."}
                    className="project-media"
                  />
                );
              case "video":
                return (
                  <video
                    key={id}
                    src={data}
                    controls={false}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    className="project-media"
                  />
                );
              default:
                return <></>;
            }
          })}
          <div className="flex md:flex-row flex-col gap-4">
            {links.map(({ name, url, id }) => (
              <a key={id} to={url} className="button w-full md:w-fit">
                <p className="mx-auto">{name}</p>
              </a>
            ))}
            <a key={-1} to="/" className="button w-full md:w-fit">
              <div className="mx-auto flex flex-row items-center">
                <p>Return to home page</p>
                <IoIosArrowForward className="ml-1" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
