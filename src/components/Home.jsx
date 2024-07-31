import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navbar from './Navbar';
import './Home.css'
export default function Home() {
    return (
        <div className='border w-full rounded-3xl bg-white bg-opacity-5 border-opacity-10 border-white text-white'>
            <div className='hidenavbar flex justify-end'>
                <Navbar />
            </div>
            <div className='px-6 pb-10'>
                <Routes>
                    <Route path='/' element={<About />}></Route>
                    <Route path='/resume' element={<Resume />}></Route>
                    <Route path='/projects' element={<Portfolio />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
            </div>
        </div>
    )
}
