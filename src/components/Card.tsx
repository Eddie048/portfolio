import React, { useState } from "react";

type CardProps = {
  title: string;
  description: string;
  media_src: string;
};

const Card = ({ title, description, media_src }: CardProps) => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="relative overflow-hidden w-[400px] aspect-video group rounded-lg">
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
        onClick={onClick}
        className={`absolute top-0 h-full -translate-y-full group-hover:transform-none duration-500 transition-transform bg-gradient-to-b from-pink-600 from-40% p-5 ${
          clicked && "transform-none"
        }`}
      >
        <p className="text-gray-300 text-xl font-bold">{title}</p>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
