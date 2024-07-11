import React, { useContext, useState} from 'react'
import logo from '../assets/logo.png'
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Data from '../components/Data';
import Disclaimer from './Disclaimer';

function Calculator() {
    const navigate = useNavigate();
    const { orgform, setOrgForm } = useContext(Data);
    const [touched, setTouched] = useState({
        org: false,
        address: false,
    });

    const handleOrg = (value) => {
        setOrgForm({
            ...orgform,
            org : value,
        });
        setTouched({
            ...touched,
            org: true,
        });
        console.log(value);
    } 

    const handleAddress = (value) => {
        setOrgForm({
            ...orgform,
            address: value,
        });
        setTouched({
            ...touched,
            address: true,
        });
        console.log(value);
    };

    const clickContinue = (e) => {
        e.preventDefault();
        if (orgform.org.trim() !== "" && orgform.address.trim() !== "") {
            navigate('/calculator/ghg/scope1');
        } else {
            alert('Please, make sure to fill out the Organization name and address!');
        }
    }
    

    return (
        <div className='flex items-center justify-center min-h-screen bg-green-100'>
            <form className=' w-full max-w-md bg-white p-6 rounded-lg shadow-md mx-auto'>
                <img class="w-20 h-20 mx-auto cursor-pointer" src={logo} alt="Recyglo Logo" />

                <label className="block text-lg text-green-700 my-4">
                    Enter Organization/Individual Name
                </label>
                <TextField
                    variant="outlined"
                    size="small"
                    className='w-full'
                    error={touched.org && orgform.org === ""}
                    helperText={touched.org && !orgform.org ? "Enter Org Name" : ""}
                    onChange={(e) => handleOrg(e.target.value)}
                />

                <label className="block text-lg text-green-700 my-4">
                    Enter Address
                </label>
                <TextField
                    variant="outlined"
                    size="small"
                    className="w-full"
                    error={orgform.address && orgform.address === ""}
                    helperText={orgform.address && !orgform.address ? "Enter address" : ""}
                    onChange={(e) => handleAddress(e.target.value)}
                />

                <button className='bg-green-500 text-white font-bold mt-9 rounded-full w-full py-3' onClick={clickContinue}>Continue</button>
            </form>
        </div>
    )
}

export default Calculator
