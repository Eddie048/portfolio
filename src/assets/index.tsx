import hospital_login from "./hospital-application/hospital-app-login.png";
import website_icon from "./portfolio-website/website-icon.png";
import planet_physics_demo from "./planet-physics/planet-physics-demo.mov";
import planet_physics_code from "./planet-physics/planet-physics-code.png";
import hypixel_player_tracker_demo from "./hypixel-player-tracker/hypixel-player-tracker-output.png";
import poker_icon from "./poker-project/poker-welcome-icon.png";
import poker_output_1 from "./poker-project/poker-output-1.png";
import poker_output_2 from "./poker-project/poker-output-2.png";
import poker_output_3 from "./poker-project/poker-output-3.png";
import poker_code from "./poker-project/poker-code.png";
import juststance_demo from "./threading-problems/juststance-demo.png";
import shueworld_demo from "./threading-problems/shueworld-demo.png";

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
        data: "During high school, I was taking a physics class and a Java class at the same time. In physics, I learned about the 3 body problem, which says that in a system of just 3 gravitational objects, there is no closed form solution - there is no way to write an equation that gives the exact movements of the 3 objects. In addition, the behavior of the objects is often chaotic. Because we had just started learning about graphics in my Java class, I decided to simulate orbital motion using Java. This is a demonstration of several objects of various mass moving around each other.",
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
    links: [
      {
        name: "Github",
        url: "https://github.com/Eddie048/Planet-Physics",
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
        data: "In high school, I enjoyed playing the video game Minecraft, especially online, on a server called Hypixel. My favorite game on the server, Bedwars, routinely had players with huge skill differences matched into the same game. This made for uninteresting and one sided games. To fix this issue, I created this project, which involved teaching myself Python, API usage, image processing, and more.",
      },
      {
        type: "text",
        data: "When a screenshot is taken in game, the program detects it and scans the image to find usernames. This image reading algorithm was fully custom, taking advantage of Minecraft's pixelated font to match pixel patterns to letters. The other players' in-game statistics are then requested from the Hypixel API, the link for which is at the bottom of the page. The program then determines how threatening the players are using their statistics and displays the information. Lastly, the system displays a desktop notification with a warning if there are any particularly threatening players. Output can be seen below, an analysis of every player present in the lobby.",
      },
      {
        type: "image",
        data: hypixel_player_tracker_demo,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/Eddie048/autoHypixelProject",
      },
      {
        name: "Hypixel API",
        url: "https://https://api.hypixel.net/",
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
      {
        name: "Website",
        url: "https://edwardstump.com",
      },
    ],
  },
  {
    projectTitle: "Poker Project",
    pageAddress: "poker-project",
    description:
      "This was a simple poker game that can be played against the computer with turning in cards, betting, sorting, and scoring hands against each other.",
    display_media: poker_icon,
    content: [
      {
        type: "text",
        data: "As part of a Java class, I built a poker game. This game simulates a game of 5 card draw poker against a computer opponent, complete with turning in cards, betting and raising against the computer, and scoring complicated outcomes. In fact, this scoring was my favorite part to work on. Part of the tie breaking algorithm can be seen below, a switch statement that scores two hands against each other if the initial evaluation is tied. For example, if two hands are both deemed a full house, this logic decides which full house wins.",
      },
      {
        type: "image",
        data: poker_code,
      },
      {
        type: "text",
        data: "Early in high school, and having 9 Java files, this was the largest project I had worked on at the time. It was my first experience managing a large number of class relationships in a large object oriented project. Below is the game being played, I was lucky enough to get a flush!",
      },
      {
        type: "image",
        data: poker_output_1,
      },
      {
        type: "image",
        data: poker_output_2,
      },
      {
        type: "image",
        data: poker_output_3,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/Eddie048/Poker",
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
        data: "Learning threading is an overwhelming task. The bugs are impossible to trace down, threads never want to work together, and deadlock seems to come out of nowhere. An operating systems class in my junior year of college was my opportunity to tackle this challenge.",
      },
      {
        type: "text",
        data: "In this first threading problem, 68 students try to jump onto a mat made up of 4 squares. The catch is that each student wants to jump between squares on the mat in a very specific order, making deadlock a possibility as two students waiting to jump to each other's squares would be waiting forever. I ensure deadlock is impossible by checking the squares the students planned to visit and ensuring there were no loops possible. To synchronize the threads together, I use condition variables and locks. Below is part of the output of the finished problem, all 68 threads running smoothly.",
      },
      {
        type: "image",
        data: juststance_demo,
      },
      {
        type: "text",
        data: "In the second problem, 3 different styles of shoes want to mount a stage in order to discuss their opinions with the general public. Unfortunately, different shoe types don't get along, so despite there being 5 microphones, only one type of shoe can be on stage at a time. This problem explored fairness, making sure that all threads were given equal chances to get on the stage. To handle concurrent threads in this context, I used semaphores. Below is part of the output of the finished problem, 50 shoes of 3 different types running together.",
      },
      {
        type: "image",
        data: shueworld_demo,
      },
    ],
  },
];

export { projects };
