import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
export default function Contact() {
    const[isnamefocus,setisnamefocus]=useState(false);
    const[isemailfocus,setisemailfocus]=useState(false);
    const[istextareafocus,setistextareafocus]=useState(false);

    return (
        <div className=' '>
            <h2 className='text-[1.8rem] font-semibold'>Contact</h2>
            <div className='border-2 border-cyan-500 w-10 my-2'></div>
            <div className='text-[1.5rem] font-semibold mt-4 mb-2'>Contact form</div>
            <form className='flex flex-col gap-5'>
                <div>
                    <input type='text' placeholder='Name' onFocus={()=>setisnamefocus(true)} onBlur={()=>setisnamefocus(false)} className={`bg-transparent duration-[0.5s] placeholder-opacity-40 placeholder-white ${isnamefocus ? 'border-cyan-500':'border-white border-opacity-20'} p-3 rounded-xl border w-full outline-none`} />
                </div>
                <div>
                    <input type='text' placeholder='Email address' onFocus={()=>setisemailfocus(true)} onBlur={()=>setisemailfocus(false)} className={`bg-transparent duration-[0.5s] placeholder-opacity-40 placeholder-white ${isemailfocus ? 'border-cyan-500':'border-white border-opacity-20'} p-3 rounded-xl border w-full outline-none`} />
                </div>
                <div>
                    <textarea placeholder='Add Message' rows={4} onFocus={()=>setistextareafocus(true)} onBlur={()=>setistextareafocus(false)} className={`bg-transparent duration-[0.5s] placeholder-opacity-40 placeholder-white ${istextareafocus ? 'border-cyan-500 ':'border-white border-opacity-20'} resize-none p-3 rounded-xl border w-full outline-none`}></textarea>
                </div>
                <div className='text-cyan-500  flex justify-end'>
                    <button className='flex items-center border border-opacity-10 bg-black bg-opacity-20 shadow-md shadow-gray-800  border-white w-fit px-5 py-3 gap-2 rounded-xl'>
                        <div className='text-[1.2rem]'>
                            <IoIosSend/>
                        </div>
                        <div className='font-semibold'>
                            Send Message
                        </div>
                    </button>
                </div>
            </form>
        </div>
    )
}
