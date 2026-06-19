"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

interface Project {
  name: string;
  href: string;
}

const projects: Project[] = [
  {
    name: "Chat App",
    href: "chat-app-css-illustration",
  },
  {
    name: "Clipboard Landing Page",
    href: "clipboard-landing-page",
  },
  {
    name: "Fylo Data Storage",
    href: "fylo-data-storage-component",
  },
  {
    name: "Product Preview Card",
    href: "product-preview-card-component",
  },
  {
    name: "QR Code",
    href: "qr-code-component",
  },
  {
    name: "Testimonials Grid",
    href: "testimonials-grid-section",
  },
  {
    name: "Newsletter Sign Up Form",
    href: "newsletter-sign-up-with-success-message-component",
  },
];

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
          <div
            className={`flex p-3 rounded-md items-center justify-between ${
              isDarkMode
                ? "bg-slate-800"
                : "bg-inherit shadow-xl shadow-slate-300"
            }`}
          >
            <h2 className="font-bold sm:text-xl">Frontend Mentor</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsDarkMode((isDarkMode) => !isDarkMode)}
                title="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <BsSun className="text-xl stroke-[0.2]" />
                ) : (
                  <BsMoon className="text-xl stroke-[0.3]" />
                )}
              </button>
              <Link
                href="https://github.com/seesmof/frontend-mentor-solutions"
                title="View Source Code on GitHub"
              >
                <AiFillGithub className="text-2xl" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 pt-4">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className={`flex relative flex-col rounded-md overflow-hidden group ${
                  isDarkMode ? "" : "shadow-xl shadow-slate-300"
                }`}
              >
                <Image
                  src={`/img/${project.href}.png`}
                  className="h-60 w-full object-cover object-top duration-1500 group-hover:object-bottom"
                  alt="An image of the project."
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-4 group-hover:bg-opacity-50 sm:bg-opacity-0 bg-opacity-50 gap-1 duration-300">
                  <h1 className="group-hover:opacity-100 sm:opacity-0 duration-300 text-white text-xl sm:text-2xl font-bold">
                    {project.name}
                  </h1>
                  <p className="group-hover:opacity-100 sm:opacity-0 duration-300 text-white/80 flex flex-row items-center">
                    Preview <GoLinkExternal className="ml-2" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
