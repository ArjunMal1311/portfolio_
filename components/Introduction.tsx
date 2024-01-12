import Image from 'next/image'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Dancing_Script } from 'next/font/google'
import Link from 'next/link'
const Dancing_Script_Font = Dancing_Script({ weight: "400", subsets: [] })

const Introduction = () => {
    return (
        <div className='space-y-8'>
            <Image src={"/dp.png"} className='rounded-full object-cover bg-zinc-800 h-16 w-16' alt='' width={512} height={512} />

            <div className={`${Dancing_Script_Font.className} text-white sm:text-6xl text-4xl`}>Arjun Malhotra</div>

            {/* <h1 className='head_introduction text-xl flex'>
                Dive Into
                <span className="slider">
                    <span className="slider__word">Ideas</span>
                    <span className="slider__word">Tech</span>
                    <span className="slider__word">Art</span>
                </span>
            </h1> */}
            <div className='max-w-2xl'>
                <div className='text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl sm:leading-[60px]'>
                    Software Engineer, Web Developer, Machine Learning and many more!
                </div>
            </div>

            <div className='max-w-3xl'>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Hello! I'm Arjun Malhotra, an undergrad at Vellore Institute of Technology. Passionate about programming and problem-solving, my tech stack includes React, Next.js, Node.js, MongoDB, TypeScript, and Prisma. Proficient in machine learning with Python, I'm actively seeking opportunities in software engineering. Let's connect and collaborate on innovative projects!</p>
            </div>

            <div className='flex space-x-6'>
                <Link href={"https://github.com/ArjunMal1311/"} className='transition-all duration-500 cursor-pointer hover:text-zinc-600 text-zinc-400'><FaGithub size={22} /></Link>
                <Link href={"https://www.linkedin.com/in/arjun-malhotra-51967523b/"} className='transition-all duration-500 cursor-pointer hover:text-zinc-600 text-zinc-400'><FaLinkedin size={22} /></Link>
                <Link href={"https://www.instagram.com/_arjun_malhotra_/"} className='transition-all duration-500 cursor-pointer hover:text-zinc-600 text-zinc-400'><FaInstagram size={22} /></Link>
            </div>
        </div>
    )
}

export default Introduction