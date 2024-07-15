import React, { useContext } from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Data from './Data';

function ScopeNav() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const { dark, setDark } = useContext(Data);

    const clickArrow = () => {
        navigate('/calculator');
    }


    const goToScope = (scope) => {
        navigate(`/calculator/ghg/${scope}`);
    };

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className='flex items-center justify-start mt-4'>
            <MdArrowBackIosNew className='ml-3' size={30} style={{ opacity: 0.5 }} onClick={clickArrow} />
            <div className='w-full flex items-center justify-center'>
                <button onClick={() => goToScope('scope1')} className={`font-semibold rounded-full w-[20%] py-2 mx-5 ${currentPath === '/calculator/ghg/scope1' ? 'bg-green-500 text-white' : 'bg-white text-black'
                    }`} >Scope 1</button>

                <button onClick={() => goToScope('scope2')} className={`font-semibold rounded-full w-[20%] py-2 mx-5 ${currentPath === '/calculator/ghg/scope2' ? 'bg-green-500 text-white' : 'bg-white text-black'
                    }`} >Scope 2</button>

                <button onClick={() => goToScope('scope3')} className={`font-semibold rounded-full w-[20%] py-2 mx-5 ${currentPath === '/calculator/ghg/scope3' ? 'bg-green-500 text-white' : 'bg-white text-black'
                    }`}  >Scope 3</button>
            </div>
            <button onClick={darkModeHandler} className='mr-8'>
                    {

                        dark && <IoSunny size={30} color='grey'/>
                    }
                    {
                        !dark && <IoMoon size={30} color='grey'/>
                    }
                </button>
        </div>
    )
}

export default ScopeNav