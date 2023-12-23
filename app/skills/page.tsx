import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaReact, FaBootstrap, FaNode, FaPython, FaHtml5, FaCss3, FaJs, FaSass, FaDocker } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

const data = [
    {
        category: 'Certifications',
        type: 'Certificate',
        items: [
            {
                title: 'AI/ML Certifications',
                link: '/SmartInternz.pdf',
                description: 'Hands-on experience in cutting-edge AI/ML technologies with SmartInternz and Google Externship Program.',
            },
            {
                title: 'MERN Certification from Ethnus',
                link: '/MERN.pdf',
                description: 'Mastered the MERN stack with Ethnus, gaining proficiency in full-stack development.',
            },
        ],
    },
    {
        category: 'Achievements',
        type: 'Recognition',
        items: [
            {
                title: 'Best Mentor Award - Hackathon',
                link: '',
                description: 'Honored for providing unparalleled guidance at a prestigious hackathon.',
            },
            {
                title: 'Level 7 (Expert) - DSA Coding Ninjas',
                link: 'https://www.codingninjas.com/studio/profile/shandle',
                description: 'Attained Level 7 Expert status in Data Structures and Algorithms at Coding Ninjas.',
            },
        ],
    },
    {
        category: 'Tech Talks | Conferences',
        type: 'Event',
        items: [
            {
                title: 'JavaScript Summit - SpeakJS',
                link: '/',
                description: 'Captivated the audience at JavaScript Summit 2022 with insights into JavaScript development.',
            },
            {
                title: 'Machine Learning Conference 2023',
                link: '/',
                description: 'Distinguished speaker at Machine Learning Conference 2023, exploring ML applications.',
            },
        ],
    },
    {
        category: 'YouTube',
        type: 'Video',
        items: [
            {
                title: 'Personal Finance Tracker YouTube',
                link: 'https://youtu.be/z0R1I4alEhA',
                description: 'Engaging video guiding viewers through creating a personalized finance tracker.',
            },
            {
                title: 'One Shot Tailwind CSS with Landing Page',
                link: 'https://youtu.be/EWVtxMM6V04',
                description: 'One-shot tutorial on crafting a stunning landing page using Tailwind CSS.',
            },
        ],
    },
];



const iconNames = [
    FaReact, SiTailwindcss, IoLogoJavascript, BiLogoTypescript, TbBrandNextjs, FaBootstrap, FaNode, FaPython, FaHtml5, FaCss3, FaPython, FaSass, FaDocker
];

const page = () => {

    return (<div className='md:pt-16 pt-0 space-y-10'>
        <div>
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl sm:leading-[60px]">
                    My Skills, Certifications, and YouTube Channel
                </h1>
                <p className="mt-6 text-base text-zinc-400">
                    As a technology enthusiast, I have developed expertise in various tools and frameworks. Here are some of my key skills, certifications, and contributions on YouTube:
                </p>
            </div>
        </div>

        <div className='flex justify-center items-center text-white overflow-x-hidden py-8'>
            <div className='2xl:w-[1380px] w-full h-[150px] flex justify-center items-center'>
                <div className="logos flex overflow-hidden whitespace-nowrap relative">
                    <div className="logos-slide flex space-x-14">
                        {iconNames.map((IconName, i) => {
                            return <div key={i}><IconName size={80} /></div>;
                        })}
                    </div>
                    <div className="logos-slide flex space-x-14">
                        {iconNames.map((IconName, i) => {
                            return <div key={i}><IconName size={80} /></div>;
                        })}
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="flex max-w-3xl flex-col space-y-16">
                {data.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <div className="md:border-l md:pl-6 md:border-zinc-700/40">
                            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                                <h2 className="sm:text-sm text-4xl font-semibold text-zinc-100">{category.category}</h2>
                                <div className="md:col-span-3">
                                    <div className="space-y-16">
                                        {category.items.map((item, index) => (
                                            <article key={index} className="group relative flex flex-col items-start">
                                                <h3 className="text-base font-semibold tracking-tight text-zinc-100">
                                                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                                                    <Link href={item.link}>
                                                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                                        <span className="relative z-10">{item.title}</span>
                                                    </Link>
                                                </h3>
                                                <p className="relative z-10 mt-2 text-sm text-zinc-400">{item.description}</p>
                                                <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500 space-x-2">
                                                    {category.type === "Certificate" && <div className='flex space-x-2 items-center'><div>Download Certificate</div> <FaArrowRight /></div>}
                                                    {category.type === "Video" && <div className='flex space-x-2 items-center'><div>Watch Video</div> <FaArrowRight /></div>}
                                                    {category.type === "Recognition" && (item.link && <div className='flex space-x-2 items-center'><div>Visit website</div> <FaArrowRight /> </div>)}
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};
export default page