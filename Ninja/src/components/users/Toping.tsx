import React from 'react'

interface Toppings{
    name: string,
    img:string
  }
  interface User{
    name: string,
    img:string,
    pizzaToppings:Toppings[]
}

interface Props{
    users:User[]
    AddExtrs:(extrs:Toppings)=>void


  }
export default function Toping(props:Props) {


  return (
    <>
      {props.users.map(user=>
        <div className='card' >
            <h3> {user.name}</h3>
            <img 
            src={user.img} 
            alt="error" 
            style={{maxWidth:"150px"}}
            />
{
    user.pizzaToppings.map(top => 
        <button onClick={()=>{props.AddExtrs(top)}}>{top.name}</button>
    )
}
        </div>
    )}
    </>
  )
}
