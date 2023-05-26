import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { useDispatch, useSelector } from 'react-redux'
import { getalljobs } from '../Redux/Actions'
import Footer from './Footer'
import Filters from './Filters'

function Home() {
  const jobs = useSelector(state => state.allJobs)

  const empleos = jobs.length
 const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getalljobs())
  }, [dispatch]);


  const [empleo, setEmpleo] = useState(); // Estado con los datos de los trabajos

  const handleSort = (option) => {
    if (option === 'recent') {
      // Ordenar por fecha de creación más reciente
      const sortedJobs = [...jobs].sort((a, b) => {
        // Aquí debes proporcionar la lógica para comparar las fechas de creación de los trabajos
        // y devolver un número negativo, cero o positivo dependiendo del orden
        // Por ejemplo, si tienes una propiedad "createdAt" en cada objeto de trabajo:
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setEmpleo(sortedJobs);
    }
  };


    return (
    <div>
      <div className='flex items-start justify-start ml-24'> 
        <h1 className=' text text-3xl '>Clasificados Actuales</h1>
      </div>
        <div className='flex items-center justify-around'> 
        Empleos Actuales : {empleos}
        <div className=' mb-500'> 
        <Filters />
        </div>
        </div>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home
