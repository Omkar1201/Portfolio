import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location=useLocation()
    return (
        <div className='text-white border absolute right-[4.05rem] border-white flex px-12 pb-8 pt-6 rounded-tr-3xl rounded-bl-3xl border-opacity-10 bg-white bg-opacity-5 justify-between h-fit w-[27rem]'>
            <Link to='/'>
                <button className={`${location.pathname === '/' ? 'text-cyan-500' : 'hover:text-gray-300'} font-semibold `}>About</button>
            </Link>
            <Link to='/resume'>
                <button className={`${location.pathname === '/resume' ? ' text-cyan-500' : 'hover:text-gray-300'} font-semibold `}>Resume</button>
            </Link>
            <Link to='/portfolio'>
                <button className={`${location.pathname === '/portfolio' ? ' text-cyan-500' : 'hover:text-gray-300'} font-semibold `}>Portfolio</button>
            </Link>
            <Link to='/contact'>
                <button className={`${location.pathname === '/contact' ? ' text-cyan-500' : 'hover:text-gray-300'} font-semibold `}>Contact</button>
            </Link>
        </div>
    )
}
