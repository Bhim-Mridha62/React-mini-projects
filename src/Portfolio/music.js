import React, { useState, useRef,useEffect } from 'react';
import { MdSkipPrevious } from 'react-icons/md';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BiPauseCircle } from 'react-icons/bi';
import { BiSkipNext } from 'react-icons/bi';
import { AiTwotoneSound,AiFillSound } from "react-icons/ai";
import { IoMdVolumeOff } from "react-icons/io";
// import bhim from "../Netflix/NetflixVideo1.MP4"
import './music.css';
function Music() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const audioList = require('./music.json');
  const currentItem = audioList[currentIndex];
  const [duration, setDuration] = useState(0);
  const [PlayTime, setPlayTime] = useState(0);
  const [Volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);
 
  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(audioList.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    audioRef.current.load(); // Reset the audio
    audioRef.current.addEventListener('canplay', handlePlay); // Add event listener
    setIsPlay(true);
  };

  const handleNext = () => {
    if (currentIndex === audioList.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setIsPlay(true);
    audioRef.current.load(); // Reset the audio
    audioRef.current.addEventListener('canplay', handlePlay); // Add event listener
  };

  const handlePlay = () => {
    audioRef.current.play(); // Play the audio
    audioRef.current.removeEventListener('canplay', handlePlay); // Remove the event listener
  };

  const handlePlayPause = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlay(!isPlay);
  };
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      setDuration(duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setPlayTime(currentTime);
    }
  };

  const handelonTimeUpdate = () => {
    setPlayTime(audioRef.current.currentTime);
  }
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
 const FornatDuration=(duration)=>{
   const minutes=Math.floor(duration/60);
   const seconds=Math.floor(duration%60);
   return `${minutes}:${seconds.toString().padStart(2,'0')}`;
 }
 const HandelRangeChange=(e)=>{
   const time=e.target.value;
   audioRef.current.currentTime=time;
 }
 const HandelVolumeChange=(e)=>{
  const audio=document.getElementById("audio")
   const NewVolume=parseFloat(e.target.value)
   audio.volume=NewVolume
   setVolume(NewVolume)
 }
 const VolumeOnOff=(NewVolume)=>{
  const audio=document.getElementById("audio")
  audio.volume=NewVolume
   setVolume(NewVolume)
 }
  return (
    <>
      <div className="music-display">
        <img
          className={isPlay ?'Rotate':'Norotate'}
          src={currentItem.cover}
          alt="Album Cover"
        />
        <h2>Music Name:{currentItem.name}</h2>
        <audio
         id="audio"
         style={{display:'contents'}}
          ref={audioRef}
          src={currentItem.musicSrc}
          onEnded={handleNext}
          onTimeUpdate={handelonTimeUpdate}
        ></audio>
        <div className='View-timeline'>
       <p  className={'CurrentTime'}>{formatTime(PlayTime)}</p>
        <input 
        className="InputRange"
        type="range" 
        min="0" 
        max={duration} 
        value={PlayTime} 
        onChange={HandelRangeChange}/>
        <p style={{color:'white',display: 'contents'}}
        >{FornatDuration(duration)}</p>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <button className='Control-button' onClick={handlePrev}>
          <MdSkipPrevious />
        </button>
        <button className='Control-button' onClick={handlePlayPause}>
          {isPlay ? <BiPauseCircle /> : <BsFillPlayCircleFill />}
        </button>
        <button className='Control-button' onClick={handleNext}>
          <BiSkipNext />
        </button>
        </div>
       
        <div className="VolumeDiv">
        {Volume === 0 ? (
        <button onClick={()=>VolumeOnOff(0.5)}>
          <IoMdVolumeOff />
        </button>
      ) : (
        <button onClick={()=>VolumeOnOff(0)}>
          <AiFillSound />
        </button>
      )}
          <input type="range" 
          min="0" 
          step="0.1"
          max="1"
          value={Volume}
          onChange={HandelVolumeChange}
          className="VolumeRange"/>
          <AiTwotoneSound/>{Volume}
        </div>
    
        <h2>singer:{currentItem.singer}</h2>

      </div>
      {/* <video src={bhim} autoPlay loop></video> */}
    </>
  );
}

export default Music;
