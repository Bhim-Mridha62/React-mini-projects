import React, { useState,useEffect } from 'react';
import './CarouselNetflix.css';
import { GrNext } from "react-icons/gr";
function CarouselNetflix({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    if (currentIndex < 10) {
      setCurrentIndex(currentIndex+1)
    }else{
      setCurrentIndex(0)
    }
  }
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => {
      clearInterval(interval);
    };
  },[currentIndex]);

  return (
    <div className="carousel" style={{ backgroundColor: 'black' }}>
      <div className="image-container">
        <a href={images[currentIndex].link} target="_blank" >
          <img
            style={{ width: '1200px', height: '675px' }}
            className="carousel-image bbb"
            src={images[currentIndex].image}
            alt={images[currentIndex].name}
          />
        </a>
      </div>
      <button className="carousel-button next" onClick={goToNextSlide}>
        <GrNext />
      </button>
      <div className="detail" style={{
        color: "white", position: "absolute", fontSize: "30px", marginTop: "-470px",
        marginLeft: "800px"
      }}>
        {images[currentIndex].detail}
      </div>
      <p style={{
        fontSize: "25px", color: "white", position: "absolute", width: "600px", marginTop: "-200px",
        marginLeft: "800px",
      }}>{images[currentIndex].title}</p>
      <p style={{ fontSize: "19px", color: "white", position: "absolute", marginLeft: "800px" }}>Starring: {images[currentIndex].Starring}</p>
      <p style={{
        fontSize: "20px", color: "white", position: "absolute",
        marginTop: "155px",
        marginLeft: "800px"
      }}>Creators: {images[currentIndex].Creators}</p>
    </div>
  );
}

export default CarouselNetflix;
