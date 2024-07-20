import React from 'react'
import { BsDatabaseFillGear } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaReact } from "react-icons/fa6";
import { BiCodeBlock } from "react-icons/bi";
export default function About() {
	return (
		<div className='text-white '>
			<div>
				<h2 className='text-[1.8rem] font-semibold'>About me</h2>
				<div className='border-2 border-cyan-400 w-10 my-2'></div>
				<div className='text-white text-opacity-60 font-thin'>
					<div className='my-6'>
						My name is Omkar Salunkhe & I am a Full-Stack Developer
					</div>

					“To begin with I grew up in Satara city and graduated from Dr. D.Y. Patil Institute of technology pimpri In Computer. Writing has always been my passion and the works your writers have turned out have always been informative and impressive. I believe it would be a great learning qualification for me if I am given the opportunity to explore my skills. I am now looking forward to enhancing my management skills and inspiring a great team of my own.
				</div>
			</div>
			<h2 className='text-center my-6 text-[1.5rem] font-semibold'>My Works</h2>
			<div className='flex flex-wrap justify-center gap-8'>

				<div className='flex border rounded-xl border-white border-opacity-10 bg-white bg-opacity-5 gap-4 w-[22rem] p-8 pb-16'>
					<div className='text-[2rem] text-cyan-500 my-2'><FaReact/></div>
					<div className=''>
						<div className='text-[1.2rem] font-semibold'>Frontend</div>
						<div className=' text-opacity-60 text-white'>
							HTML, CSS, JavaScript, JQuery, SASS ,Telerik
							Bootstrap, ReactJS, React-Native, Angular, Tailwind CSS
							Search Engine Optimisation
							Creative & Responsive Design
						</div>
					</div>
				</div>
				<div className='flex border border-white rounded-xl border-opacity-10 bg-white bg-opacity-5 gap-4 w-[22rem] p-8'>
					<div className='text-[1.8rem] py-2 text-cyan-500'><BsDatabaseFillGear/></div>
					<div className=''>
						<div className='text-[1.2rem] font-semibold'>Backend</div>
						<div className=' text-opacity-60 text-white'>
							Programming & Scripting Languages
							Python, Java
							MongoDB, MySQL, NodeJs, Entity Framework, C#, Asp.net MVC
						</div>
					</div>
				</div>
				<div className='flex border border-white rounded-xl border-opacity-10 bg-white bg-opacity-5 gap-4 w-[22rem] p-8'>
					<div className='text-[2rem] text-cyan-500 my-1'><BiCodeBlock/></div>
					<div className=''>
						<div className='text-[1.2rem] font-semibold'>MERN Full-Stack</div>
						<div className=' text-opacity-60 text-white'>
							Front-end Technology, Github
							Backend Languages
							Databases/ Web Storage
						</div>
					</div>
				</div>
				<div className='flex border border-white rounded-xl border-opacity-10 bg-white bg-opacity-5 gap-4 w-[22rem] p-8'>
					<div className='text-[2rem] my-1 text-cyan-500'><LiaLaptopCodeSolid/></div>
					<div className=''>
						<div className='text-[1.2rem] font-semibold'>Web Design</div>
						<div className=' text-opacity-60 text-white'>
							Conception, Graphic Design, Layout, Implementation &
							Maintenance of websites &
							other web applications
						</div>
					</div>
				</div>
			</div>
			<div className='text-[1.5rem] font-serif my-4'>-Omkar Salunkhe</div>
		</div>
	)
}
