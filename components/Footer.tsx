import React from 'react'

const Footer = () => {
    return (
        <div className='border-t pb-16 pt-10 border-zinc-700/40 flex sm:justify-between sm:flex-row flex-col space-y-2 justify-center items-center'>
            <div className='flex text-[#7f7f7f] space-x-3 font-semibold text-sm'>
                <div className='hover:text-white transition-all duration-300  cursor-pointer'>About</div>
                <div className='hover:text-white transition-all duration-300  cursor-pointer'>Skills</div>
                <div className='hover:text-white transition-all duration-300  cursor-pointer'>Projects</div>
                <div className='hover:text-white transition-all duration-300  cursor-pointer'>Articles</div>
            </div>

            <div className='text-sm font-semibold text-[#7d7d7d]'>Arjun Malhotra</div>
        </div>
    )
}

export default Footer