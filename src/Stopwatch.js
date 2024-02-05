import React,{useState,useEffect} from 'react'
import "./StopwatchCSS.css"
function Stopwatch() {
    const [time, setTime] = useState(0);
    const [itsRunning, setItsRunning] = useState(false);

    useEffect(() => {
     let intervalid;
     if (itsRunning) {
         
         intervalid=setInterval(()=>setTime(time+1),10);
     }
      return ()=>clearInterval(intervalid);

    }, [time,itsRunning])

    const hours=Math.floor(time/360000)

    const minutes=Math.floor((time % 360000) /6000)
    const seconds=Math.floor((time % 6000)/100)
    const miliseconds=Math.floor(time%100);
    const reset=()=>{
        setTime(0);
    }
    const startandstop=()=>{
        setItsRunning(!itsRunning);
    }
    return (
        <div className="container">
            <div className="itsbody">
                <p>
                 {hours.toString().padStart(2,"0")}:
                 {minutes.toString().padStart(2,"0")}:
                 {seconds.toString().padStart(2,"0")}:
                 {miliseconds.toString().padStart(2,"0")}
                </p>
            </div>
            <div className="button">
                <button className="stopwatch-button" onClick={startandstop}>
                    {itsRunning ? "Stop" : "Start"}
                </button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch
