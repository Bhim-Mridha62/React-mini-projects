import React, { useState } from 'react'
function LocalStorage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [valueName, setvalueName] = useState("");
    const [valuePassword, setvaluePassword] = useState("");
    const handelthis = () => {
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);
    }
    const handelget = () => {
        setvalueName(localStorage.getItem('name'))
        setvaluePassword(localStorage.getItem('password'))
      }
      
    const handelRemove=()=>{
        localStorage.removeItem('name');
        localStorage.removeItem('password');
    }
    const handelClear=()=>{
        localStorage.clear();
    }
    return (
        <div>
            <h3>Name:</h3>
            <input type="text" value={name} placeholder="Enter name"
                onChange={(e) => setName(e.target.value)} />
            <h3>Password:</h3>
            <input type="text" value={password} placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)} />
            <div>
                <button onClick={handelthis}>Done</button>
            </div>
            {/* { localStorage.getItem('name') && (
                <div>
                    Name:{localStorage.getItem('name')}<br />
                </div>
            )
            }

            { localStorage.getItem('password') && (
                <div>
                    password:{localStorage.getItem('password')}
                </div>
            )
            } */}
            {/* Name:{localStorage.getItem('name')}<br/>
            password:{localStorage.getItem('password')} */}
            <div>
                <button onClick={handelRemove}>Remove</button>
                </div>
            <div>
                <button onClick={handelget}>Get value</button>
                </div>
            <div>
                <button onClick={handelClear}>Clear</button>
                </div>
        <p> Name:{valueName} <br/>Password:{valuePassword}</p>
        </div>
    )
}

export default LocalStorage
