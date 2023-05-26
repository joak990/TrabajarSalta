const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("clasificado", {
    
    Mensaje: {
      type: DataTypes.STRING,
      
    },
    EmailTelefono: {
      type: DataTypes.STRING,
      
    },
    fechaPublicacion:{
      type: DataTypes.STRING
    },
    fechaVencimiento:{
      type:DataTypes.STRING
    },
    fechaDb:{
    type:DataTypes.STRING
    }

  },{timestamps:false});
};

