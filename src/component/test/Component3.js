import React, { useState } from "react";
import number from "./Component1";
function Component3(props) {
  const [name, setname] = useState("");
  const handelchange=(e)=>{
    setname(e.target.value)
  }
  const handelsubmit=(e)=>{
    e.preventDefault()
    props.onSubmit(name);
  }
  return (
    <div>
      <h3>component 3:</h3>
    {props.children}
      <h4>data passing using useCotext</h4>
      <form onSubmit={handelsubmit}>
        <input type="text" value={name} onChange={handelchange}/>
        <button type='submit'>submit</button>
      </form>
     
    </div>
  );
}

export default Component3;
