import React from 'react'
import Component3 from './Component3'

function Component2() {
   const getdata=(data)=>{
     console.log("data from child",data);
   }
    return (
        <div>
            <Component3 onSubmit={getdata}> 
            <p style={{color :"red"}}>heiuqw gwfuiqw</p>
            </Component3>
        </div>
    )
}


export default Component2
