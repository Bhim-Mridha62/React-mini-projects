import React,{useState,useCallback} from 'react'
import Memo1 from './memo1'

function Testmemo() {
    const [Count, setCount] = useState(0);
    const fun=useCallback(()=>{
        console.log("hello parent");
    },[Count])
    return (
        <div>
            
            <Memo1 fun={fun}/>
            {/* <Memo1/> */}
            {Count} <br/>
            <button onClick={()=>( setCount(Count+1))}>button</button>
      
        </div>
    )
}

export default Testmemo

