const { Router } = require('express');
const Cardrouter = require ("./CardRouting")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/",Cardrouter)



module.exports = router;
