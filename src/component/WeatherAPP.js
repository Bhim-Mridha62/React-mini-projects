import axios from "axios";
import React, { useEffect, useState } from "react";
import "./WeatherAppCSS.css";

function WeatherAPP() {
  const [cityname, setcityname] = useState("");
  const [temp, settemp] = useState("");
  const [speed, setspeed] = useState("");
  const [validinput, setvalidinput] = useState(null);
  const [humidity, sethumidity] = useState("");
  const [pressure, setpressure] = useState("");

  const fetchUserData = () => {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b7ac1e59d4f6d285364d2213fc8d5a14`;
    axios.get(apiurl)
      .then((res) => {
        settemp(res.data.main.temp);
        sethumidity(res.data.main.humidity);
        setspeed(res.data.wind.speed);
        setpressure(res.data.main.pressure);
        setvalidinput("");
        console.log(res);
      })
      .catch(() => {
        setvalidinput("enter a valid city name");
      });
  };

  useEffect(() => {
    fetchUserData();
  }, [cityname]);

  const handelchange = (e) => {
    setcityname(e.target.value);
  };

  const handelthis = () => {
    fetchUserData();
  };

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name"
            value={cityname}
            name="cityname"
            onChange={handelchange}
          />
          <button>
            <img src="img/search.png" alt="img" onClick={handelthis} />
            click
          </button>
          {
            validinput ? (
            <p>{validinput}</p>
            ):(
              <div>
              <p>Temperature: {temp}</p>
              <p>Wind Speed: {speed}</p>
              <p>Humidity: {humidity}</p>
              <p>Pressure: {pressure}</p>
              </div>
            )
          }
          {/* {validinput ? (
            <p className="error-message">{validinput}</p>
          ) : (
            <div className="weather-info">
              <p>Temperature: {temp}</p>
              <p>Wind Speed: {speed}</p>
              <p>Humidity: {humidity}</p>
              <p>Pressure: {pressure}</p>
            </div>
          )}
          */}
        </div>
      </div>
    </div>
  );
}

export default WeatherAPP;

