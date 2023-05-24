const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("PostJob", {
    Creacion: {    
      allowNull: false,
      type: DataTypes.DATE
      
    },
    Mensaje: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    EmailTelefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },{timestamps:false});
};

