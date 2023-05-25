import React from 'react';
import data from './Data';
import Card from './Card';
import { useSelector } from 'react-redux';

function Cards() {
  const jobs = useSelector(state => state.allJobs)
  return (
    <div className="flex flex-wrap -mx-2">
      {jobs.map((empleo, index) => (
        <div className="w-full sm:w-1/2 md:w-1/3 px-10 mb-4" key={index}>
          <Card
            // fechaCreacion={empleo.fechaPublicacion}
            message={empleo.Mensaje}
            telefono={empleo.EmailTelefono}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
