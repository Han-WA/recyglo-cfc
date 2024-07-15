import React, {useContext}from 'react'
import Result from '../components/Result'
import ScopeNav from '../components/ScopeNav'
import { Outlet } from 'react-router-dom';
import Data from '../components/Data';


function Ghg() {
  const { dark } = useContext(Data);

  return (
    <div className={`flex flex-col lg:flex-row h-screen`}>

      <div className={`${dark ? 'bg-black text-white' : 'bg-green-200 text-black'} w-full lg:w-[50%] h-full lg:h-full flex flex-col`}>
        <ScopeNav />
        <div className='flex-1 overflow-y-auto'>
          <Outlet/>
        </div>
      </div>

      <Result />
    </div>
  )
}

export default Ghg