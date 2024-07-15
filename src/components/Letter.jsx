import React from 'react';
import logo from '../assets/logo.png';
import { IoCloudDownloadSharp } from "react-icons/io5";

function Letter({ onDownload }) {
  return (
    <div className='flex items-center justify-start'>
      <img src={logo} alt="Recyglo Logo" className="w-20 h-20" />

      <div className='ml-7 w-full'>
        <div className='flex w-full justify-between'>
          <h1 className='text-xl font-bold'>Carbon Footprint Receipt</h1>
          <div className='flex items-center justify-center hidden-for-pdf'>
            <IoCloudDownloadSharp size={25} color='grey' className="download-hide" />
            <button className='ml-3 text-slate-800 download-hide' onClick={onDownload}>Download</button>
          </div>
        </div>

        <h1 className='text-sm'>GHG protocol - powered by RecyGlo</h1>
        <h4 className='text-[12px]'>www.recyglo.com</h4>
        <h4 className='text-[12px]'>The Offices At Central World, 999/9 Rama I Rd, Khwaeng Pathum Wan, Pathum Wan, Bangkok 10330</h4>
      </div>
    </div>
  );
}

export default Letter;
