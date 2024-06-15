import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

type projectProps = {
  projectName: string;
  content: {
    type: "text" | "image" | "video";
    data: string;
  }[];
  links?: {
    name: string;
    url: string;
  }[];
};

const ProjectPage = ({ projectName, content, links = [] }: projectProps) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-fit pt-40 pb-20">
        <div className="max-w-[800px] mx-auto px-8 flex flex-col gap-4 h-full">
          <h2 className="text-gray-300 font-bold text-xl border-b-2 border-pink-600 w-fit pr-4">
            {projectName}
          </h2>
          {content.map(({ type, data }) => {
            switch (type) {
              case "text":
                return <p className="text-gray-300 text-lg">{data}</p>;
              case "image":
                return (
                  <img
                    src={data}
                    alt={"Image showing off the " + projectName + "project."}
                  />
                );
              case "video":
                return (
                  <video
                    src={data}
                    controls={false}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                  />
                );
              default:
                return <></>;
            }
          })}
          <div className="flex flex-row gap-4">
            {links.map(({ name, url }) => (
              <Link
                to={url}
                className="text-xl text-gray-300 border-gray-300 bg-slate-700 border-2 items-center px-6 py-3 w-fit hover:bg-pink-600 hover:border-pink-600 hover:text-slate-900 rounded-lg"
              >
                {name}
              </Link>
            ))}
            <Link
              to="/"
              className="text-xl text-gray-300 border-gray-300 bg-slate-700 flex border-2 items-center px-6 py-3 w-fit hover:bg-pink-600 hover:border-pink-600 hover:text-slate-900 rounded-lg"
            >
              Return to home page <IoIosArrowForward className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
