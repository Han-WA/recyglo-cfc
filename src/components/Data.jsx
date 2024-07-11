import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Data = createContext();

export const DataProvider = ({children}) => {

    const [ orgform, setOrgForm ] = useState({
        org : "",
        address : "",
    });

    const [form, setForm] = useState({
        car: "",
        model: "",
        distance: 0,
        unit: "kilometer",
    });

    const [ carId, setCarId ] = useState("");

    const [ modelId, setModelId ] = useState("");

    const [ estimatesCO2, setEstimatesCO2 ] = useState(0);


    

    const [ watt, setWatt ] = useState(0);
    const [ wattCo2, setWattCo2 ] = useState(0);




    const [ flight, setFlight ] = useState(0);
    const [ flightCo2, setFlightCo2 ] = useState(0);

    const [ wsupply, setWsupply ] = useState(0);
    const [ wsupplyCo2, setWsupplyCo2 ] = useState(0);

    const [ wastew, setWastew ] = useState(0);
    const [ wastewCo2, setWastewCo2 ] = useState(0);

    

    return (
        <Data.Provider value={{ form, setForm, orgform, setOrgForm, carId, setCarId, modelId, setModelId, estimatesCO2, setEstimatesCO2, watt, setWatt, wattCo2, setWattCo2, flight, setFlight, flightCo2, setFlightCo2, wsupply, setWsupply, wsupplyCo2, setWsupplyCo2, wastew, setWastew, wastewCo2, setWastewCo2}}>{children}</Data.Provider>
    );
}

export default Data;