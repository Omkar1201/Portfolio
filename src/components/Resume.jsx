import React from 'react'
import { PiBookOpenTextThin } from "react-icons/pi";
import { BiCodeBlock } from "react-icons/bi";
import { RxDownload } from "react-icons/rx";
import { motion } from 'framer-motion';
import express from '../images/express-removebg-preview.png'
import './Resume.css'
export default function Resume() {
    return (
        <div className=''>
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='text-[1.8rem] font-semibold'
            >
                Resume
                <div className='border-[0.15rem] rounded-full border-cyan-500 w-10 my-2'></div>
            </motion.h2>
            <div className='flex gap-4 my-4'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className=' h-fit text-[1.8rem] my-2 text-cyan-500 border p-2 rounded-xl border-white border-opacity-20 bg-black bg-opacity-50'
                >
                    <PiBookOpenTextThin />
                </motion.div>
                <div className='flex flex-col gap-5 my-3 relative'>
                    <motion.h2
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 0.6 }}
                        className=' text-[1.4rem] font-semibold'
                    >
                        Education
                    </motion.h2>
                    <div className='flex gap-10'>

                        <motion.div 
                        
                        className='border verticalLine border-opacity-10 border-white h-[15rem] w-fit'></motion.div>
                        <div className='mt-4 flex flex-col gap-6'>
                            <motion.div
                            // initial={{ opacity: 0, scale: 0.5 }}
                            // animate={{ opacity: 1, scale: 1 }}
                            // transition={{ duration: 0.2, delay: 0.2 }}
                            >
                                <div className='font-semibold'>
                                    Dr. D.Y. Patil institute of tchnology pimpri pune.
                                    <div>Computer Engineering</div>
                                </div>
                                <div className='text-cyan-500'>
                                    2021-2025
                                </div>
                                <div className='font-thin'>CGPA - 9.09</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -120 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className='font-semibold'>
                                    Maharaja sayajirao junior college satara
                                </div>
                                <div className='text-cyan-500'>
                                    2020-2021
                                </div>
                                <div className='font-thin'>HSC - 90.83%</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <div className='font-semibold'>
                                    Shri Chhatrapati shivaji vidyalaya apshinge military
                                </div>
                                <div className='text-cyan-500'>
                                    2018-2019
                                </div>
                                <div className='font-thin'>SSC - 90.20%</div>
                            </motion.div>
                        </div>
                        <motion.div
                            // initial={{ opacity: 0, y: -120 }}
                            // animate={{ opacity: 1, y: 0 }}
                            // transition={{ duration: 4, delay: 0.2 }}
                            className=' top-[4.5rem] left-[-0.55rem] absolute bg-white bg-opacity-20 flex justify-center items-center rounded-full'><div className='rounded-full bg-cyan-500 p-[0.3rem] m-[0.3rem]'></div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -120 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='secondPoint top-[12rem] left-[-0.55rem] absolute bg-white bg-opacity-20 flex justify-center items-center rounded-full'><div className='rounded-full bg-cyan-500 p-[0.3rem] m-[0.3rem]'></div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className='thirdPoint top-[18rem] left-[-0.55rem] absolute bg-white bg-opacity-20 flex justify-center items-center rounded-full'><div className='rounded-full bg-cyan-500 p-[0.3rem] m-[0.3rem]'></div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div>
                <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.6 }}
                className='flex items-center gap-5' >
                    <div className=' h-fit w-fit text-[1.8rem] my-2 text-cyan-500 border p-2 rounded-xl border-white border-opacity-20 bg-black bg-opacity-50'><BiCodeBlock /></div>
                    <h2 className=' text-[1.4rem] font-semibold'>My Skills</h2>
                </motion.div>
                <div>
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='flex justify-around flex-wrap gap-2 font-thin'>
                        <div className='flex flex-col items-center gap-2'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" />
                            <div>C++</div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" />
                            <div>MySQL</div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
                            <div>HTML5</div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                            <div>CSS</div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
                            <div>Javascript</div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
                            <div>ReactJs</div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img className='w-[4.65rem]' src={express} alt="express" />
                            <div>ExpressJs</div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" />
                            <div>Tailwind CSS</div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
                            <div>Git</div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center mt-10 font-semibold ]'>
                <a href='https://drive.google.com/file/d/1oOvOMhmp6wLldRE4EcnixZus74dnxOlz/view?usp=sharing' rel='noreferrer' target='_blank' className='border flex text-cyan-500 duration-[0.2s] border-white border-opacity-20 bg-white bg-opacity-5 active:bg-opacity-0 hover:text-cyan-300 items-center gap-2 px-6 py-2 rounded-lg'>
                    <div className='text-[1.2rem]'>
                        <RxDownload />
                    </div>
                    Download CV
                </a>
            </div>
        </div >
    )
}
