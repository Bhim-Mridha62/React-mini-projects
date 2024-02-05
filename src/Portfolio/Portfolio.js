import React from 'react'
import Music from './music.js'
import "./Portfolio.css"
import RotateSqrare from './RotateSqrare.js'
// import Clock from './Clock.js'
import SpeechToText from "./SpeechToText.js"
import TextTranslate from './TextTranslate.js'
// const List = (p) => React.createElement('div', { className: "Style" }, `Hello ${p.name}`)
function Portfolio() {
    return (
        <>
            <div className="container">
                <div className="Portfolio">Portfolio</div>
                <nav>
                    <a href="Home">Home</a>
                    <a href="About">About</a>
                    <a href="Contact">Contact</a>
                    <a href="Service">Service</a>
                </nav>

            </div>
            <div className="music">
                <Music />
            </div>
            <div>
                <RotateSqrare />
            </div>
            <div>
                {/* <Clock/> */}
            </div>
            <div>
                <TextTranslate/>
            </div>
            <div>
                <SpeechToText/>
            </div>
        </>
    )
}

export default Portfolio
