import React, { useRef } from 'react'

const Tests = (props) => {
    const text=useRef()
    const clickme=(e)=>{
        e.preventDefault();
        props.callBack(text )
    }
  return (
    <div>
        <form onSubmit={clickme}>
            <input type="text" ref={text}/>
            <button >click kon</button>
        </form>
    </div>
  )
}

export default Tests