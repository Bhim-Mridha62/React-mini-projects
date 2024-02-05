import axios from "axios";
import React, { useState } from "react";
import "./MovieList.css"
function MovieList() {
  const [movietype, setMovietype] = useState();
  const [Moviename, setMoviename] = useState([]);
  const FetchMovie = () => {
    const apiurl = `http://www.omdbapi.com/?s=${movietype}&apikey=33cd9e2e`;
    axios.get(apiurl)
    .then((res) => {
      console.log(res.data.Search);
      setMoviename(res.data.Search)
    })
    .catch(()=>{
        console.log("Enter valid name");
    })
  };
  const handelmovietype = (e) => {
    setMovietype(e.target.value);
    // console.log(e.target.value);
  };
  const onKeyPress=(e)=>{
    if (e.key==='Enter') {
        FetchMovie();
    }
  }
  const handelclick = () => {
    FetchMovie();
  };
  return (
    <div>
      <input type="search" value={movietype} onChange={handelmovietype}
       onKeyPress={onKeyPress}/>
      <button type="submit" onClick={handelclick}> Search</button>
      <div className="all-movies">
              <h2>Number of Result{Moviename.length }</h2>
          {    
              Moviename && Moviename.length >0 ?
              Moviename.map((item,index)=>(
               
            <div className="movies" key={index}>
             <img src={item.Poster} alt="Movie_image"/>
              <p>{item.Title}</p>
              <p>{item.Year}</p>
              <p>{item.Title}</p>
            </div>
          )) 
          :null
          }
      </div>
    </div>
  );
}

export default MovieList;
