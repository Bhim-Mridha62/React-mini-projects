import React, { useState } from 'react';
import Netflix from './Netflix';
import './NetflixClone.css';
import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai';
import { GoogleLogin } from 'react-google-login';
import video1 from './NetflixVideo1.MP4';
const NetflixClone = () => {
  const [showNetflix, setShowNetflix] = useState(false);
  const [selectedHeading, setSelectedHeading] = useState('');
  const [Email, setEmail] = useState('');
  const clientId = `41342245073-vfj52ff575k6r3auqmlu1cjmcajg0jqm.apps.googleusercontent.com`; // Replace with your OAuth client ID
  const toggleContent = (heading) => {
    setSelectedHeading(selectedHeading === heading ? '' : heading);
  };

  const handleClick = () => {
    if (validateEmail(Email)) {
      setShowNetflix(true);
    } else {
      if (Email !== '') {
        alert('Enter a valid email');
      } else {
        alert('Please enter your email to subscribe');
      }
    }
  };

  const validateEmail = (input) => {
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
    return emailRegex.test(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleLoginSuccess = (response) => {
    console.log('Logged in successfully:', response);

  };

  const handleLoginFailure = (error) => {
    console.error('Login failed:', error);

  };


  return (
    <>
      {showNetflix ? (
        <Netflix />
      ) : (
        <>
          <div className="First_div">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png?20190206123158"
              alt="neflix_logo"
            />
            <select>
              <option>हिन्दी</option>
              <option>English</option>
            </select>
            <GoogleLogin
              clientId={clientId}
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
              cookiePolicy={'single_host_origin'}
              className="SigninButtom"
            >
              Sign in
            </GoogleLogin>
            <div>
              <h1 style={{ fontSize: '50px', height: '0px' }}>Unlimited movies, TV shows and more</h1>
              <p style={{ fontSize: '30px', fontWeight: '500px', height: '0px', marginLeft: '205px' }}>
                Watch anywhere. Cancel anytime.
              </p>
              <p style={{ fontSize: '23px', marginLeft: '91px', fontWeight: '500' }}>
                Ready to watch? Enter your email to create or restart your membership.
              </p>
              <input
                type="email"
                placeholder="Enter email"
                onKeyPress={handleKeyPress}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button onClick={handleClick}>Get Started</button>
              {/* <GoogleLogin
                clientId={clientId}
                buttonText="Login with Gmail"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={'single_host_origin'}
              /> */}
            </div>
          </div>
          <div className="first_video">
            <div style={{ color: 'white' }}>
              <h1 style={{ fontSize: '60px' }}>Enjoy on your TV</h1>
              <p style={{ fontSize: '17px', fontWeight: 'bold' }}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="video-img">
              <video src={video1} autoPlay loop className="video-element"></video>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="img" className="image-element" />
            </div>
          </div>
          <div className="Second_div">
            <div>
              <img
                src="https://occ-0-2482-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
                alt="Netflix Logo"
              />

            </div>
            <div style={{ textAlign: 'center' }}>
              <h1>Create profiles for kids</h1>
              <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
          </div>
          <div className="third_div">
            <div>
              <h3 onClick={() => toggleContent('What is Netflix?')}>
                What is Netflix?{' '}
                <p style={{ display: 'contents' }}>{selectedHeading === 'What is Netflix?' ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}</p>
              </h3>
              {selectedHeading === 'What is Netflix?' && (
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on
                  thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one
                  low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>
              )}
            </div>
            <div>
              <h3 onClick={() => toggleContent('What can I watch on Netflix?')}>
                What can I watch on Netflix?
                <p style={{ display: 'contents' }}>{selectedHeading === 'What can I watch on Netflix?' ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}</p>
              </h3>
              {selectedHeading === 'What can I watch on Netflix?' && (
                <p>
                  Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch
                  as much as you want, anytime you want.
                </p>
              )}
            </div>
            <div>
              <h3 onClick={() => toggleContent('How much does Netflix cost?')}>
                How much does Netflix cost?
                <p style={{ display: 'contents' }}>{selectedHeading === 'How much does Netflix cost?' ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}</p>
              </h3>
              {selectedHeading === 'How much does Netflix cost?' && (
                <p>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹
                  149 to ₹ 649 a month. No extra costs, no contracts.
                </p>
              )}
            </div>
            <div>
              <h3 onClick={() => toggleContent('How do I cancel?')}>
                How do I cancel?
                <p style={{ display: 'contents' }}>{selectedHeading === 'How do I cancel?' ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}</p>
              </h3>
              {selectedHeading === 'How do I cancel?' && (
                <p>
                  Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.
                  There are no cancellation fees start or stop your account anytime.
                </p>
              )}
            </div>
            <div>
              <h3 onClick={() => toggleContent('Is Netflix good for kids?')}>
                Is Netflix good for kids?
                <p style={{ display: 'contents' }}>{selectedHeading === 'Is Netflix good for kids?' ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}</p>
              </h3>
              {selectedHeading === 'Is Netflix good for kids?' && (
                <p>
                  The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and
                  films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of
                  content kids can watch and block specific titles you don’t want kids to see.
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NetflixClone;
