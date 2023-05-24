const { Router} = require ("express")


const CardRouting = Router()


CardRouting.get("/",getVideogamesHandler)
CardRouting.post("/jobs",getVideogameHandler)





module.exports =videogamesRouter