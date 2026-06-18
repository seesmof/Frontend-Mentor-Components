"use client";
import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { Project } from "@/app/page";

const Gallery = ({ projects }: { projects: Project[] }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
            {projects.map((project, index) => (
              <Card
                key={index}
                href={project.href}
                name={project.name}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
