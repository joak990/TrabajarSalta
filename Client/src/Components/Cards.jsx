import React from 'react';
import data from './Data';
import Card from './Card';

function Cards() {
  return (
    <div className="flex flex-wrap -mx-4">
      {data.map((empleo, index) => (
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4 flex-grow" key={index}>
          <Card
            fechaCreacion={empleo.fechaCreacion}
            message={empleo.message}
            telefono={empleo.telefono}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
