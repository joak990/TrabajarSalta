
const getCardHandler = async (req,res)=>{
    
    try {
        res.status(200).send("andaget")
    } catch (error) {
      res.status(400).json({error:error.message})
    }
    
  }

  
    const postCardHandler = async (req,res)=>{
    try {
      const  { Creacion,Mensaje,EmailTelefono} = req.body
         const data = {Creacion,Mensaje,EmailTelefono}
       res.status(201).json(data)
    } catch (error) {
        res.status(400).json({error:error.message})
    }}


    module.exports = {
        getCardHandler,
        postCardHandler,
      }