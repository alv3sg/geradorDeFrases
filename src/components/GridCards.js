import React from 'react'
import "./GridCards.css"
import iconDice  from "./icon-dice.svg"

const GridCards = ({frase, id}) => {

  function recarregarAPagina() {
    
    window.location.reload(false)    
  }
   return (
    <div className='container'>
        <h4>ADVICE #{id}</h4>
        <h1>"{frase}"</h1>
        <div className='line'/>
        <button onClick={recarregarAPagina} ><img src={iconDice} alt='' /></button>
                
    </div>
  )
}

export default GridCards