import React, { useContext } from 'react'
import Data from '../components/Data';
import { TiArrowRightThick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

function Scope2() {
  const navigate = useNavigate();
  const { setWatt, setWattCo2, goToScope} = useContext(Data);

  const handleWatt = (value) => {
    if (value === '' || /^\d+(\.\d+)?$/.test(value)) {
      setWatt(value);
      setWattCo2(value * 0.483);
      console.log(value * 0.483);
    } else {
      console.log("Please enter a valid Kilowatt");
    }
  }

  const clickNext = async () => {
    navigate('/calculator/ghg/scope3');
};

  return (
    <div className='items-center justify-center mt-[13%]'>
      <form className='flex flex-col w-full p-4'>

        <div className='flex flex-col md:flex-row items-center md:items-end justify-evenly mb-5'>
          <div className="flex flex-col">
            <h2 className='md:text-xl text-md font-bold text-gray-500 my-6'>Scope 2 Indirect Emission</h2>
            <label className='mb-4'>Enter electricity (kilowatt):</label>
            <input onChange={(e) => handleWatt(e.target.value)} className='p-4 input-no-dark' placeholder='Kilowatt' />
          </div>
        </div>
      </form>

      <div className="flex w-full item-center justify-end mt-[36%] mb-3">
        <button className="text-green-500 text-[20px] font-semibold hover:text-white mt-1 " onClick={clickNext}>Next</button>
        <TiArrowRightThick className='mr-6 ml-2 size-9 text-green-500 hover:text-white' />
      </div>
    </div>
  )
}

export default Scope2