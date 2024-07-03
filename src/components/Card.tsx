import React from "react";

type CardProps = {
  title: string;
  description: string;
  media_src: string;
  pageAddress: string;
};

const Card = ({ title, description, media_src, pageAddress }: CardProps) => {
  return (
    <a
      href={pageAddress}
      className="max-w-[400px] group rounded-lg bg-background-secondary sm:p-4 p-2 shadow-accent shadow-md"
    >
      <p className="text-text text-xl font-bold pb-2">{title}</p>
      <div className="relative overflow-hidden aspect-video rounded-lg">
        <div className="group-hover:translate-y-full transition-transform duration-500">
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
        <div className="absolute top-0 h-full -translate-y-full group-hover:transform-none duration-500 transition-transform bg-background-secondary pt-1">
          <p className="text-text lg:text-lg text-base">{description}</p>
          <p className="lg:mt-3 mt-1 button-small">Click to learn more!</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
