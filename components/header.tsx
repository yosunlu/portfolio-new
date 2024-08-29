"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative">
      <div
        className="invisible sm:visible fixed border-2 top-1/2 -translate-y-1/2 left-8 w-[3.25rem] h-[12rem] rounded-full bg-emerald-700
        border-slate-400 border-opacity-80 shadow-lg shadow-black/[0.03]"
      >
        <ul className="flex flex-col gap-4 w-full h-full items-center justify-center text-[1rem] font-medium text-white text-5xl ">
          {links.map((link) => (
            <li className="flex items-center justify-center" key={link.hash}>
              <Link 
                className="flex w-full items-center justify-center px-3 py-1"
                href={link.hash}
                onClick={() => {
                    setActiveSection(link.name);
                }}
              >
                {link.display}
                {link.name === activeSection && (
                  <motion.span
                    className="border-2 border-emerald-700 rounded-full h-[3.5rem] w-[3rem] bg-slate-50  absolute"
                    layoutId="activeSection"
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

{/* <li className="flex items-center justify-center" key={link.hash}>
  <Link
    className={clsx(
      "flex items-center justify-center px-3 py-3 transition",
      {
        "text-gray-950 dark:text-gray-300": activeSection === link.name,
        "text-gray-500 dark:text-gray-500 hover:text-gray-950 dark:hover:text-gray-300":
          activeSection !== link.name,
      }
    )}
    href={link.hash}
    onClick={() => {
      setActiveSection(link.name);
    }}
  >
    {link.display}
    {link.name === activeSection && (
      <motion.span
        className="absolute inset-0 border-2 border-emerald-700 rounded-full h-[3.5rem] w-[3rem] bg-slate-50"
        layoutId="activeSection"
      />
    )}
  </Link>
</li> */}
