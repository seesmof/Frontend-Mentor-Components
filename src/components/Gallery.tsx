"use client";

import { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

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

const Gallery = () => {
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
