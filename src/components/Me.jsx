import React, { useState } from 'react';
import myphoto from '../images/myphoto.jpg';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import './Me.css';

export default function Me() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`relative upperme py-10 mb-5 px-5 h-fit w-[23rem] border border-opacity-10 flex flex-col items-center bg-opacity-10 bg-white rounded-xl border-white ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className='flex w-full profiledirection flex-col items-center'>
                <div className=''>
                    <img alt='Profile' src={myphoto} className='myphoto w-[8rem] border border-opacity-10 rounded-full' />
                </div>
                <div className='mt-16 changemargin flex flex-col items-center'>
                    <h2 className='text-white changetextsize text-2xl text-center font-semibold'>
                        Omkar Salunkhe
                    </h2>
                    <div className='mt-4 text-[0.8rem] font-thin text-white px-4 py-1 rounded-lg w-fit bg-white bg-opacity-5'>
                        Full-Stack developer
                    </div>
                </div>
            </div>
            <div className='line border m-10 w-full border-white border-opacity-5 '></div>
            <div className='contact text-white flex flex-col gap-10'>
                <div className='flex items-center gap-5'>
                    <div className='text-cyan-500'><MdEmail size={24} /></div>
                    <div className='text-[0.9rem]'>
                        <div className='text-opacity-50 text-white'>Email</div>
                        <div className='font-thin text-white'>omkarsalunkhe3597@gmail.com</div>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='text-cyan-500'><FaGraduationCap size={24} /></div>
                    <div className='text-[0.9rem]'>
                        <div className='text-opacity-50 text-white'>Education</div>
                        <div className='font-thin text-white'>B.E. Computer Engineering</div>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='text-cyan-500'><IoLocationSharp size={24} /></div>
                    <div className='text-[0.9rem]'>
                        <div className='text-opacity-50 text-white'>Location</div>
                        <div className='font-thin text-white'>Pune, Maharashtra</div>
                    </div>
                </div>
            </div>
            <div className="socials flex space-x-4 flex-wrap gap-2 mt-10 ">
                <a href='https://leetcode.com/omkarsalunkhe3597/' target='_blank' rel="noreferrer" className="text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500">
                    <SiLeetcode size={24} />
                </a>
                <a href='https://github.com/Omkar1201' target='_blank' rel="noreferrer" className="text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500">
                    <FaGithub size={24} />
                </a>
                <a href='https://www.linkedin.com/in/omkar-salunkhe-28784b214/' target='_blank' rel="noreferrer" className="text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/Omkar11239862" target='_blank' rel="noreferrer" className="text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500">
                    <FaTwitter size={24} />
                </a>
                <a href='https://www.instagram.com/omkar_salunkhe12/' target='_blank' rel="noreferrer" className="text-white text-opacity-40 duration-[0.5s] transition-all hover:text-cyan-500">
                    <FaInstagram size={24} />
                </a>
            </div>
            <button onClick={toggleExpand} className=" absolute profilebtn hidden top-0 right-0 px-4 py-2 text-[0.9rem] bg-black text-cyan-500 rounded-bl-xl rounded-tr-xl">
                {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
            </button>
        </div>
    );
}
