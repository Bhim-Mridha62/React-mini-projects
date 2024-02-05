import React, { useState} from 'react';
import axios from 'axios';
import './NetflixNavbar.css';
import { GoogleLogout } from 'react-google-login';

function NetflixNavbar({sendMovieResults }) {
  const [searchMovie, setSearchMovie] = useState('');
  // const [movieResults, setMovieResults] = useState([]);
 const [ShowPopup, setShowPopup] = useState(false);
 const clientId = `41342245073-dre3t884bf4mg4cigha9b4knib4pjg38.apps.googleusercontent.com`;
  const fetchMovie = () => {
    const apiurl = `http://www.omdbapi.com/?s=${searchMovie}&apikey=33cd9e2e`;
    axios
      .get(apiurl)
      .then((res) => {
        console.log("child", res.data.Search);
        const data = res.data.Search || []
        // setMovieResults(data);
        sendMovieResults(data);
      })
      .catch((error) => {
        console.log('Error',error);
      });
  };
  const handleInput = (e) => {
    setSearchMovie(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchMovie();
    }
  };
  const handleButtonClick = () => {
    setShowPopup(true)
  };
  const HandelLogutSuccess=()=>{
    console.log("Logout sucess")
  }
  const handleLogoutFailure = (error) => {
    if (error.error === "popup_closed_by_user") {
      console.log("User closed the login popup");
      // Handle the situation when the user closes the popup
    } else {
      console.error("Login failed:", error);
      // Handle other login failure cases
    }
  };
  return (
    <>
      <div className="NetflixNavbar">
        <div className="netflix_logo">
          <img
            src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
            alt="neflix_logo"
            height="60px"
          />
          <input type="text" placeholder="Search movie" onChange={handleInput} onKeyPress={handleKeyPress} />
          <div className="nav_right">
            UNLIMITED TV SHOWS & MOVIES
            <button className="btn_join_now">JOIN NOW</button>
            <button className="btn_sign" onClick={handleButtonClick}>SIGN IN</button>
          </div>
        </div>
        {ShowPopup && (
        <div id="popup" className="popup">
            <div className="popup-content">
            {/* Content of the popup */}
            <h2>Popup Content</h2>
            <p>This is the content of the popup.</p>
            <button onClick={()=>setShowPopup(false)}>Click</button>
            <GoogleLogout
            clientId={clientId}
              buttonText="Log out"
              onLogoutSuccess={HandelLogutSuccess}
              onFailure={handleLogoutFailure}
            />
          </div>
        </div>
      )}
      </div>
    </>
  );
}
export default NetflixNavbar;
