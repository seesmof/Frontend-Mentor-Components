"use client";
import { BsMoon, BsSun } from "react-icons/bs";
import Link from "next/link";
import React, { useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";

interface CardProps {
  link: string;
  name: string;
  isDarkMode: boolean;
}

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: any;
}

const Card = ({ link, name, isDarkMode }: CardProps) => {
  const overlayItemsClasses =
    "group-hover:opacity-100 sm:opacity-0 duration-300";

  return (
    <>
      <Link
        href={link}
        className={`flex relative flex-col rounded-md overflow-hidden group ${
          isDarkMode ? "" : "shadow-xl shadow-slate-300"
        }`}
      >
        <img
          src={`/img/${link}.png`}
          className="h-60 w-full object-cover object-top duration-[1500ms] group-hover:object-bottom"
          alt=""
        />
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-4 group-hover:bg-opacity-50 sm:bg-opacity-0 bg-opacity-50 gap-1 duration-300">
          <h1
            className={`${overlayItemsClasses} text-white text-xl sm:text-2xl font-bold`}
          >
            {name}
          </h1>
          <p
            className={`${overlayItemsClasses} text-white/80 flex flex-row items-center`}
          >
            Preview <GoLinkExternal className="ml-2" />
          </p>
        </div>
      </Link>
    </>
  );
};

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  return (
    <>
      <div
        className={`flex flex-row p-3 rounded-md items-center justify-between ${
          isDarkMode ? "bg-slate-800" : "bg-inherit shadow-xl shadow-slate-300"
        }`}
      >
        <h2 className="font-bold sm:text-xl">Frontend Mentor</h2>
        <div className="flex flex-row items-center gap-2">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? (
              <BsMoon className="text-xl stroke-[0.3]" />
            ) : (
              <BsSun className="text-xl stroke-[0.2]" />
            )}
          </button>
          <a
            href="https://github.com/seesmof/frontend-mentor-solutions"
            target="_blank"
            title="View Source Code on GitHub"
            className="flex flex-row items-end gap-1"
          >
            <AiFillGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const Projects = [
    {
      name: "Chat App",
      link: "/chat-app-css-illustration",
    },
    {
      name: "Clipboard Landing Page",
      link: "/clipboard-landing-page",
    },
    {
      name: "Fylo Data Storage",
      link: "/fylo-data-storage-component",
    },
    {
      name: "Product Preview Card",
      link: "/product-preview-card-component",
    },
    {
      name: "QR Code",
      link: "/qr-code-component",
    },
    {
      name: "Testimonials Grid",
      link: "/testimonials-grid-section",
    },
    {
      name: "Newsletter Sign Up Form",
      link: "/newsletter-sign-up-with-success-message-component",
    },
  ];

  return (
    <>
      <div
        className={`min-h-screen p-4 md:p-6 ${
          isDarkMode
            ? "bg-slate-900 text-slate-100"
            : "bg-slate-100 text-slate-900"
        }`}
      >
        <div className="flex flex-col mx-auto max-w-4xl">
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 pt-4">
            {Projects.map((project) => (
              <Card
                key={project.name}
                link={project.link}
                name={project.name}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
