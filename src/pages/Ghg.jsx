import React, {useState}from 'react'
import Result from '../components/Result'
import ScopeNav from '../components/ScopeNav'
import Scope1 from './Scope1';
import Scope2 from './Scope2';
import { Outlet } from 'react-router-dom';


function Ghg() {

  return (
    <div className='flex flex-col lg:flex-row h-screen'>

      <div className='bg-green-200 w-full lg:w-[50%] h-full lg:h-full flex flex-col'>
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