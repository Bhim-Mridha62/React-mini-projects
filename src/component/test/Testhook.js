import React, {useState,useEffect} from 'react'

import Component1 from './Component1';

    // usestate use for change state 
    function Testhook() {
    const [number, setNumber] = useState(0);
    const handeladd=()=>{
        setNumber(number + 1)
    }
    // useEffect it call when state will update
    useEffect(() => {
       console.log("Useeffect call");
       return ()=>{
           console.log("unmount");
       }
    }, [number])
    return (
        <div>
              
            <Component1 value={number}/>
            <h3 className="bg-red">useState</h3>
            <p>The number is {number}</p>
            <button onClick={handeladd}>Add</button>
            
        </div>
    )
}

export default Testhook;


