import c from "./c.png";
import css from "./css.png";
import html from "./html.jpg";
import java from "./java.png";
import javascript from "./javascript.png";
import python from "./python.webp";
import react from "./react.webp";
import sql from "./sql.png";
import tailwind from "./tailwind.jpeg";
import typescript from "./typescript.png";

import hospital_login from "./hospital-app-login.png";
import website_icon from "./website-icon.png";
import planet_physics_demo from "./planet-physics-demo.mov";
import hypixel_player_tracker_demo from "./hypixel_player_tracker_output.png";
import poker_output_3 from "./poker_output_3.png";
import juststance_demo from "./juststance_demo.png";

const skills = [
  { name: "Java", icon: java },
  { name: "C", icon: c },
  { name: "Python", icon: python },
  { name: "Javascript", icon: javascript },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Typescript", icon: typescript },
  { name: "React", icon: react },
  { name: "Tailwind", icon: tailwind },
  { name: "SQL", icon: sql },
];

const projects = [
  {
    title: "Planet Physics",
    description:
      "As my first personal project early in high school, I used equations from my physics class to create an orbital mechanics simulation.",
    image: planet_physics_demo,
  },
  {
    title: "Hypixel Player Tracker",
    description:
      "To gain an advantage in my favorite video game, I wrote a python script that used a custom image to text algorithm and the game's API to tell me the skill level of the other players.",
    image: hypixel_player_tracker_demo,
  },
  {
    title: "Hospital Application",
    description:
      "This project was a mock service request manager  and mapping service for Brigham and Women's hospital. It includes a database, pathfinding, user authentication, and much more.",
    image: hospital_login,
  },
  {
    title: "Portfolio Website",
    description:
      "The website you are on now was written to better learn react, tailwind, and website deployment on Vercel.",
    image: website_icon,
  },
  {
    title: "Poker Project",
    description:
      "This was a simple poker game that can be played against the computer with turning in cards, betting, sorting, and scoring hands against each other.",
    image: poker_output_3,
  },
  {
    title: "Assorted Threading Problems",
    description:
      "As part of an operating systems course, I solved various threading problems to ensure dozens of threads could work together, ensuring fairness and avoiding deadlock.",
    image: juststance_demo,
  },
];

export { skills, projects };
