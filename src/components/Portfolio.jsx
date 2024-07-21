import React from 'react'
import { FaGithub } from 'react-icons/fa';
import knowledge from '../images/knowledgenest.jpg'
import newsi from '../images/newsi.jpg'
import gifimg from '../images/gif.png'
import { FiEye } from "react-icons/fi";
export default function Portfolio() {
    return (
        <div>
            <div>
                <h2 className='text-[1.8rem] font-semibold'>Portfolio</h2>
                <div className='border-[0.15rem] rounded-full border-cyan-500 w-10 my-2'></div>
            </div>
            <div className='mt-10 gap-10 flex justify-around flex-wrap'>
                <div className='flex flex-col gap-2 w-[22rem]  border border-white border-opacity-30 '>
                    <a href='https://the-knowledge-nest-1201.vercel.app/' rel='noreferrer' target='_blank' className=' h-[14rem] overflow-hidden relative group cursor-pointer'>
                        <img className='p-1 duration-[0.5s] group-hover:scale-105' src={knowledge} alt='knowledgenest_photo' />
                        <div className='text-[1.5rem] absolute top-[40%] group-hover:opacity-100 z-10 bg-black p-2 right-[44%] rounded-xl opacity-0 text-cyan-500'><FiEye /></div>
                    </a>

                    <a href='https://github.com/Omkar1201/The_Knowledge_nest_Frontend' target='_blank' rel="noreferrer" className='flex hover:text-opacity-100 text-white text-opacity-70 duration-[0.4s] items-center gap-2 px-2 mt-2'>
                        <div className='text-[1.5rem]'><FaGithub /></div>
                        <div className='font-semibold'>
                            The Knowledge Nest
                        </div>
                    </a>
                    <div className='text-white px-2 text-opacity-80 font-thin'>
                        Developed a dynamic blog website for publishing blogs and uploading images.
                        Implemented user engagement features like likes and comments.
                        Demonstrated full-stack development proficiency.
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-[22rem] border border-white border-opacity-30 '>
                    <a href='https://newsi.vercel.app/' rel='noreferrer' target='_blank' className=' h-[14rem] overflow-hidden relative group cursor-pointer'>
                        <img className='p-1 duration-[0.5s] group-hover:scale-105' src={newsi} alt="newsi_photo" />
                        <div className='text-[1.5rem] absolute top-[40%] group-hover:opacity-100 z-10 bg-black p-2 right-[44%] rounded-xl opacity-0 text-cyan-500'><FiEye /></div>
                    </a>

                    <a href='https://github.com/Omkar1201/News_website' target='_blank' rel="noreferrer" className='flex px-2 hover:text-opacity-100 text-white text-opacity-70 duration-[0.4s] items-center gap-2 my-2'>
                        <div className='text-[1.5rem]'><FaGithub /></div>
                        <div className='font-semibold'>
                            Newsi
                        </div>
                    </a>
                    <div className='font-thin text-white text-opacity-80 px-2'>
                        Created a user-friendly news application using React.js, Tailwind
                        Implemented real-time news updates from API
                        Utilized RESTful APIs to fetch and display news articles
                        Enabled users to search various news based their interests.
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-[22rem] border border-white border-opacity-30 '>
                    <a href='https://omkar1201.github.io/Random_gif/' rel='noreferrer' target='_blank' className=' h-[14rem] overflow-hidden relative group cursor-pointer'>
                        <img className='p-1 duration-[0.5s] group-hover:scale-105' src={gifimg} alt="newsi_photo" />
                        <div className='text-[1.5rem] absolute top-[40%] group-hover:opacity-100 z-10 bg-black p-2 right-[44%] rounded-xl opacity-0 text-cyan-500'><FiEye /></div>
                    </a>

                    <a href='https://github.com/Omkar1201/Random_gif' target='_blank' rel="noreferrer" className='flex px-2 hover:text-opacity-100 text-white text-opacity-70 duration-[0.4s] items-center gap-2 my-2'>
                        <div className='text-[1.5rem]'><FaGithub /></div>
                        <div className=' font-semibold'>
                            Random Gif generator
                        </div>
                    </a>
                    <div className='font-thin text-white text-opacity-80 px-2'>
                        Developed a dynamic Random GIF Generator website with features for discovering random GIFs and searching for specific ones, offering a seamless and intuitive user experience.
                    </div>
                </div>
            </div>
        </div>
    )
}
