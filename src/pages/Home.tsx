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

      {/* Placeholder to ensure body element starts at the top of the page, so the page is colored correctly */}
      <div className="w-1 h-1"></div>
      <div
        id="home"
        className="page-section flex flex-col md:flex-row gap-10 mt-32"
      >
        <img
          src={profile_picture}
          alt="Eddie"
          className="h-[300px] mx-auto md:mx-0 rounded-lg"
        />
        <div className="flex flex-col justify-center h-full">
          <p className="text-text font-bold text-xl">Hello, my name is</p>
          <h1 className="lg:text-7xl text-5xl font-bold text-text py-2">
            Eddie Stump
          </h1>
          <h2 className="text-2xl text-text">
            I'm a Software Engineer and Web Developer
          </h2>
          <Link
            to="projects"
            smooth="true"
            duration={500}
            offset={-150}
            className="animate-bounce button w-fit cursor-pointer my-7"
          >
            Explore my work <IoIosArrowForward className="ml-2" />
          </Link>
        </div>
      </div>
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
