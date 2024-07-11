import React, { useEffect, useState, useContext } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Data from '../components/Data';

function SearchCar() {   
    const { form, setForm } = useContext(Data);
    const { carid, setCarId } = useContext(Data);

    const [ allCars, setAllCars ] = useState([]);
    const [ carAndId, setCarAndId ] = useState([]);

    const handleCar = (value) => {
        setForm({
            ...form,
            car: value,
        });
    }
    
    useEffect(() => {
        const fetchAllCars = async () => {
            try {
                const token = import.meta.env.VITE_TOKEN;
                const cars = await axiosInstance.get('https://www.carboninterface.com/api/v1/vehicle_makes', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const carList = cars.data.map((i) => i.data.attributes.name);
                setAllCars(carList);
                const carAndIdList = cars.data.map((i) => ({
                    id: i.data.id,
                    name: i.data.attributes.name
                }));
                setCarAndId(carAndIdList);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllCars();
    }, []);


    const [carQuery, setCarQuery] = useState('');
    const [carSuggestions, setCarSuggestions] = useState([]);

    useEffect(() => {
        if (carQuery !== "") {
            console.log("Searching...")
            setCarSuggestions(
                allCars.filter(car =>
                    car.toLowerCase().includes(carQuery.toLowerCase())
                )
            );
        }
    }, [allCars, carQuery]);

    const handleChange = (value) => {
        setCarQuery(value);
        setCarSuggestions(allCars.filter(car =>
            car.toLowerCase().includes(value.toLowerCase())
        ));
        //handleCar(value);
    }

    const carSuggestionClick = (suggestion) => {
        setCarQuery(suggestion);
        handleCar(suggestion)
        setCarSuggestions([]);
    }

    useEffect(() => {
        if (form.car) {
            const car = carAndId.find(c => c.name === form.car);
            if (car) {
                console.log(`Car: ${car.name}, ID: ${car.id}`);
                setCarId(car.id);
            }
        }
    }, [form.car, carAndId]);


    return (
        <div className='relative'>
            <input value={carQuery} onChange={(e) => handleChange(e.target.value)} className='p-3' placeholder='eg. Totyota, Tesla,...'></input>

            {carSuggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-md max-h-60 overflow-auto z-10">
                    {carSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-200 text-base"
                            onClick={() => carSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>

    )
}

export default SearchCar