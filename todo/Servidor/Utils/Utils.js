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
        fechaDb: elem.fechaDb
      };
    });

    const eliminarDatosVencidos = async () => {
      try {
        const fechaLimite = moment().tz("America/Argentina/Buenos_Aires").subtract(1, "days").toDate();
        const numfilaseliminadas = await Clasificado.destroy({
          where: {
            fechaPublicacion: {
              [Op.lt]: fechaLimite
            }
          }
        });
        console.log("Datos vencidos eliminados correctamente");
        console.log("Número de filas eliminadas:", numfilaseliminadas);
      } catch (error) {
        console.error("Error al eliminar los datos vencidos:", error);
      }
    };
    
    setInterval(eliminarDatosVencidos, 1 * 60 * 60 * 1000);

module.exports = {
    cleanArrayDb
  };
  