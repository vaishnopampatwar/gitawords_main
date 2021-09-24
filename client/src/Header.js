import React from 'react';
import './Header.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CardTemp from './CardTemp';

export default function Header() {
    return (
        <div className="Header_head">
            <div className="Header_back">
                <div className="overlay"></div>
                <h1>"<span className="head_color">Shri Krishna </span>said : <i>O Arjuna</i>, There are three gates leading to the hell - Lust, Anger and Greed. Every sane man should give these up, for they lead to the degradation of the Soul."</h1>
            </div>
            <iframe id="dcd48fd7-cf1b-4a77-ab5c-f07890a374f5" src="https://www.vectary.com/viewer/v1/?model=dcd48fd7-cf1b-4a77-ab5c-f07890a374f5&env=studio2" frameborder="0" width="100%" height="480"></iframe>
            <iframe id="668914c0-d5aa-407d-8962-83656a68e469" src="https://www.vectary.com/viewer/v1/?model=668914c0-d5aa-407d-8962-83656a68e469&env=studio3" frameborder="0" width="100%" height="480"></iframe>
            <div className="ic_anim">
            <img className="ic" src="img/f1.png"/>
            <img className="ic1" src="img/f2.png"/>
            <img className="ic2" src="img/f3.png"/>
            <p>One solution for your every Emotion</p>
            {/*<a href='https://www.freepik.com/vectors/flower'>Flower vector created by Sapann-Design - www.freepik.com</a>*/}
            <div >
                <ul className="emotions">
                    <CardTemp
                        img='img/confuse.jpg'
                        body='CONFUSION'
                        path='/confusion'
                    />
                    <CardTemp
                        img='img/death.jpg'
                        body='DEATH'
                        path='/death'
                    />
                    <CardTemp
                        img='img/anger.jpg'
                        body='ANGER'
                        path='/angry'
                    />
                    <CardTemp
                        img='img/dipression.jpg'
                        body='DEPRESSION'
                        path='/depression'
                    />
                    <CardTemp
                        img='img/envy.jpg'
                        body='ENVY'
                        path='/envy'
                    />
                    <CardTemp
                        img='img/dis.jpg'
                        body='DISCRIMINATED'
                        path='/discriminated'
                    />
                    <CardTemp
                        img='img/lazy.jpg'
                        body='LAZINESS'
                        path='/lazy'
                    />
                    <CardTemp
                        img='img/fear.jpg'
                        body='FEAR'
                        path='/fear'
                    />
                    <CardTemp
                        img='img/sin.jpg'
                        body='SINFULLNESS'
                        path='/sin'
                    />
                    <CardTemp
                        img='img/greed.jpg'
                        body='GREED'
                        path='/greed'
                    />
                </ul>
            </div>
            </div>
            <div className="chat_icon" onClick="clickchat">
            <i class="fas fa-comments"></i>
            </div>
            <div className="chat_box">
            
            </div>
        </div>
    )
}


