import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const page = () => {
    return (
        <div className='md:pt-16 pt-0 space-y-10'>
            <div>
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                        I’ve spoken at events all around the world and been interviewed for many podcasts.
                    </h1>
                    <p className="mt-6 text-base text-zinc-400">
                        One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.
                    </p>
                </div>
            </div>

            <div>
                <div className="flex max-w-3xl flex-col space-y-16">
                    <div className="md:border-l md:pl-6 md:border-zinc-700/40">
                        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <h2 className="text-sm font-semibold text-zinc-100">Conferences</h2>
                            <div className="md:col-span-3">
                                <div className="space-y-16">
                                    <article className="group relative flex flex-col items-start">
                                        <h3 className="text-base font-semibold tracking-tight text-zinc-100">
                                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                                            <Link href="/">
                                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                                <span className="relative z-10">In space, no one can watch you stream — until now</span>
                                            </Link>
                                        </h3>
                                        <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5">
                                            <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                                <span className="h-4 w-0.5 rounded-full bg-zinc-500"></span>
                                            </span>SysConf 2021
                                        </p>
                                        <p className="relative z-10 mt-2 text-sm text-zinc-400">
                                            A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.
                                        </p>
                                        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500 space-x-2">
                                            <div>Watch video</div>
                                            <FaArrowRight />
                                        </div>
                                    </article>
                                    <article className="group relative flex flex-col items-start">
                                        <h3 className="text-base font-semibold tracking-tight text-zinc-100">
                                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                                            <a href="#">
                                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                                <span className="relative z-10">Lessons learned from our first product recall</span>
                                            </a>
                                        </h3>
                                        <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5">
                                            <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                                <span className="h-4 w-0.5 rounded-full bg-zinc-500"></span>
                                            </span>Business of Startups 2020
                                        </p>
                                        <p className="relative z-10 mt-2 text-sm text-zinc-400">
                                            They say that if you’re not embarrassed by your first version, you’re doing it wrong. Well, when you’re selling DIY space shuttle kits, it turns out it’s a bit more complicated.
                                        </p>
                                        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500 space-x-2">
                                            <div>Watch video</div>
                                            <FaArrowRight />
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default page