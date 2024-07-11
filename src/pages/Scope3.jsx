import React, { useContext } from 'react'
import Data from '../components/Data';

function Scope3() {
  const { setFlight, setFlightCo2, setWsupply, setWsupplyCo2, setWastew, setWastewCo2 } = useContext(Data);


  const handleFlight = (value) => {  
    if (value === '' || /^\d+(\.\d+)?$/.test(value)) {
      setFlight(value);
      setFlightCo2(value * 0.15102);
    } else {
      alert("Please enter a valid distance");
    }
  }

  const handleWaterSupply = (value) => {  
    if (value === '' || /^\d+(\.\d+)?$/.test(value)) {
      setWsupply(value);
      setWsupplyCo2(value * 0.149);
    } else {
      alert("Please enter a valid liter");
    }
  }

  const handleWasteWater = (value) => {  
    if (value === '' || /^\d+(\.\d+)?$/.test(value)) {
      setWastew(value);
      setWastewCo2(value * 0.272);
    } else {
      alert("Please enter a valid liter");
    }
  }

  return (
    <div className='items-center justify-center mt-[10%]'>
      <form className='flex flex-col w-full p-4'>

        <div className='flex flex-col md:flex-row items-center md:items-end justify-evenly mb-5'>
          <div className="flex flex-col">
            <h2 className='md:text-xl text-md font-bold text-gray-500 my-6'>Scope 3 Indirect Indirect Emission</h2>
            <label className='mb-4'>Flight (Air Travel):</label>
            <input onChange={(e) => handleFlight(e.target.value)} className='p-4' placeholder='kilometer (km)'/>

            <label className='my-4'>Water Supply</label>
            <input onChange={(e) => handleWaterSupply(e.target.value)} className='p-4' placeholder='liter'/>

            <label className='my-4'>Waste Water</label>
            <input onChange={(e) => handleWasteWater(e.target.value)} className='p-4' placeholder='liter'/>
          </div>
        </div>  
      </form>
    </div>
  )
}

export default Scope3