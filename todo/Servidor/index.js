const server = require('./app');
const { conn } = require('./db.js');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
conn.sync({ alter: true }).then(() => {

  server.listen(PORT , async() => {
    
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });

});
