import hospital_login from "./hospital-application/hospital-app-login.png";
import hospital_conference_page from "./hospital-application/hospital-conference-page.png";
import hospital_flower_page from "./hospital-application/hospital-flower-page.png";
import hospital_home_page from "./hospital-application/hospital-home-page.png";
import hospital_map_page from "./hospital-application/hospital-map-page.png";
import hospital_meal_page from "./hospital-application/hospital-meal-page.png";
import hospital_pathfinding_page from "./hospital-application/hospital-pathfinding-page.png";
import hospital_service_page from "./hospital-application/hospital-service-page.png";
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
import visualizations_display from "./visualizations/visualizations.mp4";
import delaunay_demo from "./visualizations/delaunay.mov";
import standard_slime from "./visualizations/standard-slime-settings.mp4";
import strange_slime from "./visualizations/strange-slime-settings.mp4";

type project = {
  projectTitle: string;
  pageAddress: string;
  description: string;
  displayMedia: string;
  show: boolean;
  content: {
    type: "text" | "video" | "image";
    data: string;
    id: number;
  }[];
  links?: {
    name: string;
    url: string;
    id: number;
  }[];
};

const projects: project[] = [
  {
    projectTitle: "Planet Physics",
    pageAddress: "planet-physics",
    description:
      "As a fun side project during high school, I used equations from an AP physics class to create a 2D orbital mechanics simulation.",
    displayMedia: planet_physics_demo,
    show: true,
    content: [
      {
        type: "text",
        data: "During high school, I took a physics class and a Java class simultaneously. In physics, I learned about the 3 body problem, which says that in a system of just 3 gravitational objects, there is no closed-form solution - there is no way to write an equation that gives the exact movements of the 3 objects. In addition, the behavior of the objects is often chaotic. Because we had just started learning about graphics in my Java class, I decided to simulate orbital motion using Java. This is a demonstration of several objects of various mass moving around each other.",
        id: 0,
      },
      {
        type: "video",
        data: planet_physics_demo,
        id: 1,
      },
      {
        type: "text",
        data: "This was a thoroughly enjoyable project to work on, as I was able to combine my two favorite subjects and create something visually interesting. My favorite part was using the gravitational equations I learned in physics, changing them into a format that I could put into code using knowledge from math classes, and then writing the equations using the Math library in Java. The following image is the update function that contains the majority of the math for the program, the part I am most proud of.",
        id: 2,
      },
      {
        type: "image",
        data: planet_physics_code,
        id: 3,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/Eddie048/Planet-Physics",
        id: 0,
      },
    ],
  },
  {
    projectTitle: "Hypixel Player Tracker",
    pageAddress: "hypixel-player-tracker",
    description:
      "To gain an advantage in my favorite video game, I wrote a Python script that used a custom image-to-text algorithm and the game's API to tell me the skill level of the other players.",
    displayMedia: hypixel_player_tracker_demo,
    show: true,
    content: [
      {
        type: "text",
        data: "In high school, I enjoyed playing the video game Minecraft, especially online, on a server called Hypixel. My favorite game on the server, Bedwars, routinely had players with huge skill differences matched into the same game. This made for uninteresting and one-sided games. To fix this issue, I created this project, which involved teaching myself Python, API usage, image processing, and more.",
        id: 0,
      },
      {
        type: "text",
        data: "When a screenshot is taken in the game, the program detects it and scans the image to find usernames. This image reading algorithm was fully custom, taking advantage of Minecraft's pixelated font to match pixel patterns to letters. The other players' in-game statistics are then requested from the Hypixel API, the link for which is at the bottom of the page. The program then determines how threatening the players are using their statistics and displays the information. Lastly, the system displays a desktop notification with a warning if there are any particularly threatening players. Output can be seen below, an analysis of every player present in the lobby.",
        id: 1,
      },
      {
        type: "image",
        data: hypixel_player_tracker_demo,
        id: 2,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/Eddie048/autoHypixelProject",
        id: 0,
      },
      {
        name: "Hypixel API",
        url: "https://https://api.hypixel.net/",
        id: 1,
      },
    ],
  },
  {
    projectTitle: "Hospital Application",
    pageAddress: "hospital-application",
    description:
      "This project was a mock service request manager and mapping service for Brigham and Women's Hospital. It includes a database, pathfinding, user authentication, and much more.",
    displayMedia: hospital_login,
    show: true,
    content: [
      {
        type: "text",
        data: "This project was my introduction to software engineering as part of a large team. I and 9 other people worked together as part of a class to create a mock application for Brigham and Women's Hospital. We created the project primarily using Java, with JavaFX for graphics and user interfaces. We used Figma to design pages before they were implemented in code. We used SQL to communicate with a postgres backend. We used Git and Github for version control, and Github actions to automatically test branches before merges to ensure our application didn't break. We used the Agile Methodology to coordinate work between the 10 members of the group with each sprint lasting one week of our 7-week course. We used various design patterns to aid with the most complex features. By the end of the project, we had 14 database tables, over 100 Java classes and interfaces, and numerous FXML and CSS files. Below are screenshots of parts of the finished application and descriptions of some of its functionality.",
        id: 0,
      },
      {
        type: "text",
        data: "This is the login page for the application. We implemented an account management system with different permissions, settings local to the user, and the assignment of different service requests, which will be explained in the following sections.",
        id: 1,
      },
      {
        type: "image",
        data: hospital_login,
        id: 2,
      },
      {
        type: "text",
        data: "This is the application's home page. It welcomes the user as well as informing them of any unfulfilled service requests currently assigned to them, as well as service requests that they've submitted.",
        id: 3,
      },
      {
        type: "image",
        data: hospital_home_page,
        id: 4,
      },
      {
        type: "text",
        data: "One of the challenges we faced was displaying a map of the hospital in our application. The hospital has 5 floors and hundreds of rooms, hallways, elevators, and staircases. Each location and connection is stored in the database. In addition to this, an administrator can change the names of rooms or move them as the hospital reorganizes its operations.",
        id: 5,
      },
      {
        type: "image",
        data: hospital_map_page,
        id: 6,
      },
      {
        type: "text",
        data: "In addition to reading the visual maps, users can use the application to find their way around the hospital. By entering a start and end location, a path is shown through the hospital, even as it winds its way through the floors. We even allow the user to pick different algorithms to search with, just for fun (Even though some of the algorithms are slower and likely to give an unnecessarily long path).",
        id: 7,
      },
      {
        type: "image",
        data: hospital_pathfinding_page,
        id: 8,
      },
      {
        type: "text",
        data: "These pages allow users to submit service requests. Service requests vary in nature, but include requests for conference room reservations, meal deliveries, flower deliveries, movie rentals, and more. Service requests are stored in the database along with the assignee, initiator, date, room, and more to ensure their completion. Below are my three favorite service request pages.",
        id: 9,
      },
      {
        type: "image",
        data: hospital_flower_page,
        id: 10,
      },
      {
        type: "image",
        data: hospital_conference_page,
        id: 11,
      },
      {
        type: "image",
        data: hospital_meal_page,
        id: 12,
      },
      {
        type: "text",
        data: "Lastly, this is a page for administrators to manage all service requests in the system. They can view, modify, and delete any service request. They can also filter service requests by the assignee or completion status.",
        id: 13,
      },
      {
        type: "image",
        data: hospital_service_page,
        id: 14,
      },
      {
        type: "text",
        data: "Unfortunately, due to the nature of the project, the source code is not available on Github, but feel free to reach out if you are interested in more information.",
        id: 15,
      },
    ],
  },
  {
    projectTitle: "Portfolio Website",
    pageAddress: "portfolio-website",
    description:
      "The website you are on now was a project I used to teach myself react, tailwind, and website deployment on Vercel.",
    displayMedia: website_icon,
    show: false,
    content: [
      {
        type: "text",
        data: "This portfolio website is another personal project, my first major step into web development and hosting. I used React, TailwindCSS for styling, and Vercel for deployment. Feel free to explore the source code on Github, linked at the bottom of the page.",
        id: 0,
      },
      {
        type: "image",
        data: website_icon,
        id: 1,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/Eddie048/portfolio",
        id: 0,
      },
      {
        name: "Website",
        url: "https://edwardstump.com",
        id: 1,
      },
    ],
  },
  {
    projectTitle: "Poker Project",
    pageAddress: "poker-project",
    description:
      "This was a simple poker game that can be played against the computer with turning in cards, betting, sorting, and scoring hands against each other.",
    displayMedia: poker_icon,
    show: false,
    content: [
      {
        type: "text",
        data: "As part of a Java class, I built a poker game. This game simulates a game of 5-card draw poker against a computer opponent, complete with turning in cards, betting and raising against the computer, and scoring complicated outcomes. The complex logic of the scoring algorithm was my favorite part of the game to write. Part of the tie breaking algorithm can be seen below, a switch statement that scores two hands against each other if the initial evaluation is tied. For example, if two hands are both deemed a full house, this logic decides which full house wins.",
        id: 0,
      },
      {
        type: "image",
        data: poker_code,
        id: 1,
      },
      {
        type: "text",
        data: "Early in high school, and having 9 Java files, this was the largest project I had worked on at the time. It was my first experience managing a large number of class relationships in a large object-oriented project. Below is the game being played, I was lucky enough to get a flush!",
        id: 2,
      },
      {
        type: "image",
        data: poker_output_1,
        id: 3,
      },
      {
        type: "image",
        data: poker_output_2,
        id: 4,
      },
      {
        type: "image",
        data: poker_output_3,
        id: 5,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/Eddie048/Poker",
        id: 0,
      },
    ],
  },
  {
    projectTitle: "Threading Problems",
    pageAddress: "threading-problems",
    description:
      "As part of an operating systems course, I solved various threading problems to ensure dozens of threads could work together, ensuring fairness and avoiding deadlock.",
    displayMedia: juststance_demo,
    show: false,
    content: [
      {
        type: "text",
        data: "Learning threading is an overwhelming task. The bugs are impossible to trace down, threads never want to work together, and deadlock seems to come out of nowhere. An operating systems class in my junior year of college was my opportunity to tackle this challenge.",
        id: 0,
      },
      {
        type: "text",
        data: "In this first threading problem, 68 students try to jump onto a mat of 4 squares. The catch is that each student wants to jump between squares on the mat in a specific (pre-generated) order, making deadlock a possibility as two students waiting to jump to each other's squares would be waiting forever. I ensured deadlock was impossible by checking the squares the students planned to visit and ensuring there were no loops possible. To synchronize the threads together, I use condition variables and locks. Below is part of the output of the finished problem, all 68 threads running smoothly.",
        id: 1,
      },
      {
        type: "image",
        data: juststance_demo,
        id: 2,
      },
      {
        type: "text",
        data: "In the second problem, 3 different styles of shoes want to mount a stage to discuss their opinions with the general public. Unfortunately, different shoe types don't get along, so despite there being 5 microphones, only one type of shoe can be on stage at a time. This problem explored fairness, making sure that all threads were given equal chances to get on the stage. To handle concurrent threads in this context, I used semaphores. Below is part of the output of the finished problem, 50 shoes of 3 different types running together.",
        id: 3,
      },
      {
        type: "image",
        data: shueworld_demo,
        id: 4,
      },
    ],
  },
  {
    projectTitle: "Visualizations",
    pageAddress: "visualizations",
    description:
      "As a fun summer project, I created a few visualizations in javascript using HTML canvas graphics.",
    displayMedia: visualizations_display,
    show: true,
    content: [
      {
        type: "text",
        data: "As a fun summer project, and to learn more about Javascript, the browser event loop, and specific algorithms that interested me, I created a series of web-based visualizations that can be seen below.",
        id: 0,
      },
      {
        type: "text",
        data: "While exploring particle effects, I became interested in a specific effect, a wave of connected triangles that seemed to flow over the screen. Specifically, I was curious how a set of points could be turned into a set of triangles, called a triangulation. It turns out that a popular method often used for triangulations is the Delaunay triangulation, which aims to maximize the size of the smallest angle in the diagram. I created the below animation to show the evolution of a triangulation as more points are added. As points are added, the algorithm checks if the new point is within the circumcircle described by any of the existing triangles. If it is, that means larger angles can be created by 'flipping' triangles, by deleting existing triangles creating new ones that more efficiently connect points in the diagram.",
        id: 1,
      },
      {
        type: "video",
        data: delaunay_demo,
        id: 2,
      },
      {
        type: "text",
        data: "Recently, I was inspired by a YouTube video (linked below) to create a particle simulation. Despite each particle obeying very simple rules (turn in the direction of other particles), complex behavior emerges from their combined actions that appear organic. During this project, I was also able to learn about using the GPU to speed up calculations. Using gpu.js, a GPU library for javascript, I was able to increase the speed of the simulation by a significant margin.",
        id: 3,
      },
      {
        type: "text",
        data: "Below is a compilation of some of the different behaviors the particles exhibit by slightly modifying settings such as how far away each particle looks, how much each particle can turn, and how random their turning is. Each simulation contains 100,000 particles.",
        id: 4,
      },
      {
        type: "video",
        data: standard_slime,
        id: 5,
      },
      {
        type: "text",
        data: "By pushing these variables to the extreme, more interesting and chaotic behavior emerges. Interestingly, even in extremely chaotic conditions, the particles still appear to work towards order.",
        id: 6,
      },
      {
        type: "video",
        data: strange_slime,
        id: 7,
      },
    ],
    links: [
      {
        name: "Inspiration Video",
        url: "https://www.youtube.com/watch?v=X-iSQQgOd1A",
        id: 0,
      },
    ],
  },
];

export { projects };
