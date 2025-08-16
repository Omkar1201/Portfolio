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
					className='text-white text-opacity-80 font-thin'
				>
					<div className='my-6'>
						My name is Omkar Salunkhe.
					</div>
					I have completed my graduation in Computer Engineering and have a strong passion for web development and problem-solving.
					I specialize in building responsive and dynamic web applications using modern technologies.
					With a focus on both front-end and back-end development, I am constantly learning and improving to deliver efficient and scalable solutions.
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
				{/* Web Development */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex border workdiv rounded-xl border-white border-opacity-10 bg-white bg-opacity-5 gap-4 w-[30rem] p-8'
				>
					<div className='text-[2rem] text-cyan-500 my-2'><FaReact /></div>
					<div>
						<div className='text-[1.2rem] font-semibold'>Web Development</div>
						<div className='text-opacity-60 text-white'>
							Skilled in building responsive and user-friendly web applications using
							HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Node.js, Express.js, MongoDB, and MySQL.
						</div>
					</div>
				</motion.div>

				{/* Tools & Platforms */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex border workdiv border-white rounded-xl border-opacity-10 bg-white bg-opacity-5 gap-4 w-[30rem] p-8'
				>
					<div className='text-[1.8rem] my-2 text-cyan-500'><BsDatabaseFillGear /></div>
					<div>
						<div className='text-[1.2rem] font-semibold'>Tools & Platforms</div>
						<div className='text-opacity-60 text-white'>
							Experienced in version control and API testing with Git, GitHub, and Postman.
							Familiar with modern deployment platforms like Netlify and Vercel for hosting applications.
						</div>
					</div>
				</motion.div>

				{/* Programming Languages */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex border workdiv border-white rounded-xl border-opacity-10 bg-white bg-opacity-5 gap-4 w-[30rem] p-8'
				>
					<div className='text-[2rem] text-cyan-500 my-1'><BiCodeBlock /></div>
					<div>
						<div className='text-[1.2rem] font-semibold'>Programming Languages</div>
						<div className='text-opacity-60 text-white'>
							Strong foundation in C++ and Python with deep understanding of Object-Oriented Programming (OOP).
							basic knowledge of Java and JavaScript for versatile development.
						</div>
					</div>
				</motion.div>

				{/* Problem Solving */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex border workdiv border-white rounded-xl border-opacity-10 bg-white bg-opacity-5 gap-4 w-[30rem] p-8'
				>
					<div className='text-[2rem] my-1 text-cyan-500'><LiaLaptopCodeSolid /></div>
					<div>
						<div className='text-[1.2rem] font-semibold'>Problem Solving</div>
						<div className='text-opacity-60 text-white'>
							Proficient in Data Structures and Algorithms with strong analytical skills;
							solved 350+ problems on LeetCode and 100+ on GeeksforGeeks.
						</div>
					</div>
				</motion.div>
			</div>


			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className='text-[1.5rem] my-4'
				style={{ fontFamily: 'Ms Madi' }}
			>
				-Omkar Salunkhe
			</motion.div>
		</div>
	);
}

export default About;
