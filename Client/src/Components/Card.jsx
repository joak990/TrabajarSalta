import React, { useState } from 'react';

function Card({ fechaDb, message, telefono }) {
  const [mostrarTelefono, setMostrarTelefono] = useState(false);

  const toggleMostrarTelefono = () => {
    setMostrarTelefono(!mostrarTelefono);
  };

  const cerrarTelefono = () => {
    setMostrarTelefono(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
      <h1 className="text-xl font-bold mb-4">{fechaDb}</h1>
      <p className="text-gray-700 flex-grow overflow-hidden">
        {message}
      </p>

      {mostrarTelefono ? (
        <div className="mt-4">
          <p className="font-bold">Teléfono o Mail: {telefono}</p>
          <button
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={cerrarTelefono}
          >
            Cerrar Teléfono o Mail
          </button>
        </div>
      ) : (
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={toggleMostrarTelefono}
        >
          Ver Teléfono o Mail
        </button>
      )}
    </div>
  );
}

export default Card;
