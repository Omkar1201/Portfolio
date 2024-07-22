import React from 'react'
import myphoto from '../images/myphoto.jpg'
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaCakeCandles } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
export default function Me() {
    return (
        <div className='py-10 px-5  h-fit w-[23rem] border border-opacity-10 flex flex-col items-center bg-opacity-10 bg-white rounded-xl border-white'>
            <div className=' '>
                <img alt='Profile' src={myphoto} className=' w-[8rem] border border-opacity-10 rounded-full' />
            </div>
            <div className='mt-20'>
                <h2 className='text-white text-2xl text-center font-semibold'>
                    Omkar Salunkhe...
                </h2>
            </div>
            <div className='mt-4 text-[0.8rem] font-thin text-white px-4 py-1 rounded-lg w-fit bg-white bg-opacity-5'>
                Full-Stack developer
            </div>
            <div className='border m-10 w-full border-white border-opacity-5 '></div>

            <div className='text-white flex flex-col gap-10'>
                <div className='flex items-center gap-5'>
                    <div className='text-cyan-500'><MdEmail size={24}/></div>
                    <div className='text-[0.9rem] '>
                        <div className=' text-opacity-50 text-white'>Email</div>
                        <div className='  font-thin text-white'>omkarsalunkhe3597@gmail.com</div>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className=' text-cyan-500 to-black'><FaCakeCandles className='' size={24}/></div>
                    <div className='text-[0.9rem]'>
                        <div className=' text-opacity-50 text-white'>Birthday</div>
                        <div className='  font-thin text-white'>12th Jan, 2004</div>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='text-cyan-500'><IoLocationSharp size={24}/></div>
                    <div className='text-[0.9rem]'>
                        <div className=' text-opacity-50 text-white'>Location</div>
                        <div className='  font-thin text-white'>Pune, Maharashtra</div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-4 flex-wrap gap-2 mt-10 justify-center">
                <a href='https://leetcode.com/omkarsalunkhe3597/' target='_blank' rel="noreferrer" className=" text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500">
                    <SiLeetcode size={20} />
                </a>
                <a href='https://github.com/Omkar1201' target='_blank' rel="noreferrer" className="text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500   ">
                    <FaGithub size={20} />
                </a>
                <a href='https://www.linkedin.com/in/omkar-salunkhe-28784b214/' target='_blank' rel="noreferrer" className="text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://x.com/Omkar11239862" target='_blank' rel="noreferrer" className="text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500">
                    <FaTwitter size={20} />
                </a>
                <a href='https://www.instagram.com/omkar_salunkhe12/' target='_blank' rel="noreferrer" className="text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500">
                    <FaInstagram size={20} />
                </a>
            </div>
        </div>
    )
}
