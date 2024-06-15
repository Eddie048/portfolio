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
      className="w-[400px] group rounded-lg overflow-hidden"
      onClick={onClick}
    >
      <p className="text-gray-300 text-xl font-bold bg-pink-600 px-4 py-2">
        {title}
      </p>
      <div className="relative overflow-hidden aspect-video ">
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
        <div
          className={`absolute top-0 h-full -translate-y-full group-hover:transform-none duration-500 transition-transform bg-gradient-to-b from-pink-600 from-40% px-4 pt-3 ${
            clicked && "transform-none"
          }`}
        >
          <p className="text-gray-300 text-lg">{description}</p>
          <div className="flex flex-row gap-3">
            <Link
              to={pageAddress}
              className="text-lg text-gray-300 border-gray-300 bg-slate-700 border-2 items-center px-3 py-1 mt-1 w-fit hover:bg-pink-600 hover:border-pink-600 hover:text-slate-900 rounded-lg"
            >
              Learn More
            </Link>
            {links
              .filter(({ url }) => url.includes("github.com"))
              .map(({ name, url }) => (
                <Link
                  to={url}
                  className="text-lg text-gray-300 border-gray-300 bg-slate-700 border-2 items-center px-3 py-1 mt-1 w-fit hover:bg-pink-600 hover:border-pink-600 hover:text-slate-900 rounded-lg"
                >
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
