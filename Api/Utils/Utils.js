 const { Op } = require('sequelize');
 const{ Clasificado} = require('../db')
 const moment = require('moment-timezone');


 const eliminarDatosVencidos = async () => {
    try {
      // Obtén la fecha actual en la zona horaria de Argentina
      const fechaActual = moment().tz('America/Argentina/Buenos_Aires').toDate();
  
      // Calcula la fecha límite que indica que los datos deben ser eliminados (10 minutos atrás)
      const fechaLimite = moment().tz('America/Argentina/Buenos_Aires').subtract(1, 'minutes').toDate();
  
      // Elimina los datos que hayan superado la fecha límite
      const numFilasEliminadas = await Clasificado.destroy({
        where: {
          fechaPublicacion: {
            [Op.lt]: fechaLimite,
          },
        },
      });
  
      console.log('Datos vencidos eliminados correctamente');
      console.log('Número de filas eliminadas:', numFilasEliminadas);
    } catch (error) {
      console.error('Error al eliminar los datos vencidos:', error);
    }
  };
  
  // Ejecuta la función eliminarDatosVencidos cada 3 minutos
  setInterval(eliminarDatosVencidos, 1 * 60 * 1000);

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
  