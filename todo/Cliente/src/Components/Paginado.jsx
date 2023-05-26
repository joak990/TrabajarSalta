import React, { useState } from 'react';

function Paginado({ pagina, setPagina, maximo }) {
  const [input, setInput] = useState(1);
  const maximoreal = Math.ceil(maximo);

  const nextPage = () => {
    const nextPageNumber = pagina + 1;
    setInput(nextPageNumber);
    setPagina(nextPageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevPage = () => {
    const prevPageNumber = pagina - 1;
    setInput(prevPageNumber);
    setPagina(prevPageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const firstPage = () => {
    setInput(1);
    setPagina(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const lastPage = () => {
    setInput(maximo);
    setPagina(maximo);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const maxMin = (e) => {
    const pageNumber = parseInt(e.target.value);
    if (
      isNaN(pageNumber) ||
      pageNumber < 1 ||
      pageNumber > Math.ceil(maximo)
    ) {
      setInput(1);
      setPagina(1);
    } else {
      setInput(pageNumber);
      setPagina(pageNumber);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        disabled={pagina === 1}
        onClick={firstPage}
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 rounded-l text-sm"
      >
        Primera
      </button>
      <button
        disabled={pagina === 1}
        onClick={prevPage}
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 text-sm"
      >
        Anterior
      </button>
      <input
        min="1"
        max={maximoreal}
        onChange={maxMin}
        name="page"
        autoComplete="off"
        value={input}
        className="bg-gray-200 text-gray-600 font-bold py-1 px-2 text-center w-12"
      />
      <span className="text-gray-600 text-sm">de {maximoreal}</span>
      <button
        disabled={pagina === maximoreal}
        onClick={nextPage}
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 text-sm"
      >
        Siguiente
      </button>
      <button
        disabled={pagina === maximoreal}
        onClick={lastPage}
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 rounded-r text-sm"
      >
        Última
      </button>
    </div>
  );
}

export default Paginado;
