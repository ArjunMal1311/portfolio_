import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLink } from 'react-icons/fa'

const page = () => {
    return (
        <div className='md:pt-16 pt-0'>
            <div>
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Things I’ve made trying to put my dent in the universe.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
                    </p>
                </div>
            </div>

            <div className='mt-16 flex flex-wrap md:flex-row flex-col pr-3'>
                <div className="group relative flex flex-col items-start md:w-[28%] w-full  m-5 my-10">
                    <h2 className="mt-6 text-base font-semibold text-zinc-100">
                        <Image src={"/dp.jpeg"} className='rounded-full object-cover bg-zinc-800 h-16 w-16 mb-4' alt='' width={512} height={512} />

                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href="http://planetaria.tech">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">Planetaria</span>
                        </Link>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Creating technology to empower civilians to explore space on their own terms.</p>
                    <p className="mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200 items-center">
                        <FaLink />
                        <span className="ml-2">planetaria.tech</span>
                    </p>
                </div>
                <div className="group relative flex flex-col items-start md:w-[28%] w-full  m-5 my-10">
                    <h2 className="mt-6 text-base font-semibold text-zinc-100">
                        <Image src={"/dp.jpeg"} className='rounded-full object-cover bg-zinc-800 h-16 w-16 mb-4' alt='' width={512} height={512} />

                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href="http://planetaria.tech">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">Planetaria</span>
                        </Link>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Creating technology to empower civilians to explore space on their own terms.</p>
                    <p className="mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200 items-center">
                        <FaLink />
                        <span className="ml-2">planetaria.tech</span>
                    </p>
                </div>
                <div className="group relative flex flex-col items-start md:w-[28%] w-full  m-5 my-10">
                    <h2 className="mt-6 text-base font-semibold text-zinc-100">
                        <Image src={"/dp.jpeg"} className='rounded-full object-cover bg-zinc-800 h-16 w-16 mb-4' alt='' width={512} height={512} />

                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href="http://planetaria.tech">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">Planetaria</span>
                        </Link>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Creating technology to empower civilians to explore space on their own terms.</p>
                    <p className="mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200 items-center">
                        <FaLink />
                        <span className="ml-2">planetaria.tech</span>
                    </p>
                </div>
                <div className="group relative flex flex-col items-start md:w-[28%] w-full  m-5 my-10">
                    <h2 className="mt-6 text-base font-semibold text-zinc-100">
                        <Image src={"/dp.jpeg"} className='rounded-full object-cover bg-zinc-800 h-16 w-16 mb-4' alt='' width={512} height={512} />

                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href="http://planetaria.tech">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">Planetaria</span>
                        </Link>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Creating technology to empower civilians to explore space on their own terms.</p>
                    <p className="mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200 items-center">
                        <FaLink />
                        <span className="ml-2">planetaria.tech</span>
                    </p>
                </div>
                <div className="group relative flex flex-col items-start md:w-[28%] w-full  m-5 my-10">
                    <h2 className="mt-6 text-base font-semibold text-zinc-100">
                        <Image src={"/dp.jpeg"} className='rounded-full object-cover bg-zinc-800 h-16 w-16 mb-4' alt='' width={512} height={512} />

                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href="http://planetaria.tech">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">Planetaria</span>
                        </Link>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Creating technology to empower civilians to explore space on their own terms.</p>
                    <p className="mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200 items-center">
                        <FaLink />
                        <span className="ml-2">planetaria.tech</span>
                    </p>
                </div>
                <div className="group relative flex flex-col items-start md:w-[28%] w-full  m-5 my-10">
                    <h2 className="mt-6 text-base font-semibold text-zinc-100">
                        <Image src={"/dp.jpeg"} className='rounded-full object-cover bg-zinc-800 h-16 w-16 mb-4' alt='' width={512} height={512} />

                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href="http://planetaria.tech">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">Planetaria</span>
                        </Link>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Creating technology to empower civilians to explore space on their own terms.</p>
                    <p className="mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200 items-center">
                        <FaLink />
                        <span className="ml-2">planetaria.tech</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page