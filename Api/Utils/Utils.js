 const { Op } = require('sequelize');
 const{ Clasificado} = require('../db')
 const moment = require('moment-timezone');


 

  const cleanArrayDb = (
    arr // esta funcion me ayuda a mostrar info necesaria
  ) =>
    arr.map((elem) => {
      // este array es el array de videojuegos que viene de la api.
      return {
        id: elem.id,
        fechaPublicacion: elem.fechaPublicacion,
        Mensaje: elem.Mensaje,
        EmailTelefono: elem.EmailTelefono,
        fechaVencimiento: elem.fechaVencimiento,
        
      };
    });






//setInterval(eliminarDatosVencidos, 24 * 60 * 60 * 1000); 


module.exports = {
    cleanArrayDb
  };
  