import React, { useEffect } from 'react'
import Card from './Card'
import Cards from './Cards'
import data from './Data'
import { useDispatch, useSelector } from 'react-redux'
import { getalljobs } from '../Redux/Actions'

function Home() {
  const jobs = useSelector(state => state.allJobs)

  const empleos = jobs.length
 const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getalljobs())
  }, [dispatch]);

    return (
    <div>
      <div className='flex items-start justify-start ml-24'> 
        <h1 className=' text text-3xl '>Clasificados Actuales</h1>
      </div>
        <div className='flex items-center justify-around'> 
        Empleos Actuales : {empleos}
        </div>
      <Cards/>
    </div>
  )
}

export default Home
