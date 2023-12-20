import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import MyForm from './components/MyForm'
import { v4 as uuidv4 } from 'uuid';
import Tests from './components/Tests'

function App() {
  const [count, setCount] = useState(0)
  const [RestFullAPI , setAddObj]=useState([

  ])

  
  const callBack = (item) => {
    item.id = uuidv4();
    setAddObj([...RestFullAPI , item])
  }
  const deletById=(id)=>{
    setAddObj( RestFullAPI.filter((item)=>{
      return item.id !== id ;
    }))
  }

  return (
    <div>
      <MyForm callBack={callBack}/>  
      {
        RestFullAPI.map((item) => { 
          return <Card key={item.id} data={item} deletById={deletById} />
        })
      }
    
      
      {/* <Card/> */}
    </div>
  )
}

export default App
