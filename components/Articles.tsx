import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaBriefcase, FaDownload, FaMailBulk } from 'react-icons/fa'
import { LuSendHorizonal } from "react-icons/lu";

const Articles = () => {
    const WorkExperience = [
        {
            title: 'Freelance',
            role: 'Remote',
            date: 'March 2023',
            imageurl: "/freelance_banking.jpeg"
        },
        {
            title: 'Claas',
            role: 'Software Engineer (Intern)',
            date: 'August - October 2023',
            imageurl: "/claas.png"
        },
        {
            title: 'MTAB Technology Center',
            role: 'Web Developer (Intern)',
            date: 'November 2023',
            imageurl: "/mtab.png"
        },
        {
            title: 'Collab Junction',
            role: 'Founder & CTO',
            date: 'May 2023 - Present',
            imageurl: "/cj.webp"
        },
    ]
    return (
        <div className='flex lg:flex-row flex-col pt-[450px]'>
            <div className='space-y-10 lg:w-[70%] w-full my-4'>
                <div className="relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">Crafting a design system for a multiplanetary future</span>
                        </Link>
                    </h2>

                    <div className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5">
                        <span className="absolute inset-y-0 left-0 flex items-center h-5 w-0.5 rounded-full bg-zinc-500"></span>
                        <div>September 5, 2022</div>
                    </div>

                    <p className="relative z-10 mt-2 text-sm text-zinc-400">Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria, we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.</p>
                    <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                        <Link href="/articles/" className='flex items-center space-x-2'>
                            <div>
                                Read article
                            </div>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>

                <div className="relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href="/articles/">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">Crafting a design system for a multiplanetary future</span>
                        </Link>
                    </h2>

                    <div className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5">
                        <span className="absolute inset-y-0 left-0 flex items-center h-5 w-0.5 rounded-full bg-zinc-500"></span>
                        <div>September 5, 2022</div>
                    </div>

                    <p className="relative z-10 mt-2 text-sm text-zinc-400">Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria, we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.</p>
                    <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                        <Link href="/articles/" className='flex items-center space-x-2'>
                            <div>
                                Read article
                            </div>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>

                <div className="relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">Crafting a design system for a multiplanetary future</span>
                        </Link>
                    </h2>

                    <div className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5">
                        <span className="absolute inset-y-0 left-0 flex items-center h-5 w-0.5 rounded-full bg-zinc-500"></span>
                        <div>September 5, 2022</div>
                    </div>

                    <p className="relative z-10 mt-2 text-sm text-zinc-400">Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria, we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.</p>
                    <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                        <Link href="/articles/crafting-a-design-system-for-a-multiplanetary-future" className='flex items-center space-x-2'>
                            <div>
                                Read article
                            </div>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='lg:p-4 my-10 space-y-5'>
                <div className='rounded-2xl border p-6 border-zinc-700/40'>
                    <h2 className="flex text-sm font-semibold text-zinc-100">
                        <FaMailBulk />
                        <span className="ml-3">Stay up to date</span>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-400">Contact me through mail</p>

                    <div className='text-xs mt-3 border-2 border-zinc-700/40 rounded-lg p-2 px-4 text-zinc-400 flex justify-between items-center'>
                        <div>
                            hiarjun.malhotra2002@gmail.com
                        </div>

                        <LuSendHorizonal />
                    </div>
                </div>

                <div>
                    <div className="rounded-2xl border p-6 border-zinc-700/40">
                        <h2 className="flex text-sm font-semibold text-zinc-100 items-center">
                            <FaBriefcase size={20} />
                            <span className="ml-3">Work</span>
                        </h2>

                        <div className="mt-6 space-y-4">
                            {WorkExperience.map((entry, index) => (
                                <div key={index} className="flex gap-4 items-center">
                                    <Image src={`${entry.imageurl}`} className='rounded-full object-cover bg-zinc-800 h-6 w-6' alt='' width={512} height={512} />
                                    <div className="flex flex-auto flex-wrap gap-x-2">
                                        <div className="w-full flex-none text-sm font-medium text-zinc-100">{entry.title}</div>
                                        <div className="text-xs text-zinc-400">{entry.role}</div>
                                        <div className="ml-auto text-xs text-zinc-500 flex space-x-2">{entry.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium active:bg-zinc-100 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70 group mt-6 w-full" href="#">
                            Download CV
                            <FaDownload />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Articles