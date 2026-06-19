import { BsMoon, BsSun } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  return (
    <>
      <div
        className={`flex p-3 rounded-md items-center justify-between ${
          isDarkMode ? "bg-slate-800" : "bg-inherit shadow-xl shadow-slate-300"
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
    </>
  );
};

export default Navbar;
