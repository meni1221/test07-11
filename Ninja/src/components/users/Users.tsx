import { useEffect, useState } from 'react'
import Toping from './Toping'
import OurOrder from './ourOrder'

interface Toppings{
  name: string,
  img:string
}
interface User{
  name: string,
  img:string,
  pizzaToppings:Toppings[]
}

export default function Users() {
  const [users, setUsers] = useState <User[]>([])
  const [extrs, setExtra] = useState <Toppings[]>([])
  
  useEffect(()=>{
    fetch("/data.json")
    .then((response)=>response.json())
    .then((data)=> setUsers(data))
    .catch((error)=> console.error("Error data:", error))
  },[])
  
  const AddExtrs =(extre:Toppings)=>{
    if (extrs.length >= 5 || extrs.find(t=>t.name===extre.name))return
    setExtra([...extrs,extre])
    console.log("You exceeded the allowed amount of additions \ the addition already exists")
    

  }
  return (
    <>
    <div className='card-list'>
      <Toping 
      users={users}
      AddExtrs ={AddExtrs}
       />
       </div>
      <div className='card-list'> 
         <OurOrder extrs={extrs} />
      </div>
    </>
  )
}
