import React from "react";
import { socials } from "../assets/social-icons";

const Contact = () => {
  return (
    <div className="fixed left-0 bottom-1/2 flex flex-col">
      {socials.map(({ name, icon, link }) => (
        <a
          key={name}
          href={link}
          className="flex-row bg-slate-500 hidden sm:flex items-center p-1 pl-5 -translate-x-24 hover:transform-none duration-300 transition-transform "
        >
          <p className="w-20 text-lg">{name}</p>
          <img
            className="rounded-lg mx-auto w-10"
            key={name}
            src={icon}
            alt={name + " icon"}
          />
        </a>
      ))}
    </div>
  );
};

export default Contact;
