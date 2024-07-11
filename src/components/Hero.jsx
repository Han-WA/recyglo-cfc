import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate();

    const clickCalculate = async () => {
        navigate('/calculator');
    }

    return (
        <div className='text-black'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#0F5132] font-bold p-2'>GREENER FUTURE</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md: py-6'>REDUCE CARBON FOOTPRINT</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold text-[#0F5132]'>GHG Protocol</p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 mt-4'>Monitor your carbon analytics for substainability</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={clickCalculate}>Get Started</button>
            </div>
        </div>
    )
}

export default Hero