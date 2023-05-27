import React, { useState } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import Paginado from './Paginado';
import { compareAsc } from 'date-fns';

function Cards() {
  const jobs = useSelector(state => state.allJobs);

  const [pagina, setPagina] = useState(1);
  const [porpagina, setPorpagina] = useState(9);
  const maximo = Math.ceil(jobs.length / porpagina);

  // Ordenar los trabajos por fecha de publicación (más recientes primero)
  const sortedJobs = jobs.sort((a, b) => compareAsc(new Date(b.fechaPublicacion), new Date(a.fechaPublicacion)));

  // Función para manejar el cambio de página
  const handlePageChange = (page) => {
    setPagina(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll hacia arriba
    // Opción 1: Recargar la página
    // window.location.reload();

    // Opción 2: Redireccionar a la siguiente página sin recargar
    // window.location.href = `?page=${page}`;
  };

  return (
    <div>
      <div className="flex flex-wrap -mx-2">
        {sortedJobs
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
      </div>
      <Paginado
        totalItems={jobs.length}
        itemsPerPage={porpagina}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Cards;
