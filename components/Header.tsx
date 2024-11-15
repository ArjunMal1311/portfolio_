"use client"

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { usePathname } from 'next/navigation';

export interface Link {
  name: string;
  hash: string;
}

const links: Link[] = [
  {
    name: "About",
    hash: "/",
  },
  {
    name: "Skills",
    hash: "/skills",
  },
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Articles",
    hash: "/articles",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const componentRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuButton = document.getElementById("menu-button");
      const menu = document.getElementById("mobile-menu");

      if (
        menu &&
        menuButton &&
        !menu.contains(event.target as Node) &&
        !menuButton.contains(event.target as Node) &&
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };


    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="z-[999] relative select-none">
      <motion.div
        className="hidden sm:flex fixed left-1/2 h-[2.3rem] bg-[#27272AE6] ring-1 ring-zinc-300/20 top-6 w-[22rem] rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <div className="sm:hidden flex justify-end items-end bg-[#18181b]">
        <button
          id="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          className="m-4 px-5 text-[14px] py-2 border rounded-full text-[#E4E4E7] border-gray-500 flex items-center space-x-2 bg-[#27272AE6]"
        >
          <div>Menu</div>
          <div>{!isOpen ? <FaArrowDown size={12} /> : <FaArrowUp size={12} />}</div>
        </button>
      </div>

      <nav className="flex flex-col lg:flex-row fixed left-1/2 -translate-x-1/2 top-[1.2rem]">
        <ul className="hidden sm:flex sm:flex-row w-[15rem] items-center justify-center gap-y-2 text-[14px] font-medium flex-nowrap">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
              >
                <div className={`flex w-full items-center justify-center px-3 py-3 transition text-[#E4E4E7] hover:text-gray-500 ${pathname === link.hash ? "text-teal-400" : ""}`}>
                  {link.name}
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="relative" ref={componentRef}>
        {isOpen && (
          <div className="absolute transform bg-white shadow-md rounded-md w-full select-none">
            <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
              <div className="flex justify-between items-center my-2 text-sm font-medium text-zinc-400">Navigation</div>
              <ul className="py-2">
                {links.map((link) => (
                  <li key={link.hash} className="py-2 border-b-2 border-[#292929] w-full">
                    <Link
                      href={link.hash}
                    >
                      <div className="text-[#D4D4D8] hover:text-gray-500 py-2 text-[15px]">
                        {link.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
