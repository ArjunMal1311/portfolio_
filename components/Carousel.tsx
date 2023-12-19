import React from 'react'

const Carousel = () => {
    return (
        <div className='pt-10 overflow-hidden'>
            <div className='-my-4 flex justify-center gap-8 py-4 sm:w-full'>
                <div className='relative w-44 h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'></div>
                <div className='relative w-44 h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2'></div>
                <div className='relative w-44 h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'></div>
                <div className='relative w-44 h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-4'></div>
                <div className='relative w-44 h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-3'></div>
            </div>
        </div>
    )
}

export default Carousel