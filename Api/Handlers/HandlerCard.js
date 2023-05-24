
  const getCardHandler = async (req,res)=>{
    
    try {
   res.send(400).send(hola)
    } catch (error) {
      res.status(400).json({error:error.message})
    }
    
  }

  
    const postCardHandler = async (req,res)=>{
    try {
      
    } catch (error) {
        res.status(400).json({error:error.message})
    }}


    module.exports = {
        getCardHandler,
        postCardHandler
      }