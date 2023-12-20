import React, { useState } from 'react'

const MyForm = (props) => {
    const [myinps , setMyinps]=useState({name:"",price:0})

    const changtxt=(e)=>{
        setMyinps({...myinps , name:e.target.value })
    }
    const changnum=(e)=>{
        setMyinps({...myinps , price : e.target.value})

    }
    const sub = (e) => {
        e.preventDefault()
        props.callBack(myinps)
        setMyinps({name:'' , price:0})
        console.log(myinps)
    }

  return (
    <div>
        <form onSubmit={sub}>
            <input type="text" onChange={changtxt} value={myinps.name}/>
            <input type="number" onChange={changnum} value={myinps.price}/>
            <button>BTN</button>
        </form>
    </div>
  )
}

export default MyForm




// import React, { useState } from 'react'

// const MyForm = (props) => {
//     // const [myType, setMyType] = useState('')
//     // const [myPrice, setMyPrice] = useState(0)
//     const [myFormData, setMyFormData] = useState({ type: '', price: 0 })

//     const submitHandler = (e) => {
//         e.preventDefault()
//         // console.log(myType)
//         // console.log(myPrice)
//         props.callBack(myFormData);
//     }

//     const typeChangeHandler = (e) => {
//         //console.log(e.target.value)
//         //setMyType(e.target.value)
//         setMyFormData({ ...myFormData, type: e.target.value })
//     }
//     const priceChangeHandler = (e) => {
//         //console.log(e.target.value)
//         //setMyPrice(e.target.value)
//         setMyFormData({...myFormData , price: e.target.value })
//     }

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <input type='text' placeholder='cost type' onChange={typeChangeHandler} />
//                 <input type='number' placeholder='cost amount' onChange={priceChangeHandler} />
//                 <button>add</button>
//             </form>
//         </div>
//     )
// }

// export default MyForm
