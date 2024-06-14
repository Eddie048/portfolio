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

type project = {
  projectTitle: string;
  pageAddress: string;
  description: string;
  display_media: string;
  content: {
    type: "text" | "video" | "image";
    data: string;
  }[];
  links?: {
    name: string;
    url: string;
  }[];
};

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

const projects: project[] = [
  {
    projectTitle: "Planet Physics",
    pageAddress: "planet-physics",
    description:
      "As my first personal project early in high school, I used equations from my physics class to create an orbital mechanics simulation.",
    display_media: planet_physics_demo,
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
    projectTitle: "Hypixel Player Tracker",
    pageAddress: "hypixel-player-tracker",
    description:
      "To gain an advantage in my favorite video game, I wrote a python script that used a custom image to text algorithm and the game's API to tell me the skill level of the other players.",
    display_media: hypixel_player_tracker_demo,
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
    projectTitle: "Hospital Application",
    pageAddress: "hospital-application",
    description:
      "This project was a mock service request manager  and mapping service for Brigham and Women's hospital. It includes a database, pathfinding, user authentication, and much more.",
    display_media: hospital_login,
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
    projectTitle: "Portfolio Website",
    pageAddress: "portfolio-website",
    description:
      "The website you are on now was written to better learn react, tailwind, and website deployment on Vercel.",
    display_media: website_icon,
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
    projectTitle: "Poker Project",
    pageAddress: "poker-project",
    description:
      "This was a simple poker game that can be played against the computer with turning in cards, betting, sorting, and scoring hands against each other.",
    display_media: poker_output_3,
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
    projectTitle: "Assorted Threading Problems",
    pageAddress: "threading-problems",
    description:
      "As part of an operating systems course, I solved various threading problems to ensure dozens of threads could work together, ensuring fairness and avoiding deadlock.",
    display_media: juststance_demo,
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

export { skills, projects };
