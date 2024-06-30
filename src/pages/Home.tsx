import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  const pageSections = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
  ];

  return (
    <>
      <Navbar navList={pageSections} />
      <div id="home" className="w-full h-screen">
        <div className="max-w-[1000px] mx-auto px-14 flex flex-col justify-center h-full">
          <p className="text-gray font-bold text-xl">Hello, my name is</p>
          <h1 className="sm:text-7xl xs text-5xl font-bold text-secondary py-2">
            Eddie Stump
          </h1>
          <h2 className="text-2xl text-accent">
            I'm a Software Engineer and Web Developer
          </h2>
          <Link
            to="projects"
            smooth="true"
            duration={500}
            className="group w-fit cursor-pointer my-7"
          >
            <div className="animate-bounce text-xl bg-primary-medium text-gray border-gray flex border-2 items-center px-6 py-3 w-fit group-hover:bg-secondary group-hover:border-secondary group-hover:text-primary rounded-lg">
              Explore my work <IoIosArrowForward className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
      <Skills />
      <Projects />
      <Footer />
      <Contact />
    </>
  );
};

export default Home;
