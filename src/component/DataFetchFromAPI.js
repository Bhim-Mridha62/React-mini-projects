//this for class base component

// import React, { Component } from 'react';

// class DataFetchFromAPI extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        ShowData:[]
//     };
//   };
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(Response=>Response.json())
//     .then(jsonData =>
//       this.setState({ShowData:jsonData})
//       )
//     .catch(error=>{
//       console.log(error);
//     })
//  }
//   render() {
//     return (
//       <div>
//         {
//           this.state.ShowData.map(data=>(
//           <div key={data.id}>
//           <p>{data.title}</p>
//           <p>{data.body}</p>

//           </div>
//           )

//           )
//         }
//       </div>
//     );
//   }
// }

//export default DataFetchFromAPI;

//this for function base component

import React, { useState, useEffect } from "react";

function DataFetchFromAPI() {
  const [showData, setshowData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonData) => {
      setshowData(jsonData)
      const particularId=jsonData.find((data)=>data.id===1)
      console.log(particularId);
    });
  }, [0]);
  return (
    <div>
      <div>
        bfsbdj h dsv ivbgisbvsv
      </div>
      {showData.map((data) =>
       (
        <div key={data.id}>{data.title}</div>
  ))}
    </div>
  );
}

export default DataFetchFromAPI;
