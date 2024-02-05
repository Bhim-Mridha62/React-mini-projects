import React, { useState, useEffect } from 'react'
import axios from "axios";
import "./Containt.css"
function Containt() {
    const [StoreError, setStoreError] = useState("");
    const [Action, setAction] = useState([]);
    const [Comedy, setComedy] = useState([]);
    const [Horror, setHorror] = useState([]);
    const [SuperHero, setSuperHero] = useState([]);
    const [Drama, setDrama] = useState([]);
    const [Documentary, setDocumentary] = useState([]);
    const [Fantasy, setFantasy] = useState([]);
    const [comedyFilm , setcomedyFilm ] = useState([])
    const [Romance, setRomance] = useState([]);
    const [Adventure, setAdventure] = useState([]);
    const [Cartoon, setCartoon] = useState([]);
    const movieData = [
        { category: 'Action', movies: Action },
        { category: 'Adventure', movies: Adventure },
        { category: 'SuperHero', movies: SuperHero },
        { category: 'Horror', movies: Horror },
        { category: 'Comedy', movies: Comedy },
        { category: 'Romance', movies: Romance },
        { category: 'comedyFilm', movies: comedyFilm },
        { category: 'Documentary', movies: Documentary },
        { category: 'Drama', movies: Drama },
        { category: 'Fantasy', movies: Fantasy },
        { category: 'Cartoon', movies: Cartoon },
        
      ];
      useEffect(() => {
        const fetchData = (url, setState) => {
          axios.get(url)
            .then((res) => {
              setState(res.data.Search);
            })
            .catch((error) => {
                setStoreError(error.message);
            });
        };
      
        const FetchAction = () => {
          fetchData("https://www.omdbapi.com/?s=action&apikey=33cd9e2e", setAction);
        };
      
        const FetchAdventure = () => {
          fetchData("https://www.omdbapi.com/?s=Adventure%20film&apikey=33cd9e2e", setAdventure);
        };
      
        const FetchComedy = () => {
          fetchData("https://www.omdbapi.com/?s=comedy&apikey=33cd9e2e", setComedy);
        };
      
        const FetchHorror = () => {
          fetchData("https://www.omdbapi.com/?s=horror&apikey=33cd9e2e", setHorror);
        };
      
        const FetchSuperHero = () => {
          fetchData("https://www.omdbapi.com/?s=superhero&apikey=33cd9e2e", setSuperHero);
        };
      
        const FetchDrama = () => {
          fetchData("https://www.omdbapi.com/?s=drama&apikey=33cd9e2e", setDrama);
        };
      
        const FetchDocumentary = () => {
          fetchData("https://www.omdbapi.com/?s=documentary&apikey=33cd9e2e", setDocumentary);
        };
      
        const FetchFantasy = () => {
          fetchData("https://www.omdbapi.com/?s=fantasy&apikey=33cd9e2e", setFantasy);
        };
      
        const FetchcomedyFilm = () => {
          fetchData("https://www.omdbapi.com/?s=comedy%20film&apikey=33cd9e2e", setcomedyFilm);
        };
      
        const FetchRomance = () => {
          fetchData("https://www.omdbapi.com/?s=romance%20film&apikey=33cd9e2e", setRomance);
        };
      
        const FetchCartoon = () => {
          fetchData("https://www.omdbapi.com/?s=cartoon&apikey=33cd9e2e", setCartoon);
        };
      
        FetchAction();
        FetchAdventure();
        FetchComedy();
        FetchHorror();
        FetchSuperHero();
        FetchDrama();
        FetchDocumentary();
        FetchFantasy();
        FetchcomedyFilm();
        FetchRomance();
        FetchCartoon();
      }, []);
      
    return (
        <div>
            {StoreError.length===0?
            <>
          {movieData.map((category, index) => (
            <div className="MovieContainer" key={index}>
              <div className="MovieTitle">{category.category} Movie</div>
              <div className="AllMovie">
                {category.movies.map((item, movieIndex) => (
                  <div className="card" key={movieIndex}>
                    <img style={{ width: '300px', height: '400px' }} src={item.Poster} alt="Movie Poster" />
                    <p className="MovieTitle">Name:{item.Title}</p>
                    <p className="MovieYear">Year:{item.Year}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </>
              :<p className="Error">{StoreError}</p>}
        </div>
      );
 }
export default Containt