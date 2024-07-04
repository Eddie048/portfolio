import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import profile_picture from "../assets/profilePicture.png";

const Home = () => {
  const pageSections = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
  ];

  return (
    <>
      <Navbar navList={pageSections} />
      <div className="flex flex-col px-2 sm:px-6">
        <div
          id="home"
          className="page-section flex flex-col md:flex-row gap-10 mt-32"
        >
          <img
            src={profile_picture}
            alt="Eddie"
            className="w-[300px] h-full mx-auto md:mx-0 rounded-lg"
          />
          <div className="flex flex-col">
            <p className="text-text font-bold text-xl">Hello, my name is</p>
            <h1 className="lg:text-7xl text-5xl font-bold text-text py-2">
              Eddie Stump
            </h1>
            <h2 className="text-2xl text-text">
              I'm a Software Engineer and Web Developer
            </h2>
            <div className="flex flex-row max-[475px]:flex-col md:max-[895px]:flex-col gap-4 pt-6">
              <a href="/about-me" className="button">
                About Me
              </a>
              <Link
                to="projects"
                smooth="true"
                duration={500}
                offset={-150}
                className="button cursor-pointer"
              >
                Explore my work <IoIosArrowForward className="ml-2" />
              </Link>
            </div>
            {/*765 - 895 */}
          </div>
        </div>
        <Projects />
        <Skills />
      </div>
      <Footer />
    </>
  );
};

export default Home;
