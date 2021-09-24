import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Footer.css'
export default function Footer() {
    return (
        <div>
            <div className="connect">
                <div className="link">
                    <div className="insta">
                        <p><a href="https://www.instagram.com/vaishno_rp/">Instagram</a></p>
                    </div>
                    <div className="linkedin">
                        <p><a href="https://www.linkedin.com/in/vaishnavi-pampatwar-0519461aa/">Linkedin</a></p>
                    </div>
                    <div className="twit">
                        <p><a href="https://twitter.com/VaishnaviPampa3">Twitter</a></p>
                    </div>
                    <div className="git">
                        <p><a href="https://github.com/vaishnopampatwar">Github</a></p>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>&#169; Vaishnavi Ram Pampatwar, 2021 . All rights reserved</p>
            </footer>
        </div>
    )
}

