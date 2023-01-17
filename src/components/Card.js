import React, { useEffect, useState } from 'react'
import GridCards from './GridCards'

const Card = () => {  
  const [frase, setFrase] = useState ([])

  const url = "https://api.adviceslip.com/advice"
  const getFrase = async(url) => {
    const res = await fetch(url)
    const data = await res.json() 
    console.log(data)    
    setFrase(data.slip)
  }  
  useEffect( ()=>{    
    getFrase(url)        
  },[setFrase])
  
   return(
    <div>
      <GridCards frase={frase.advice} id={frase.id}/>
    </div>
  )
}

export default Card