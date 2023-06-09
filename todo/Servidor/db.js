const { Sequelize } = require('sequelize');
require('dotenv').config();
const path =require('path');
const {DB_USER, DB_PASSWORD, DB_HOST,DB_DEPLOY} = process.env;
const fs = require('fs');
const postJobModel = require('./models/Clasificado'); 

const db_deploy = DB_DEPLOY ? DB_DEPLOY : `postgres:${DB_USER}:${DB_PASSWORD}@${DB_HOST}/trabajarsalta`;

const sequelize = new Sequelize(db_deploy, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);
const { clasificados } = sequelize.models;
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

  // Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

postJobModel(sequelize);

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  };