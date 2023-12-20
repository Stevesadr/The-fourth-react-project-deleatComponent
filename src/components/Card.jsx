import React, { useState } from 'react'

const Card = ({data , deletById}) => {
  const [upPlus , setUpPlus]=useState(data.price)
  const [countPlus , setCountPlus]=useState(0)
    const clockDeleat=()=>{
      deletById(data.id)
    }
    const clockPlus = () => {
      setUpPlus(parseInt( upPlus)+parseInt( data.price))
      setCountPlus(countPlus+1)
    }
    const clickDown=()=>{
      if(upPlus !== 0){
        setUpPlus(parseInt(upPlus)-parseInt(data.price))
        setCountPlus(countPlus-1)
      }
    }
   
   return (
    <div>
        <h1>{data.name}</h1>
        <h3>{upPlus}</h3>
        <h3>{countPlus}</h3>
        <button onClick={clockPlus}> Puse</button>
        <button onClick={clickDown}>Down</button>
        <button onClick={clockDeleat}>Deleate</button>
    </div>
  )
}

export default Card