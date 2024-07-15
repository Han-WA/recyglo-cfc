import React, { useContext, useEffect, useState } from 'react'
import SearchCar from '../components/SearchCar';
import SearchModel from '../components/SearchModel';
import Data from '../components/Data';
import axiosInstance from '../utils/axiosInstance';
import { TiArrowRightThick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


function Scope1() {
    const navigate = useNavigate();
    const { form, setForm, modelId, setEstimatesCO2, goToScope } = useContext(Data);
    const units = [
        "kilometer", "mile"
    ];

    const handleDistance = (value) => {
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            console.log(value);
            setForm({
                ...form,
                distance: value === '' ? 0 : value,
            });
        } else {
            alert("Please enter a valid distance.");
        }
    }

    const handleUnit = (event) => {
        setForm({
            ...form,
            unit: event.target.value,
        });
        console.log(event.target.value);
    };

    const calculateScope1 = async (event) => {
        event.preventDefault();
        const distanceUnit = form.unit === 'kilometer' ? 'km' : (form.unit === 'mile' ? 'mi' : form.unit);
        const payload = {
            "type": "vehicle",
            "distance_unit": distanceUnit,
            "distance_value": parseFloat(form.distance),
            "vehicle_model_id": modelId
        };

        try {
            const token = import.meta.env.VITE_TOKEN;
            const response = await axiosInstance.post('/estimates', payload, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('estimate in kg:', response.data.data.attributes.carbon_kg);
            setEstimatesCO2(response.data.data.attributes.carbon_kg);
            setCurrentScope('scope2');
        } catch (error) {
            console.error('Error making the request:', error);
        }
    }

    const clickNext = async () => {
        navigate(`/calculator/ghg/scope2`);
    };

    return (
        <div className='items-center justify-center mt-[13%]'>
            <form className='flex flex-col w-full p-4'>

                <div className='flex flex-col md:flex-row items-center md:items-end justify-evenly mb-5'>
                    <div className="flex flex-col">
                        <h2 className='md:text-xl text-md font-bold text-gray-500 my-6'>Scope 1 Direct Emission</h2>
                        <label className='mb-4'>Enter your car brand:</label>
                        <SearchCar />
                    </div>

                    <div className="flex flex-col">
                        <label className='my-4 md:mt-0'>Enter your car model:</label>
                        <SearchModel />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-evenly'>
                    <div className="flex flex-col">
                        <label className='mb-4'>Enter Distance:</label>
                        <input value={form.distance === 0 ? '' : form.distance} onChange={(e) => handleDistance(e.target.value)} className='p-3 input-no-dark' placeholder='eg. 20, 100, 4000'></input>
                    </div>

                    <div className="flex flex-col w-[31%]">
                        <label className='my-4 md:mt-0'>Unit</label>
                        <select
                            className="w-full p-3 bg-white border text-md border-gray-300 rounded-lg focus:outline-none input-no-dark"
                            value={form.unit}
                            onChange={handleUnit}
                        >
                            {units.map((u, index) => (
                                <option key={index} value={u}>
                                    {u}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='flex justify-center mt-8'>
                    <button className="bg-green-700 text-white px-6 py-3 w-[30%] rounded-full hover:bg-green-500" onClick={calculateScope1}>Calculate</button>
                </div>
            </form>

            <div className="flex w-full item-center justify-end mt-[15%] mb-3 ">
                <button className="text-green-500 text-[20px] font-semibold mt-1 hover:text-white " onClick={clickNext}>Next</button>
                <TiArrowRightThick className='mr-6 ml-2 size-9 text-green-500 hover:text-white' />
            </div>
        </div>
    )
}

export default Scope1