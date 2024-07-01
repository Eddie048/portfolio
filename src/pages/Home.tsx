import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
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
      <div
        id="home"
        className="flex flex-col md:flex-row py-28 mx-auto justify-center px-14 gap-10"
      >
        <img
          src={profile_picture}
          alt="Picture of Eddie"
          className="h-[300px] mx-auto md:mx-0"
        />
        <div className="flex flex-col justify-center h-full">
          <p className="text-gray font-bold text-xl">Hello, my name is</p>
          <h1 className="lg:text-7xl text-5xl font-bold text-secondary py-2">
            Eddie Stump
          </h1>
          <h2 className="text-2xl text-accent">
            I'm a Software Engineer and Web Developer
          </h2>
          <Link
            to="projects"
            smooth="true"
            duration={500}
            className="animate-bounce button w-fit cursor-pointer my-7"
          >
            Explore my work <IoIosArrowForward className="ml-2" />
          </Link>
        </div>
      </div>
      <Projects />
      <Skills />
      <Footer />
      <Contact />
    </>
  );
};

export default Home;
