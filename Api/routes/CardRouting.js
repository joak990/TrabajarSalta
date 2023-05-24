const { Router} = require ("express")
const { getCardHandler, postCardHandler } = require("../Handlers/HandlerCard")


const Cardrouter = Router()


Cardrouter.get("/",getCardHandler)
Cardrouter.post("/jobs",postCardHandler)





module.exports =Cardrouter