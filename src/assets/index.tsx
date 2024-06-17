import hospital_login from "./hospital-application/hospital-app-login.png";
import website_icon from "./portfolio-website/website-icon.png";
import planet_physics_demo from "./planet-physics/planet-physics-demo.mov";
import planet_physics_code from "./planet-physics/planet-physics-code.png";
import hypixel_player_tracker_demo from "./hypixel-player-tracker/hypixel_player_tracker_output.png";
import poker_output_3 from "./poker-project/poker_output_3.png";
import juststance_demo from "./threading-problems/juststance_demo.png";

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

const projects: project[] = [
  {
    projectTitle: "Planet Physics",
    pageAddress: "planet-physics",
    description:
      "As a fun side project during high school, I used equations from an AP physics class to create a 2D orbital mechanics simulation.",
    display_media: planet_physics_demo,
    content: [
      {
        type: "text",
        data: "During high school, I was taking a physics class and a Java class at the same time. In physics, I learned about the 3 body problem, which says that in a system of just 3 gravitational objects, there is no closed form solution - there is no way to write an equation that gives the exact movements of the 3 objects. In addition, the behavior of the objects is often chaotic. Because we had just started learning about graphics in my Java class, I decided to simulate orbital motion using Java. This is a demonstartion of several objects of various mass moving around each other.",
      },
      {
        type: "video",
        data: planet_physics_demo,
      },
      {
        type: "text",
        data: "This was a thoroughly enjoyable project to work on, as I was able to combine my two favorite subjects and create something visually interesting. My favorite part was using the gravitational equations I learned in physics, changing them into a format that I could put into code using knowledge from math classes, and then writing the equations using the Math library in Java. The following image is the update function that contains the majority of the math for the program, the part I am most proud of.",
      },
      {
        type: "image",
        data: planet_physics_code,
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
    links: [
      {
        name: "Github",
        url: "https://github.com/Eddie048/portfolio",
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

export { projects };
