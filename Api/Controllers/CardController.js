const { Clasificado} = require("../db");
const moment = require('moment-timezone');

const createCard = (creacion, Mensaje, EmailTelefono) => {
  const fechaActual = moment().tz('America/Argentina/Buenos_Aires');
  const fechaPublicacion = fechaActual.format('YYYY-MM-DD HH:mm:ss');
  const fechaDb = fechaActual.format('DD-MM-YYYY ');
  const fechaVencimiento = moment(creacion).add(1, 'days').format('YYYY-MM-DD HH:mm:ss');

  return Clasificado.create({
    
    creacion,
    Mensaje,
    EmailTelefono,
    fechaPublicacion,
    fechaVencimiento,
    fechaDb
  });
};

module.exports = {
  createCard,
};