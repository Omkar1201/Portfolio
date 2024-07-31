import React from 'react';
import { motion } from 'framer-motion';
import { BsDatabaseFillGear } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaReact } from "react-icons/fa6";
import { BiCodeBlock } from "react-icons/bi";

import './About.css'
const About = () => {
	return (
		<div className='text-white'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className='text-[1.8rem] font-semibold'>About me</h2>
				<div className='border-[0.15rem] rounded-full border-cyan-500 w-10 my-2'></div>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-white text-opacity-80 font-thin'>
					<div className='my-6'>
						My name is Omkar Salunkhe & I am a Full-Stack Developer
					</div>
					I am an engineering student specializing in Computer Engineering with a strong passion for web development and Problem Solving. My expertise lies in creating responsive and dynamic web applications using modern technologies. I enjoy solving complex problems and am constantly seeking opportunities to learn and improve my skills in front-end, back-end development.
				</motion.div>
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='text-center my-6 text-[1.5rem] font-semibold'
			>
				My Expertise
			</motion.h2>

			<div className='flex flex-wrap justify-center gap-6'>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex border workdiv rounded-xl border-white border-opacity-10 bg-white bg-opacity-5 gap-4 w-[22rem] p-8 '
				>
					<div className='text-[2rem] text-cyan-500 my-2'><FaReact /></div>
					<div className=''>
						<div className='text-[1.2rem] font-semibold'>Frontend</div>
						<div className='text-opacity-60 text-white'>
							HTML, CSS, JavaScript,
							ReactJS, Tailwind CSS
							Creative & Responsive Design
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex border workdiv border-white rounded-xl border-opacity-10 bg-white bg-opacity-5 gap-4 w-[22rem] p-8'
				>
					<div className='text-[1.8rem] my-2 text-cyan-500'><BsDatabaseFillGear /></div>
					<div className=''>
						<div className='text-[1.2rem] font-semibold'>Backend</div>
						<div className='text-opacity-60 text-white'>
							Programming & Scripting Languages
							MongoDB, MySQL, ExpressJs
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex border workdiv border-white rounded-xl border-opacity-10 bg-white bg-opacity-5 gap-4 w-[22rem] p-8'
				>
					<div className='text-[2rem] text-cyan-500 my-1'><BiCodeBlock /></div>
					<div className=''>
						<div className='text-[1.2rem] font-semibold'>MERN Full-Stack</div>
						<div className='text-opacity-60 text-white'>
							Front-end Technology, Github
							Backend Languages
							Databases/ Web Storage
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex border workdiv border-white rounded-xl border-opacity-10 bg-white bg-opacity-5 gap-4 w-[22rem] p-8'
				>
					<div className='text-[2rem] my-1 text-cyan-500'><LiaLaptopCodeSolid /></div>
					<div className=''>
						<div className='text-[1.2rem] font-semibold'>Problem solving</div>
						<div className='text-opacity-60 text-white'>
							Proficient in Data Structures and Algorithms, with strong analytical and problem-solving skills.
						</div>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className='text-[1.5rem] my-4'
				style={{ fontFamily: 'Ms Madi'}}
			>
				-Omkar Salunkhe
			</motion.div>
		</div>
	);
}

export default About;
