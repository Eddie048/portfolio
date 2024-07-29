import React from "react";

type CardProps = {
  title: string;
  description: string;
  mediaSrc: string;
  pageAddress: string;
};

const Card = ({ title, description, mediaSrc, pageAddress }: CardProps) => {
  return (
    <a
      href={pageAddress}
      className="max-w-[400px] group rounded-lg bg-background-secondary sm:p-4 p-2 shadow-accent shadow-md"
    >
      <p className="text-text text-xl font-bold pb-2">{title}</p>
      <div className="relative overflow-hidden aspect-video rounded-lg">
        <div className="group-hover:translate-y-full transition-transform duration-500">
          {mediaSrc.endsWith(".mov") ? (
            <video
              src={mediaSrc}
              controls={false}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          ) : (
            <img src={mediaSrc} alt={title} />
          )}
        </div>
        <div className="absolute top-0 h-full -translate-y-full group-hover:transform-none duration-500 transition-transform bg-background-secondary pt-1">
          <p className="text-text lg:text-lg text-base">{description}</p>
          <p className="lg:mt-3 mt-1 button-small w-fit">
            Click to learn more!
          </p>
        </div>
      </div>
    </a>
  );
};

export default Card;
