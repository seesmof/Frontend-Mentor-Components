import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="border-b-2 flex flex-row items-center justify-between border-slate-700 pb-2">
        <h2 className="font-bold sm:text-xl">Frontend Mentor</h2>
        <div className="flex flex-row items-center gap-2">
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

export default Navbar;
