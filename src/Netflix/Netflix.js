// import axios from 'axios';
import React, { useState } from 'react'
import NetflixNavbar from './NetflixNavbar'
import CarouselNetflix from './CarouselNetflix'
import Containt from './Containt';
const CarouselData = require('./Carousel.json');
function Netflix() {
  const [movieData, setMovieData] = useState([]);

  const receiveMovieResults = (data) => {
    setMovieData(data);
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <NetflixNavbar sendMovieResults={receiveMovieResults} />
      {console.log("parent", movieData)}
      {console.log(movieData)}
      {movieData.length === 0 ? (
        <>
          <CarouselNetflix images={CarouselData} style={{ backgroundColor: 'black' }} />
          <Containt />
        </>
      ) : (<div
        style={{
          display: 'flex', color: 'white', padding: '9px', gap: '42px', overflowX: 'auto',
          flexFlow: 'wrap'
        }}
      >{
          movieData.map((data, index) => (
            <div key={index}>
              <img style={{ width: '280px', height: '450px', objectFit: 'cover' }} src={data.Poster} alt="Movie Poster" />
              <p style={{ fontSize: '25px', fontWeight: '500px', width: '300px' }}>Name:{data.Title}</p>
              <p style={{ fontSize: '25px', fontWeight: '500px' }}>Year:{data.Year}</p>
            </div>
          ))}
      </div>
      )}
    </div>
  );
}

export default Netflix