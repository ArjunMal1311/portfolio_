import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='border-t pb-16 pt-10 border-zinc-700/40 flex sm:justify-between sm:flex-row flex-col space-y-2 justify-center items-center'>
            <div className='flex text-[#7f7f7f] space-x-3 font-semibold text-sm'>
                <Link href={"/"} className='hover:text-white transition-all duration-300  cursor-pointer'>About</Link>
                <Link href={"/skills"} className='hover:text-white transition-all duration-300  cursor-pointer'>Skills</Link>
                <Link href={"/projects"} className='hover:text-white transition-all duration-300  cursor-pointer'>Projects</Link>
                <Link href={"/articles"} className='hover:text-white transition-all duration-300  cursor-pointer'>Articles</Link>
            </div>

            <div className='text-sm font-semibold text-[#7d7d7d]'>Arjun Malhotra</div>
        </div>
    )
}

export default Footer