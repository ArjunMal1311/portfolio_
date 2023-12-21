import Image from 'next/image'
import React from 'react'
import { Homenaje } from 'next/font/google'
const HomenajeFont = Homenaje({ subsets: ["latin"], weight: "400" })

const Carousel = () => {
    return (
        <div className='pt-10 sm:absolute left-0 right-0 overflow-hidden'>
            <div className='-my-4 flex justify-center gap-8 py-4 w-full flex-col sm:flex-row'>
                <div className='relative w-full sm:h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 h-44 sm:rounded-2xl sm:rotate-2'>
                    <div className="card-2">
                        <div className="top">
                            <p className="title">script.py</p>
                            <span className="buttons">
                                <button className="minimize">
                                    <svg viewBox="0 0 10.2 1" y="0px" x="0px"><rect height="1" width="10.2" y="50%" x="0"></rect></svg>
                                </button>
                                <button className="maximize">
                                    <svg viewBox="0 0 10 10"><path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path></svg>
                                </button>
                                <button className="close">
                                    <svg viewBox="0 0 10 10"><polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></polygon></svg>
                                </button>
                            </span>

                        </div>
                        <div className="topfix">
                        </div>
                        <hr />
                        <div className="content">
                            <p>
                                <code>
                                    <i className="c1">import</i> os, sys<br />
                                    <b className="c2">os</b>.system<b className="c3">(</b><b className="c4">"title test script"</b><b className="c3">)</b><br />
                                    <b className="c2">print</b><b className="c3">(</b><b className="c4">"Hello UIVERSE.io!"</b><b className="c3">)</b><br />
                                    <b className="c2">sys</b>.exit<b className="c3">(</b><b className="c3">)</b><br />
                                    <i className="comment">#this is a comment.</i>
                                </code>
                            </p>
                        </div>
                    </div>
                </div>



                <div className='relative w-full sm:h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 h-44 sm:rounded-2xl sm:-rotate-2'>
                    <div className="w-full h-full">
                        <div className="h-[30px] flex items-center p-[0_8px] box-border rounded-tl-[5px] rounded-tr-[5px] bg-[#212121] justify-between">
                            <div className="flex items-center">
                                <button className="flex justify-center items-center p-0 mr-[5px] text-[8px] h-[12px] w-[12px] box-border border-none rounded-[100%] bg-[#ee411a] btn"></button>
                                <button className="flex justify-center items-center p-0 mr-[5px] text-[8px] h-[12px] w-[12px] box-border border-none rounded-[100%] btn"></button>
                                <button className="flex justify-center items-center p-0 mr-[5px] text-[8px] h-[12px] w-[12px] box-border border-none rounded-[100%] btn"></button>
                            </div>
                            <p className="text-[#d5d0ce] ml-[6px] text-[14px] leading-4">arjun@admin: ~</p>
                            <div className="border-[1px] border-solid border-[#FFF] text-[#FFF] p-[0px_6px] rounded-full border-b-none cursor-pointer">
                                +
                            </div>
                        </div>
                        <div className=" h-[calc(100%-30px)] pt-2 mt-[-1px] text-[12px] rounded-bl-[5px] rounded-br-[5px]">
                            <div className="flex">
                                <span className="ml-[4px] text-[#1eff8e]">arjun@admin:</span>
                                <span className="ml-[4px] text-[#4878c0]">~</span>
                                <span className="ml-[4px] text-[#dddddd]">$</span>
                                <span className='text-white'>echo "Hello, World!" | lolcat</span>
                                <span className="block h-[14px] w-[5px] ml-[10px] terminal_cursor"></span>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='relative w-full sm:h-80 flex-none overflow-hidden rounded-xl sm:w-72 h-44 sm:rounded-2xl rotate-2'>
                    <div className="card-react">
                        <svg className="App-logo" viewBox="0 0 841.9 595.3" xmlns="http://www.w3.org/2000/svg"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"></path><circle r="45.7" cy="296.5" cx="420.9"></circle><path d="M520.5 78.1z"></path></g></svg>
                    </div>
                </div>


                <div className='relative w-full sm:h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 h-44 sm:rounded-2xl sm:rotate-4'>
                    <aside className=" text-white p-6 rounded-lg w-full h-full max-w-lg font-mono">
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2 text-red-500">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <p className="text-sm">bash</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-green-400">$ npm install next</p>
                            <p className="text-white">+ next@10.2.3</p>
                            <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
                            <p className="text-green-400">$</p>
                        </div>
                    </aside>
                </div>


                <div className='relative w-full sm:h-80 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 h-44 sm:rounded-2xl sm:-rotate-2'>
                    <div className="card">
                        <div className="header">
                            <div className="btn"></div>
                            <div className="btn"></div>
                            <div className="btn"></div>
                            <div className="active">JS console...</div>
                        </div>
                        <div className="content">
                            <div className="req">
                                console.log(a<span>*</span>b);
                            </div>
                            <div className="res error">
                                <span>ReferenceError</span>{" <span>a is not defined </span>"}
                            </div>
                            <div className="req">
                                console.log(2<span>*</span>3);
                            </div>
                            <div className="res">
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel