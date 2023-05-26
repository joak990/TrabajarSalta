import React, { useState } from 'react';
import { resetfilters, sortJobsByRecent } from '../Redux/Actions';
import { useDispatch } from 'react-redux';

function Filters() {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (e) => {
      const value = e.target.value;
      setSelectedOption(value);
  
      if (value === 'recent') {
        dispatch(sortJobsByRecent());
      }
    };
    function handleClick() {
        dispatch(resetfilters())
       }
    
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-4">
      <label htmlFor="sort" className="text-gray-700">
        Ordenar por:
      </label>
      <div className="relative mt-2 md:mt-0">
        <select
          id="sort"
          value={selectedOption}
          onChange={handleSelectChange}
          className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500"
        >
          <option value="">Seleccione una opción</option>
          <option value="recent">Más recientes</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 12l-4-4h8l-4 4z"
            />
          </svg>
          
        </div>
       
      </div>
      
      <button className='bg-red-600 w-50' onClick={handleClick}>Reset</button>
    </div>
  );
}

export default Filters;