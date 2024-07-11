import React, { useContext, useRef } from 'react'
import Data from './Data';
import Letter from './Letter';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Disclaimer from '../pages/Disclaimer';

function Result() {
  const { orgform, form, estimatesCO2, watt, wattCo2, flight, flightCo2, wsupply, wsupplyCo2, wastew, wastewCo2  } = useContext(Data);
  const { org, address } = orgform;
  const resultRef = useRef();

  const handleDownload = async () => {
    document.querySelectorAll('.download-hide').forEach((el) => el.classList.add('hidden'));
    const input = resultRef.current;
    const canvas = await html2canvas(input, { scale: 4 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const imgRatio = imgProps.width / imgProps.height;
    const pdfImgHeight = pdfWidth / imgRatio;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfImgHeight);
    pdf.setFontSize(12);
    pdf.save('carbon-footprint-receipt.pdf');
    document.querySelectorAll('.download-hide').forEach((el) => el.classList.remove('hidden'));
    alert("Thank you for using Recyglo!");
  };

  const totalCO2Emission = (estimatesCO2 || 0) +
  (wattCo2 || 0) +
  (flightCo2 || 0) +
  (wsupplyCo2 || 0) +
  (wastewCo2 || 0);

  return (
    <div ref={resultRef} className='bg-white w-full lg:w-[50%] h-[50%] lg:h-full p-4 px-6'>

      <Letter onDownload={handleDownload} />

      <hr className='my-4 border-t-2 border-gray-300' />

      <div className='mt-4 text-sm font-semibold text-gray-500'>
        <h1>Name(org/individual) : <strong>{org}</strong></h1>
        <h1>Address : <strong>{address}</strong></h1>
      </div>

      <h1 className='text-sm self-start mt-3'>Scope 1 (Direct Emission)</h1>

      <table className="table-auto w-full mt-4 text-sm">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Car Brand</th>
            <th className="px-4 py-2 border">Model</th>
            <th className="px-4 py-2 border">Distance</th>
            <th className="px-4 py-2 border">Estimate CO2 (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">{form.car ? form.car : '-'}</td>
            <td className="px-4 py-2 border">{form.model ? form.model : '-'}</td>
            <td className="px-4 py-2 border">{form.distance ? form.distance : '-'}</td>
            <td className="px-4 py-2 border">{estimatesCO2 ? estimatesCO2 : '-'}</td>
          </tr>
        </tbody>
      </table>

      <h1 className='text-sm self-start mt-5'>Scope 2 (Indirect Emission)</h1>

      <table className="table-auto w-full mt-4 text-sm">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Item</th>
            <th className="px-4 py-2 border">Unit Measured</th>
            <th className="px-4 py-2 border">Estimate CO2 (kg)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="px-4 py-2 border">Electricity Usage</td>
            <td className="px-4 py-2 border">{watt ? watt : "-"}</td>
            <td className="px-4 py-2 border">{wattCo2 ? wattCo2 : "-"}</td>
          </tr>
        </tbody>
      </table>

      <h1 className='text-sm self-start mt-5'>Scope 3 (Indirect Indirect Emission)</h1>

      <table className="table-auto w-full mt-4 text-sm">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Item</th>
            <th className="px-4 py-2 border">Unit Measured</th>
            <th className="px-4 py-2 border">Estimate CO2 (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Flight (Air Travel)</td>
            <td className="px-4 py-2 border">{flight ? flight : "-"}</td>
            <td className="px-4 py-2 border">{flightCo2 ? flightCo2.toFixed(2)  : "-"}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Water Supply</td>
            <td className="px-4 py-2 border">{wsupply ? wsupply : '-'}</td>
            <td className="px-4 py-2 border">{wsupplyCo2 ? wsupplyCo2 : "-"}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Waste Water</td>
            <td className="px-4 py-2 border">{wastew ? wastew : "-"}</td>
            <td className="px-4 py-2 border">{wastewCo2 ? wastewCo2.toFixed(2) : "-"}</td>
          </tr>
        </tbody>
      </table>

      <h1 className='text-sm text-right ml-auto font-semibold mt-5'>Total CO2 emission estimates: { totalCO2Emission.toFixed(2) } kg </h1>

        <Disclaimer />
    </div>
  )
}

export default Result