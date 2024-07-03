import React from "react";
import { socials } from "../assets/social-icons";

const Footer = () => {
  return (
    <div className="bg-background-secondary w-full flex flex-row justify-center gap-4 sm:gap-8 p-4">
      {socials.map(({ name, link, icon }) => (
        <a className="flex flex-col" href={link} key={name}>
          <img className="sm:h-8 h-6 mx-auto" src={icon} alt={name + " icon"} />
          <p className="sm:text-base text-sm text-center">{name}</p>
        </a>
      ))}
    </div>
  );
};

export default Footer;
