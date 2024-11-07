import React from 'react'
interface Toppings{
    name: string,
    img:string
}

interface Props{
    extrs:Toppings[]
}
export default function OurOrder(props:Props) {
  return (
    <>
          {props.extrs.map(extra=>
        <div className='card-list' style={{backgroundColor:props.extrs.length === 5 ? "red" : "yellow" }} >
            <h3> {extra.name}</h3>
            <img 
            src={extra.img} 
            alt="error" 
            style={{maxWidth:"150px"}}
            />
        </div>
    )}
    </>
  )
}
