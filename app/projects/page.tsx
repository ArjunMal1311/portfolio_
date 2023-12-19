import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLink } from 'react-icons/fa';

const projects = [
    {
        name: 'Discord Clone',
        description: 'Created a Discord clone mirroring the features of the original discord.',
        link: 'https://mydiscord.vercel.app/',
        imgurl: "/discord_clone.jpg",
        github: "https://github.com/ArjunMal1311/Discord_Clone"
    },
    {
        name: 'Online Payment Fraud Detection',
        description: "Detecting Payment Frauds using Machine Learning",
        link: "",
        imgurl: "/payment.jpeg",
        github: "https://github.com/smartinternz02/SI-GuidedProject-597433-1697635910"
    },
    {
        name: 'Personalized Finance Tracker',
        description: "Finance Tracker with calculator - Track, Calculate, Save, Share: Check Returns",
        link: "https://checkreturns.vercel.app/",
        imgurl: "/check-returns.jpeg",
        github: "https://github.com/ArjunMal1311/check-returns"
    },
    {
        name: 'BlogBreeeeze',
        description: 'Empowers users to share their insights and thoughts through written blogs.',
        link: 'https://blog-breeeeze-crkx.vercel.app',
        imgurl: "/blog_breeeeze.jpg",
        github: "https://github.com/ArjunMal1311/BlogBreeeeze"
    },
    {
        name: 'Readers-Realm',
        description: 'Immersive online shopping experience for book enthusiasts.',
        link: '',
        imgurl: "/readers_realm.jpg",
        github: "https://github.com/ArjunMal1311/ReadersRealm"
    },
    {
        name: 'WanderStay',
        description: 'Hotel Reservation Website using NextJS, Prisma, Cloudinary, MongoDB.',
        link: 'https://hotel-reservation-app-beta.vercel.app/',
        imgurl: "/wander_stay.jpg",
        github: "https://github.com/ArjunMal1311/Hotel-Reservation-App"
    },
    {
        name: 'VIT-BAY',
        description: 'Inspired by eBay, a one-stop solution for college students.',
        link: '',
        imgurl: "/vit_bay.jpg",
        github: ""
    },
];

const ProjectPage = () => {
    return (
        <div className='md:pt-16 pt-0 pr-6'>
            <div className="max-w-2xl">
                <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                    Explore My Universe of Creations
                </h1>
                <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                    I’ve worked on tons of little projects over the years. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
                </p>
            </div>

            <div className='mt-16 flex flex-wrap md:flex-row flex-col pr-3'>
                {projects.map((project, index) => (
                    <div key={index} className="group relative flex flex-col items-start md:w-[28%] w-full m-5 my-10">
                        <h2 className="mt-6 text-base font-semibold text-zinc-100">
                            <Image src={`${project.imgurl}`} className='rounded-full object-cover bg-zinc-800 h-16 w-16 mb-4' alt='' width={512} height={512} />

                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                            <div>
                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                <span className="relative z-10">{project.name}</span>
                            </div>
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                        <div className="mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200 items-center space-x-3 cursor-pointer">
                            {project.link && <Link href={project.link} className="border px-3 py-1 rounded-lg">Project Demo</Link>}
                            {project.github && <Link href={project.github} className="border px-3 py-1 rounded-lg">Github</Link>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
