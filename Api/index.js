const server = require('./app');
//const { conn } = require('./src/db.js');

//conn.sync({ alter: true }).then(() => {

  server.listen(3001 , async() => {
    
    console.log('%s listening at 3001'); // eslint-disable-line no-console
 // });
//
});
