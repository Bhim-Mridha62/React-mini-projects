import React,{useState} from 'react'
import "./CalculaterCSS.css";
function Calculater() {
    
  const [result, setresult] = useState("");
  const handelclick=(e)=>{
      setresult(result.concat(e.target.value));
  }
  const clearDisplay=()=>{
      setresult("");
  }
  const handelequal=()=>{
      setresult(eval(result).toString())

  }
    return (
       
        <div className="calulater">
            <input type="text" placeholder="0" id="answer" value={result}/>
            <input type="button" value="9" className="button" onClick={handelclick}/>
            <input type="button" value="8" className="button" onClick={handelclick}/>
            <input type="button" value="7" className="button" onClick={handelclick}/>
            <input type="button" value="6" className="button" onClick={handelclick}/>
            <input type="button" value="5" className="button" onClick={handelclick}/>
            <input type="button" value="4" className="button" onClick={handelclick}/>
            <input type="button" value="3" className="button" onClick={handelclick}/>
            <input type="button" value="2" className="button" onClick={handelclick}/>
            <input type="button" value="1" className="button" onClick={handelclick}/>
            <input type="button" value="0" className="button" onClick={handelclick}/>
            <input type="button" value="." className="button" onClick={handelclick}/>
            <input type="button" value="+" className="button" onClick={handelclick}/>
            <input type="button" value="-" className="button" onClick={handelclick}/>
            <input type="button" value="*" className="button" onClick={handelclick}/>
            <input type="button" value="/" className="button" onClick={handelclick}/>
            <input type="button" value="%" className="button" onClick={handelclick}/>
            <input type="button" value="clear" className="button button1" onClick={clearDisplay}/>
            <input type="button" value="=" className="button button1" onClick={handelequal}/>
            
        </div>
       
    )
}

export default Calculater
