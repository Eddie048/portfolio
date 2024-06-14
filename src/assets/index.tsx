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
import { projectProps } from "../pages/ProjectPage";

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
    media_src: planet_physics_demo,
  },
  {
    title: "Hypixel Player Tracker",
    description:
      "To gain an advantage in my favorite video game, I wrote a python script that used a custom image to text algorithm and the game's API to tell me the skill level of the other players.",
    media_src: hypixel_player_tracker_demo,
  },
  {
    title: "Hospital Application",
    description:
      "This project was a mock service request manager  and mapping service for Brigham and Women's hospital. It includes a database, pathfinding, user authentication, and much more.",
    media_src: hospital_login,
  },
  {
    title: "Portfolio Website",
    description:
      "The website you are on now was written to better learn react, tailwind, and website deployment on Vercel.",
    media_src: website_icon,
  },
  {
    title: "Poker Project",
    description:
      "This was a simple poker game that can be played against the computer with turning in cards, betting, sorting, and scoring hands against each other.",
    media_src: poker_output_3,
  },
  {
    title: "Assorted Threading Problems",
    description:
      "As part of an operating systems course, I solved various threading problems to ensure dozens of threads could work together, ensuring fairness and avoiding deadlock.",
    media_src: juststance_demo,
  },
];

const projectPages: projectProps[] = [
  {
    projectName: "Planet Physics",
    pageAddress: "planet-physics",
    content: [
      {
        type: "text",
        data: "As my first personal project early in high school, I used equations from my physics class to create an orbital mechanics simulation.",
      },
      {
        type: "video",
        data: planet_physics_demo,
      },
    ],
  },
  {
    projectName: "Hypixel Player Tracker",
    pageAddress: "hypixel-player-tracker",
    content: [
      {
        type: "text",
        data: "To gain an advantage in my favorite video game, I wrote a python script that used a custom image to text algorithm and the game's API to tell me the skill level of the other players.",
      },
      {
        type: "image",
        data: hypixel_player_tracker_demo,
      },
    ],
  },
  {
    projectName: "Hospital Application",
    pageAddress: "hospital-application",
    content: [
      {
        type: "text",
        data: "This project was a mock service request manager  and mapping service for Brigham and Women's hospital. It includes a database, pathfinding, user authentication, and much more.",
      },
      {
        type: "image",
        data: hospital_login,
      },
    ],
  },
  {
    projectName: "Portfolio Website",
    pageAddress: "portfolio-website",
    content: [
      {
        type: "text",
        data: "The website you are on now was written to better learn react, tailwind, and website deployment on Vercel.",
      },
      {
        type: "image",
        data: website_icon,
      },
    ],
  },
  {
    projectName: "Poker Project",
    pageAddress: "poker-project",
    content: [
      {
        type: "text",
        data: "This was a simple poker game that can be played against the computer with turning in cards, betting, sorting, and scoring hands against each other.",
      },
      {
        type: "image",
        data: poker_output_3,
      },
    ],
  },
  {
    projectName: "Assorted Threading Problems",
    pageAddress: "threading-problems",
    content: [
      {
        type: "text",
        data: "As part of an operating systems course, I solved various threading problems to ensure dozens of threads could work together, ensuring fairness and avoiding deadlock.",
      },
      {
        type: "image",
        data: juststance_demo,
      },
    ],
  },
];

export { skills, projects, projectPages };
