import Image from 'next/image'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Introduction = () => {
    return (
        <div className='space-y-6'>
            <Image src={"/dp.jpeg"} className='rounded-full object-cover bg-zinc-800 h-16 w-16' alt='' width={512} height={512} />

            <div className='max-w-2xl'>
                <div className='text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl'>
                    Software designer, founder, and amateur astronaut.
                </div>
            </div>

            <div className='max-w-3xl'>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
            </div>

            <div className='flex space-x-6'>
                <div className='transition-all duration-500 cursor-pointer hover:text-zinc-600 text-zinc-400'><FaTwitter size={22} /></div>
                <div className='transition-all duration-500 cursor-pointer hover:text-zinc-600 text-zinc-400'><FaInstagram size={22} /></div>
                <div className='transition-all duration-500 cursor-pointer hover:text-zinc-600 text-zinc-400'><FaGithub size={22} /></div>
                <div className='transition-all duration-500 cursor-pointer hover:text-zinc-600 text-zinc-400'><FaLinkedin size={22} /></div>
            </div>
        </div>
    )
}

export default Introduction