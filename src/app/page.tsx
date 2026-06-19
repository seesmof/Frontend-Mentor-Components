"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AiFillGithub } from "react-icons/ai";
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

const githubHref = "https://github.com/seesmof/frontend-mentor-solutions";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-sky-50">
        <div className="flex flex-col mx-auto max-w-3xl p-3">
          {/* Navbar */}
          <nav className="bg-white rounded-md">
            <div className="flex justify-between items-center p-3">
              <h1 className="font-bold hover:underline underline-offset-4 cursor-pointer">
                <Link href={"/"}>Frontend Pages</Link>
              </h1>
              <Link href={githubHref}>
                <AiFillGithub className="text-2xl" />
              </Link>
            </div>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 pt-4">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="flex relative flex-col rounded-md overflow-hidden group shadow-xl shadow-slate-300"
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
