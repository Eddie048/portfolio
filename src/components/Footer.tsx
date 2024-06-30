import React from "react";
import { socials } from "../assets/social-icons";

const Footer = () => {
  return (
    <div className="bg-primary-light w-full flex flex-row justify-center gap-4 sm:gap-8 p-4">
      {socials.map(({ name, link, icon }) => (
        <a className="flex flex-col" href={link} key={name}>
          <img
            className="md:w-10 w-10 rounded-lg mx-auto"
            src={icon}
            alt={name + " icon"}
          />
          <p className="sm:visible invisible sm:text-lg text-center">{name}</p>
        </a>
      ))}
    </div>
  );
};

export default Footer;
