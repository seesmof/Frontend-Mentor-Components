import Link from "next/link";
import React from "react";
import { GoLinkExternal } from "react-icons/go";

const Card = ({ link, name }: { link: string; name: string }) => {
  return (
    <>
      <Link
        href={link}
        className="flex relative flex-col rounded-md overflow-hidden group"
      >
        <img
          src={`/img/${link}.png`}
          className="h-60 w-full object-cover object-top duration-[1500ms] group-hover:object-bottom"
          alt=""
        />
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-4 group-hover:bg-opacity-50 bg-opacity-0 gap-1 duration-300">
          <h1 className="text-white text-2xl font-bold group-hover:opacity-100 opacity-0 duration-300">
            {name}
          </h1>
          <p className="text-white/80 flex flex-row items-center group-hover:opacity-100 opacity-0 duration-300">
            Preview <GoLinkExternal className="ml-2" />
          </p>
        </div>
      </Link>
    </>
  );
};

export default Card;
