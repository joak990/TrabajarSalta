import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      {/* Versión para escritorio */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold ml-9">
          Trabajar en Salta
        </Link>
        <div className="hidden sm:flex items-end justify-center gap-16">
          <Link to="/" className="text-white text-lg font-bold">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg font-bold">
            Acerca de Nosotros
          </Link>
          <Link to="/form" className="text-white text-lg font-bold">
            Publica tu Anuncio
          </Link>
        </div>
        <div>
          
        </div>
      </div>

      {/* Versión para dispositivos móviles */}
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="mt-4 space-y-2">
              <Link
                to="/"
                className="text-white text-base font-medium block hover:text-gray-300 ml-4"
              >
                Inicio
              </Link>
              <Link
                to="/about"
                className="text-white text-base font-medium block hover:text-gray-300 ml-4"
              >
                About
              </Link>
              <Link
                to="/form"
                className="text-white text-base font-medium block hover:text-gray-300 ml-4"
              >
                publica!
              </Link>
              {/* Otros elementos del navbar */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
