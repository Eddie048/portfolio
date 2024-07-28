import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import {
  biking,
  camel,
  granada,
  group_mountain,
  hiking,
  mountain,
  skiing,
  sunset,
} from "../assets/about-me";

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="flex px-2 sm:px-6">
        <div className="page-section mt-32 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="title">About Me</p>
            <p className="text-text text-lg">
              Hi, welcome to my website! I'm Eddie, an aspiring software
              engineer. Currently, I'm finishing my senior year at Worcester
              Polytechnic Institute, and will be graduating in the spring with a
              Bachelors degree in Computer Science and a minor in Data Science.
              Feel free to check out my resume linked in the footer at the
              bottom of the page!
            </p>
            <p className="text-text text-lg">
              Outside of school, I have a black belt in Taekwondo and have
              achieved the rank of Eagle in the Boy Scouts of America. I enjoy
              hiking, skiing, and camping. I also read, play chess, and play
              videogames with friends.
            </p>
          </div>
          <div className="about-me-section grid-cols-3">
            <img
              alt="Group mountaintop"
              src={group_mountain}
              className="about-me-image"
            />
            <img
              alt="A group of friends and I skiing in New Hampshire"
              src={skiing}
              className="about-me-image col-span-2"
            />
            <img
              alt="A friend and I on a mountain in New Hampshire"
              src={hiking}
              className="about-me-image col-span-2"
            />
            <img
              alt="Biking in Massachusetts"
              src={biking}
              className="about-me-image"
            />
            <img
              alt="A mountain in Colorado"
              src={mountain}
              className="about-me-image col-span-3 max-h-[300px] w-full"
            />
          </div>
          <p className="text-text text-lg">
            In the spring of my Junior year at WPI, I also had the opportunity
            to study abroad in the south of Spain for two months. While there, I
            worked on a project studying the feasability of a (relatively) new
            manufacturing technology, WAAM, to repair ships in the south of
            Spain. As you can see below, I also had some time for cultural trips
            around Spain and Morocco.
          </p>
          <div className="about-me-section grid-cols-2">
            <img
              alt="Exploring the city of Granada"
              src={granada}
              className="about-me-image max-h-[300px] w-full"
            />
            <img
              alt="A beautiful sunset in Spain"
              src={sunset}
              className="about-me-image col-span-2 max-h-[300px] w-full"
            />
            <img
              alt="A camel and I in Morocco"
              src={camel}
              className="about-me-image max-h-[300px] w-full"
            />
          </div>
          <a key={-1} href="/" className="button w-full md:w-fit">
            <div className="mx-auto flex flex-row items-center">
              <p>Return to home page</p>
              <IoIosArrowForward className="ml-1" />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
