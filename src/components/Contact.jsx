import React, { useRef, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import ReactLoading from 'react-loading';

export default function Contact() {
    const [isnamefocus, setisnamefocus] = useState(false);
    const [isemailfocus, setisemailfocus] = useState(false);
    const [istextareafocus, setistextareafocus] = useState(false);
    const [isbtnloading, setbtnloading] = useState(false);
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
    return (
        <div className=' '>
            <h2 className='text-[1.8rem] font-semibold'>Contact</h2>
            <div className='border-2 border-cyan-500 w-10 my-2'></div>
            <div className='text-[1.5rem] font-semibold mt-4 mb-2'>Contact form</div>
            <form className='flex flex-col gap-5' ref={form} onSubmit={sendEmail}>
                <div>
                    <input type='text' name='name' placeholder='Name' disabled={isbtnloading} onFocus={() => setisnamefocus(true)} onBlur={() => setisnamefocus(false)} className={`bg-transparent duration-[0.5s] placeholder-opacity-40 placeholder-white ${isnamefocus ? 'border-cyan-500' : 'border-white border-opacity-20'} p-3 rounded-xl border w-full outline-none`} />
                </div>
                <div>
                    <input type='text' name='email' placeholder='Email address' disabled={isbtnloading} onFocus={() => setisemailfocus(true)} onBlur={() => setisemailfocus(false)} className={`bg-transparent duration-[0.5s] placeholder-opacity-40 placeholder-white ${isemailfocus ? 'border-cyan-500' : 'border-white border-opacity-20'} p-3 rounded-xl border w-full outline-none`} />
                </div>
                <div>
                    <textarea placeholder='Add Message' name='message' disabled={isbtnloading} rows={4} onFocus={() => setistextareafocus(true)} onBlur={() => setistextareafocus(false)} className={`bg-transparent duration-[0.5s] placeholder-opacity-40 placeholder-white ${istextareafocus ? 'border-cyan-500 ' : 'border-white border-opacity-20'} resize-none p-3 rounded-xl border w-full outline-none`}></textarea>
                </div>
                <div className='text-cyan-500  flex justify-end relative'>
                    <button className={`flex ${isbtnloading ? 'text-opacity-35 text-cyan-500 cursor-not-allowed':'bg-opacity-20 '}  items-center border border-opacity-10 shadow-md shadow-gray-800  border-white w-fit px-5 py-3 gap-2 rounded-xl `} disabled={isbtnloading}>
                        <div className='text-[1.2rem]'>
                            <IoIosSend />
                        </div>
                        <div className={`font-semibold  ${isbtnloading ? ' ':''}`} >
                            Send Message
                        </div>
                        {
                            isbtnloading &&
                            <div className=' absolute top-[30%] right-[10%]'>
                                <ReactLoading type="spokes" color='#00BCD4' height={20} width={20} />
                            </div>
                        }

                    </button>
                </div>
            </form>
        </div>
    )
}
