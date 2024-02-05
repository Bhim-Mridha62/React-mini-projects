import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './counterSlice'
function Counter() {
    const count=useSelector((state)=>state)
    const dispatch=useDispatch();
  return (
    <div>
        <h2>Counter:{count}</h2>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
       
    </div>
  )
}

export default Counter