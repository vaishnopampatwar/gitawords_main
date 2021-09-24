import React from 'react';
import './Emotion.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 


const Emotion = (props) => {
    return (
        <><h1>Emotion section</h1>
        <Link to='/angry'><button>Emotion</button></Link>
        <Link to='/confusion'><button>Emotion</button></Link></>
        
    )
}
export default Emotion;



// <Link to={props.path}></Link>
//  <Link to="/angry"><h1>Geeta have solution for every emotion</h1></Link>
//         <Link to="/angry"> <button>Here</button></Link>
{/*  */}