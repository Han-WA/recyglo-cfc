import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Nav() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
            <img class="w-16 cursor-pointer" src={logo} alt="Recyglo Logo" />
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-r-gray-900' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <div>
                <img className="w-16 cursor-pointer mx-4 mt-4" src={logo} alt="Recyglo Logo"/>
                </div>
                
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    )
}

export default Nav