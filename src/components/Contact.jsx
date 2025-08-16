import React, { useRef, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { toast } from 'react-toastify';
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";

import emailjs from '@emailjs/browser';
import ReactLoading from 'react-loading';
import { motion } from 'framer-motion';
export default function Contact() {
    const [isnamefocus, setisnamefocus] = useState(false);
    const [isemailfocus, setisemailfocus] = useState(false);
    const [istextareafocus, setistextareafocus] = useState(false);
    const [isbtnloading, setbtnloading] = useState(false);
    const [showmessage, setshowmessage] = useState(false);

    const form = useRef();
    const sendEmail = async (e) => {
        e.preventDefault();
        setbtnloading(true);
        try {
            const response = await emailjs.sendForm('service_gzekkn8', 'template_37n2uud', form.current, 'CVdtUjVEQyXrY-VKW')
            toast.success("Message sent successfully!", {
                position: "top-center",
                autoClose: 2000
            })
            console.log(response);
            form.current.reset();
        }
        catch (error) {
            if (error instanceof TypeError && error.message === 'Failed to fetch') {
                toast.error("Check your internet connection.");
            } else {
                toast.error("An error occurred while sending the message.");
            }
        }
        setbtnloading(false);
    }
    const phoneNumber = '9975359761'
    const handleIconClick = () => {
        navigator.clipboard.writeText(phoneNumber)
            .then(() => {
                setshowmessage(true)
                setTimeout(() => {
                    setshowmessage(false)
                }, 2000)
            })
            .catch(err => {
                toast.error('Failed to copy phone number: ');
            });
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className=' '>
            <h2 className='text-[1.8rem] font-semibold'>Contact</h2>
            <div className='border-[0.15rem] rounded-full border-cyan-500 w-10 my-2'></div>
            <div className='  w-full bg-opacity-5 mt-8 border-black'>

                <div className='flex gap-5 items-start my-4'>
                    <span className='bg-white bg-opacity-5 p-3  text-cyan-500 rounded-full'>
                        <FaRegUser />
                    </span>
                    <span className=' flex flex-col items-start'>
                        <div className=' font-semibold text-white text-opacity-60'>
                            Name
                        </div>
                        <div className=' font-thin'>
                            Omkar Salunkhe
                        </div>
                    </span>
                </div>
                <a className='flex gap-5 group items-start my-4' href={`mailto:omkarsalunkhe3597@gmail.com`} title='Click to send email'>
                    <span className='bg-white bg-opacity-5 p-3 text-cyan-500 rounded-full'>
                        <MdOutlineMailOutline />
                    </span>
                    <span className=' flex flex-col items-start'>
                        <div className=' font-semibold text-white text-opacity-60'>
                            Email
                        </div>
                        <div className=' font-thin'>
                            omkarsalunkhe1201@gmail.com
                        </div>
                    </span>
                </a>
                <div className='flex relative gap-5 group items-start my-4 cursor-pointer' title='Click to copy mobile no.'  onClick={handleIconClick}>
                    <span className='bg-white bg-opacity-5 p-3 text-cyan-500  rounded-full'>
                        <FaPhoneAlt />
                    </span>
                    <span className=' flex flex-col'>
                        <div className=' font-semibold text-white text-opacity-60'>
                            Mobile no.
                        </div>
                        <div className='font-thin'>
                            +91 9975359761
                        </div>
                    </span>
                    <motion.div className={`bg-white bg-opacity-10 shadow-2xl text-cyan-500 px-2 absolute py-1 top-[0.6rem] font-semibold rounded-md left-[11rem] items-center gap-1 ${showmessage ? 'flex' : 'hidden'}`}><MdContentCopy />Copied!</motion.div>
                </div>
            </div>

            <div className='text-[1.5rem] font-semibold mt-5 mb-2'>Contact form</div>
            <form className='flex flex-col gap-5' ref={form} onSubmit={sendEmail}>
                <div>
                    <input type='text' name='name' placeholder='Name' disabled={isbtnloading} onFocus={() => setisnamefocus(true)} onBlur={() => setisnamefocus(false)} className={`bg-transparent duration-[0.5s] placeholder-opacity-40 placeholder-white ${isnamefocus ? 'border-cyan-500' : 'border-white border-opacity-20'} p-3 rounded-xl border w-full outline-none`} required />
                </div>
                <div>
                    <input type='email' name='email' placeholder='Email address' disabled={isbtnloading} onFocus={() => setisemailfocus(true)} onBlur={() => setisemailfocus(false)} className={`bg-transparent duration-[0.5s] placeholder-opacity-40 placeholder-white ${isemailfocus ? 'border-cyan-500' : 'border-white border-opacity-20'} p-3 rounded-xl border w-full outline-none`} required />
                </div>
                <div>
                    <textarea placeholder='Add Message' name='message' disabled={isbtnloading} rows={4} onFocus={() => setistextareafocus(true)} onBlur={() => setistextareafocus(false)} className={`bg-transparent duration-[0.5s] placeholder-opacity-40 placeholder-white ${istextareafocus ? 'border-cyan-500 ' : 'border-white border-opacity-20'} resize-none p-3 rounded-xl border w-full outline-none`} required></textarea>
                </div>
                <div className='text-cyan-500 flex justify-end'>
                    <button className={`flex relative ${isbtnloading ? 'text-opacity-35 text-cyan-500 cursor-not-allowed' : 'bg-opacity-20 '}  items-center border border-opacity-10 shadow-md shadow-gray-800  border-white w-fit px-5 py-3 gap-2 rounded-xl `} disabled={isbtnloading}>
                        <div className='text-[1.2rem]'>
                            <IoIosSend />
                        </div>
                        <div className={`font-semibold  ${isbtnloading ? ' ' : ''}`} >
                            Send Message
                        </div>
                        {
                            isbtnloading &&
                            <div className=' absolute top-[30%] right-[42%]'>
                                <ReactLoading type="spokes" color='#00BCD4' height={20} width={20} />
                            </div>
                        }
                    </button>
                </div>
            </form>

        </motion.div>
    )
}
