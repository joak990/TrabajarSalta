const { Clasificado} = require("../db");
const moment = require('moment-timezone');

const createCard = (creacion, Mensaje, EmailTelefono) => {
  const fechaActual = moment().tz('America/Argentina/Buenos_Aires');
  const fechaPublicacion = fechaActual.format('YYYY-MM-DD HH:mm:ss');
  const fechaVencimiento = fechaActual.add(1, 'minutes').format('YYYY-MM-DD HH:mm:ss');

  return Clasificado.create({
    creacion,
    Mensaje,
    EmailTelefono,
    fechaPublicacion,
    fechaVencimiento,
  });
};

module.exports = {
  createCard,
};