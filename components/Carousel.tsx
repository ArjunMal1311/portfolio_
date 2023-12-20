import Image from 'next/image'
import React from 'react'

const Carousel = () => {
    return (
        <div className='pt-10 absolute left-0 right-0 overflow-hidden'>
            <div className='-my-4 flex justify-center gap-8 py-4 w-full'>
                <div className='relative w-44 sm:h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 h-44 sm:rounded-2xl rotate-2'>
                    <Image src={"/b1.jpeg"} alt='' width={512} height={512} />
                </div>
                <div className='relative w-44 sm:h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 h-44 sm:rounded-2xl -rotate-2'>
                    <Image src={"/b2.jpeg"} alt='' width={512} height={512} />
                </div>
                <div className='relative w-44 sm:h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 h-44 sm:rounded-2xl rotate-2'>
                    <Image src={"/b3.jpeg"} alt='' width={512} height={512} />
                </div>
                <div className='relative w-44 sm:h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 h-44 sm:rounded-2xl rotate-4'>
                    <Image src={"/b4.jpeg"} alt='' width={512} height={512} />
                </div>
                <div className='relative w-44 sm:h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 h-44 sm:rounded-2xl -rotate-3'>
                    <Image src={"/b2.jpeg"} alt='' width={512} height={512} />
                </div>
            </div>
        </div>
    )
}

export default Carousel