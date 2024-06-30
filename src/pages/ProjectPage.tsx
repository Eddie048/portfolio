import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";

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
        <div className="max-w-[800px] mx-auto px-8 flex flex-col gap-6 h-full">
          <h2 className="text-gray font-bold text-xl border-b-2 border-secondary w-fit pr-4">
            {projectName}
          </h2>
          {content.map(({ type, data }) => {
            switch (type) {
              case "text":
                return <p className="text-gray text-lg">{data}</p>;
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
              <Link to={url} className="button">
                {name}
              </Link>
            ))}
            <Link to="/" className="button">
              Return to home page <IoIosArrowForward className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
