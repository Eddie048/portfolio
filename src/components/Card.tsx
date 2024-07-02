import React, { useState } from "react";
import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  media_src: string;
  pageAddress: string;
  links?: {
    name: string;
    url: string;
  }[];
};

const Card = ({
  title,
  description,
  media_src,
  pageAddress,
  links = [],
}: CardProps) => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className="w-[400px] group rounded-lg bg-background-secondary p-4 shadow-accent shadow-md"
      onClick={onClick}
    >
      <p className="text-text text-xl font-bold pb-2">{title}</p>
      <div className="relative overflow-hidden aspect-video rounded-lg">
        <div
          className={`group-hover:translate-y-full transition-transform duration-700 ${
            clicked && "translate-y-full"
          }`}
        >
          {media_src.endsWith(".mov") ? (
            <video
              src={media_src}
              controls={false}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          ) : (
            <img src={media_src} alt={title} />
          )}
        </div>
        <div
          className={`absolute top-0 h-full -translate-y-full group-hover:transform-none duration-700 transition-transform bg-background-secondary from-40% px-4 pt-3 ${
            clicked && "transform-none"
          }`}
        >
          <p className="text-text text-lg">{description}</p>
          <div className="flex flex-row gap-3">
            <Link to={pageAddress} className=" mt-1 w-fit button-small">
              Learn More
            </Link>
            {links
              .filter(({ url }) => url.includes("github.com"))
              .map(({ name, url }) => (
                <Link to={url} key={name} className="mt-1 button-small">
                  {name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
