import React, { useContext, useEffect, useState } from 'react'
import Data from './Data';
import axiosInstance from '../utils/axiosInstance';

function SearchModel() {
    const { form, setForm } = useContext(Data);
    const { carId } = useContext(Data);
    const { setModelId } = useContext(Data);

    const [ allModels, setAllModel ] = useState([]);
    const [ modelAndId, setModelAndId ] = useState([]);

    const handleModel = (value) => {
        setForm({
            ...form,
            model: value,
        });
    }

    useEffect(() => {
        const fetchAllModels = async () => {
            if (carId !== "") {
                try {
                    console.log(carId);
                    const token = import.meta.env.VITE_TOKEN;
                    const models = await axiosInstance.get(`https://www.carboninterface.com/api/v1/vehicle_makes/${carId}/vehicle_models`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    const modelList = models.data.map((i) => i.data.attributes.name);

                    const modelIdList = models.data.map((i) => ({
                        id: i.data.id,
                        name: i.data.attributes.name
                    }));

                    setModelAndId(modelIdList);
                    setAllModel(modelList);
                } catch (err) {
                    console.log(err);
                }
            }
        };
        fetchAllModels();
    }, [carId]);

    const [modelQuery, setModelQuery] = useState('');
    const [modelSuggestions, setModelSuggestions] = useState([]);

    const handleChange = (value) => {
        setModelQuery(value);
        setModelSuggestions(allModels.filter(model =>
            model.toLowerCase().includes(value.toLowerCase())
        ));
        //handleCar(value);
    }

    const modelSuggestionClick = (suggestion) => {
        setModelQuery(suggestion);
        handleModel(suggestion)
        setModelSuggestions([]);
    }

    useEffect(() => {
        if (form.model) {
            const model = modelAndId.find(m => m.name === form.model);
            if (model) {
                console.log(model.id);
                setModelId(model.id);
            }
        }
    }, [form.model, modelAndId, setModelId]);

    return (
        <div className='relative'>
            <input value={modelQuery} onChange={(e) => handleChange(e.target.value)} className='p-3' placeholder='eg. Camry, Model S, ...'></input>
            {modelSuggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-md max-h-60 overflow-auto z-10">
                    {modelSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-200 text-base"
                            onClick={() => modelSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchModel