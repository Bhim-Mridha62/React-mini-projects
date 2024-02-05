import React, { useState, useEffect } from 'react'
function MernFrom() {
    const [From, setFrom] = useState({})
    const [UserData, setUserData] = useState([]);
    const [EditName, setEditName] = useState('');
    const [EditPassword, setEditpassword] = useState('');
    const [EditUserId, setEditUserId] = useState('');
    const handelFrom = (e) => {
        // console.log(e.target.value,e.target.name);
        setFrom({
            ...From,
            [e.target.name]: e.target.value
        })
    }
    const HandelSubmit = async (e) => {
        e.preventDefault()
        const responce = await fetch('http://localhost:8080/demo', {
            method: 'POST',
            body: JSON.stringify(From),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(await responce.json());
    }
    const handelGetData = async () => {

        const responce = await fetch('http://localhost:8080/demo', {
            method: 'GET',
        })
        // const data=await responce.text();
        // console.log(data);
        setUserData(await responce.json());
    }
    const handleDeleteUser = (id) => {
       fetch(`http://localhost:8080/demo/${id}`,{
        method:'DELETE',
       })
       .then(()=>{
        setUserData(UserData.filter(UserData=>UserData._id!==id));
       })
    }
    const handleEditUser=(id)=>{
         const UserToEdit=UserData.filter((UserData)=>UserData._id===id)
         if (UserToEdit && UserToEdit.length > 0) {
            console.log(UserToEdit);
            setEditUserId(UserToEdit[0]._id);
            console.log(UserToEdit[0]._id);
            setEditName(UserToEdit[0].UserName);
            setEditpassword(UserToEdit[0].Password);
          }
          
    }
    useEffect(() => {
        handelGetData();
    }, [])
    const handleUpdateUser=(id)=>{
        const Updatedata={EditName,EditPassword};
        fetch(`http://localhost:8080/demo/${id}`,{
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(Updatedata),
        })
        .then((responce)=>responce.json)
        .then((data)=>{
            setFrom({...From,[data._id]:data})
            setEditName('');
            setEditpassword('');
        })
        .catch((error) => console.error(error));
    }
    return (
        <div>
            <form onSubmit={HandelSubmit}>
                <span>UserName</span>
                <input type="text" name='UserName' onChange={handelFrom} />
                <span>Password</span>
                <input type="text" name='Password' onChange={handelFrom} />
                <input type="submit" />
            </form>
            <button onClick={handelGetData}>Get Data</button>
            <div>
                {
                    UserData.map(item => (
                        <ul key={item._id}>
                                <li key={item._id}>UserName:{item.UserName},Password:{item.Password}</li>
                                <button onClick={() => handleEditUser(item._id)}>Edit</button>
                                <button onClick={() => handleDeleteUser(item._id)}>Delete</button>
                        </ul>
                    ))
                }
            </div>
            <div>
          <input type="text" value={EditName || ''} onChange={(e) => setEditName(e.target.value)} />
          <input type="text" value={EditPassword || ''} onChange={(e) => setEditpassword(e.target.value)} />
          <button onClick={()=>handleUpdateUser(EditUserId)}>Update</button>
            </div>
        </div>
    )
}

export default MernFrom;