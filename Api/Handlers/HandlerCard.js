const moment = require('moment');
const { createCard } = require('../Controllers/CardController');
const{ Clasificado} = require('../db');
const {cleanArrayDb}  = require('../Utils/Utils');

const getCardHandler = async (req,res)=>{
    
    try {
     const clasificados = await Clasificado.findAll();
    const clasificadosClean = cleanArrayDb(clasificados);
    res.json(clasificadosClean);
    } catch (error) {
      res.status(400).json({error:error.message})
    }
    
  }

    const postCardHandler = async (req,res)=>{
    try {
    const  {Mensaje,EmailTelefono} = req.body
    const fechaDb = moment().format('LL');
    const fechaPublicacion = moment().format('LL');
    const fechaVencimiento = moment().add(2, 'minutes').format('LL');
         const clasificado = await createCard(fechaPublicacion,Mensaje,EmailTelefono,fechaVencimiento,fechaDb)
       res.status(201).json(clasificado)
    } catch (error) {
        res.status(400).json({error:error.message})
    }}

    

    module.exports = {
        getCardHandler,
        postCardHandler,
      }