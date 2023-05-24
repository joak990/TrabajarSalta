import React from 'react'
import Card from './Card'
import Cards from './Cards'
import data from './Data'

function Home() {
  const empleos = data.length
  
    return (
    <div>
        <div className='flex items-center justify-around'> 
        Empleo : {empleos}
        </div>
      <Cards/>
    </div>
  )
}

export default Home
