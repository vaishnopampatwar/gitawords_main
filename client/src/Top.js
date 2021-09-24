import React from 'react'
import './Top.css'

function Top(props) {
    return (
        <div className="Top">
            <div className="overlay"></div>
            <img src={props.src}  alt="Emotions"></img>
            <div className="content">
            <h1>{props.head}</h1>
            <h2>{props.text}</h2>
            </div>
        </div>
    )
}

export default Top
