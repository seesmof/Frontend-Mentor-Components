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
  { name: "Chat App", href: "chat" },
  { name: "Clipboard Landing Page", href: "clipboard" },
  { name: "Fylo Data Storage", href: "fylo" },
  { name: "Newsletter Sign Up Form", href: "newsletter" },
  { name: "Product Preview Card", href: "product" },
  { name: "QR Code", href: "qr" },
  { name: "Testimonials Grid", href: "testimonials" },
];

const githubHref = "https://github.com/seesmof/frontend-mentor-solutions";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-sky-50">
        <div className="flex flex-col gap-3 mx-auto max-w-3xl p-3">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="flex flex-col rounded-md group relative"
              >
                <Image
                  src={`/img/${project.href}.png`}
                  alt="An image of the project."
                  width={800}
                  height={600}
                />
                <h2 className="text-xl sm:text-2xl font-bold">
                  {project.name}
                </h2>
                <p>Preview</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
