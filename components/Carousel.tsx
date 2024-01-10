import Image from 'next/image'
import React from 'react'
import { Homenaje } from 'next/font/google'
const HomenajeFont = Homenaje({ subsets: ["latin"], weight: "400" })

const Carousel = () => {
    return (
        <div className='pt-10 absolute left-0 right-0 sm:overflow-hidden overflow-x-scroll overflow-y-hidden'>
            <div className='-my-4 flex justify-center gap-8 py-4 sm:w-full'>
                <div className='relative h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 w-72 sm:rounded-2xl sm:rotate-2'>
                    <div className=' flex justify-center items-center w-full h-full'>
                        <div className="loader">
                            <span></span>
                        </div>
                    </div>
                </div>



                <div className='relative h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 w-72 sm:rounded-2xl sm:-rotate-2'>
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className="loader-Square"></div>
                    </div>
                </div>



                <div className='opacity-20'>
                    <div className="float-left w-full min-w-[100px] min-h-[100px] orbit">

                        <ul className="h-[40em] list-none text-[1.3em] orbit-wrap">

                            <li className="orbit-center">
                                <i className="orbit-center__icon fa fa-code"></i>
                            </li>

                            <li>
                                <ul className="ring-c-0">
                                    <li><i className="orbit-icon fa fa-git"></i></li>
                                    <li><i className="orbit-icon fa fa-free-code-camp"></i></li>
                                    <li><i className="orbit-icon fa fa-meetup"></i></li>
                                    <li><i className="orbit-icon fa fa-codepen"></i></li>
                                </ul>
                            </li>

                            <li>
                                <ul className="ring-c-1">
                                    <li><i className="orbit-icon fa fa-podcast"></i></li>
                                    <li><i className="orbit-icon fa fa-css3"></i></li>
                                    <li><i className="orbit-icon fa fa-html5"></i></li>
                                </ul>
                            </li>
                            <li>
                                <ul className="ring-c-2">
                                    <li><i className="orbit-icon fa fa-windows"></i></li>
                                    <li><i className="orbit-icon fa fa-safari"></i></li>
                                    <li><i className="orbit-icon fa fa-edge"></i></li>
                                    <li><i className="orbit-icon fa fa-linux"></i></li>
                                    <li><i className="orbit-icon fa fa-apple"></i></li>
                                    <li><i className="orbit-icon fa fa-chrome"></i></li>
                                    <li><i className="orbit-icon fa fa-android"></i></li>
                                    <li><i className="orbit-icon fa fa-firefox"></i></li>
                                </ul>
                            </li>
                            <li>
                                <ul className="ring-c-3">
                                    <li><i className="orbit-icon fa fa-coffee"></i></li>
                                    <li><i className="orbit-icon fa fa-terminal"></i></li>
                                    <li><i className="orbit-icon fa fa-heart-o"></i></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>


                <div className='relative h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 w-72 sm:rounded-2xl rotate-4'>
                    <div className='flex justify-center items-center w-full h-full'>
                        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
                            <div className="wheel"></div>
                            <div className="hamster">
                                <div className="hamster__body">
                                    <div className="hamster__head">
                                        <div className="hamster__ear"></div>
                                        <div className="hamster__eye"></div>
                                        <div className="hamster__nose"></div>
                                    </div>
                                    <div className="hamster__limb hamster__limb--fr"></div>
                                    <div className="hamster__limb hamster__limb--fl"></div>
                                    <div className="hamster__limb hamster__limb--br"></div>
                                    <div className="hamster__limb hamster__limb--bl"></div>
                                    <div className="hamster__tail"></div>
                                </div>
                            </div>
                            <div className="spoke"></div>
                        </div>
                    </div>
                </div>


                <div className='relative h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 w-72 sm:rounded-2xl sm:-rotate-3'>
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className="loader-new">
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                            <div className="loader-square"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Carousel