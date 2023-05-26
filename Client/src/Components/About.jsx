import React from 'react';

function About() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Clasificados Semanales 📰</h1>
        <p className="text-lg text-center mb-8">
          Encuentra las mejores ofertas laborales en la ciudad de Salta, Capital. 💼🌇
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Soy Empleador 💼</h2>
            <p className="text-gray-700">
              Si estás ofreciendo trabajo en Salta, Capital, aprovecha nuestra plataforma para publicar
              tu anuncio semanalmente. 📢💼💼
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="/form"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
              >
                ¡Publica tu anuncio ahora!
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Búsqueda de trabajo 🔍</h2>
            <p className="text-gray-700">
              Si estás buscando trabajo en Salta, Capital, este es el lugar indicado.
              encuentra oportunidades laborales que se ajusten a tus necesidades. 📄💼💡
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center mt-10">
          <h2 className="text-xl font-bold mb-4">Creadores del Proyecto 👨‍💻👨‍💻</h2>
          <p className="text-gray-700">
            Este proyecto fue creado por Facundo Tobio y Joaquín Haidar.
            Son desarrolladores apasionados que han trabajado en conjunto para brindarte esta plataforma de clasificados semanales. 💪🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;