import React from 'react'
import Component2 from './Component2'

 export const Employee=React.createContext();
function Component1(props) {
    const number=5215
    return (
        <div>
            <Component2/>
           
            <h3>Props</h3>
    Props use for data pasing from parent component to child component and the recive data is {props.value}
        </div>
    )
}

export default Component1


