import React, { useState } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import Paginado from './Paginado';

function Cards() {
  const jobs = useSelector(state => state.allJobs);

  const [pagina, setPagina] = useState(1);
  const [porpagina, setPorpagina] = useState(9);
  const maximo = Math.ceil(jobs.length / porpagina);

  return (
    <div className="flex flex-wrap -mx-2">
      {jobs
        .slice((pagina - 1) * porpagina, pagina * porpagina)
        .map((empleo, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 px-10 mb-4 mt-10" key={index}>
            <Card
              fechaDb={empleo.fechaDb}
              message={empleo.Mensaje}
              telefono={empleo.EmailTelefono}
            />
          </div>
        ))}
      <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
}

export default Cards;