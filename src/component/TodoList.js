import React,{useState} from 'react'
import "./TodoListCSS.css";
function TodoList() {
    const [Activity, setActivity] = useState("");
    const [listdata, setlistdata] = useState([]);
    const AddActivity=()=>{
    //      setlistdata([...listdata,Activity])
    //      console.log(listdata);
          Activity.length>=1 &&    setlistdata((listdata)=>{
            const updatedlist=[...listdata,Activity]
            console.log(updatedlist);
            setActivity("");
            return updatedlist;
        })
         
     }
     function removeActivity(i){
          const removeList=listdata.filter((elem,id)=>{
              return i!=id ;
          })
          setlistdata(removeList);
     }
     function handlethis() {
         setlistdata([]);
     }
    return (
        <>
        <div className="container">
            <div className="header"> TODO LIST</div>
             
              <input type="text" placeholder="Add your activity" value={Activity}
               onChange={(e)=>setActivity(e.target.value)}/>
               <button onClick={AddActivity}>Add</button>
               <p className="List-heading">Your activity list are: </p>
               {
                   listdata!=[] && listdata.map((data,i)=>{
                       return(
                       <>
                        <p key={i}>
                           <div className="listData">{data}</div>
                           <div className="btn-position">
                           <button onClick={()=>removeActivity(i)} className="btn">Remove</button>
                           </div>
                           
                        </p>
                       </>
                       )
                   })
               }
              {listdata.length>=1 && <button onClick={handlethis}>Remove All</button>}
            
        </div>
        </>
    )
}

export default TodoList
