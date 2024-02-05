
  //   useState

// import React,{useState} from 'react'

// function Hook() {
//     const [orther, setorther] = useState(0);
//     const handelClick=()=>{
//         setorther(orther+1)
//     }
//     return (
//         <div >
//             <h3>You click {orther} times</h3>
//             <button onClick={handelClick}>click</button>
//         </div>
//     )
// }

// export default Hook



   // useEffect



//    import React,{useState , useEffect} from 'react'

//     function Hook() {
//     const [count, setcount] = useState(0);

//     useEffect(() => {
//      console.log(count);     
//     });
//     console.log("vdvuvqwudv");
//     return (
//         <div>
//            <p>You clicked {count} times</p>

//             <button onClick={()=>setcount(count+1)}>click</button>
//         </div>
//     )
// }
// export default Hook


// useref


import React ,{useState , useRef,useEffect} from 'react'

function Hook() {
    const Element = useRef(null)
    const element = useRef(null)
    const [name, setname] = useState("");
    const [orther, setorther] = useState("");
    useEffect(() => {
        console.log(Element);
        Element.current.style.color="red"
        element.current.style.color="green"
        Element.current.focus();
        // element.current.focus();
    }, [])
    // const reset=()=>{
    //     setname("")
    //     Element.current.focus()
    // }
    return (
        <div>
            <p>learning useref</p>
            <input  ref={Element} type="text" orther={name} onChange={(e)=>setname(e.target.orther)}/>
            <input ref={element} type="text" orther={orther} onChang={(e)=>setorther(e.target.orther)}/>
            {/* <button ref={element} type="text" orther={orther} onChang={(e)=>setorther(e.target.orther)}/> */}
        </div>
    )
}
       
export default Hook
