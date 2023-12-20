"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown, FaArrowUp, FaRegMinusSquare } from "react-icons/fa"
import { usePathname } from 'next/navigation'

export const links = [
    {
        name: "About",
        hash: "/",
    },
    {
        name: "Articles",
        hash: "/articles",
    },
    {
        name: "Projects",
        hash: "/projects",
    },
    {
        name: "Skills",
        hash: "/skills",
    }
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="z-[999] relative">
            <motion.div
                className="hidden sm:flex fixed left-1/2 h-[2.3rem] bg-[#27272AE6] ring-1 ring-zinc-300/20 top-6 w-[22rem] rounded-full"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>
            
            <div className="sm:hidden flex justify-end items-end bg-[#18181b]">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className=" m-4 px-5 text-[14px] py-2 border rounded-full text-[#E4E4E7] border-gray-500 flex items-center space-x-2 bg-[#27272AE6]"
                >
                    <div>
                        Menu
                    </div>

                    <div>
                        {!isOpen ? <FaArrowDown size={12} /> : <FaArrowUp size={12} />}
                    </div>
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
                                className={`flex w-full items-center justify-center px-3 py-3 transition text-[#E4E4E7] hover:text-gray-500 ${pathname === link.hash ? "text-teal-400" : ""}`}
                                href={link.hash}
                            >
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            <div className="relative">
                {isOpen && (
                    <div className="absolute transform bg-white shadow-md rounded-md w-full">
                        <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
                            <div className="flex justify-between items-center my-2 text-sm font-medium text-zinc-400">Navigation</div>
                            <ul className="py-2 ">
                                {links.map((link) => (
                                    <li key={link.hash} className="py-2 border-b-2 border-[#292929] w-full">
                                        <Link
                                            className="text-[#D4D4D8] hover:text-gray-500 py-2 text-[15px]"
                                            href={link.hash}
                                        >
                                            {link.name}
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