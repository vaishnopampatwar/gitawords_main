import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardTemp.css'

function CardTemp(props) {
    return (
        <div className="cardTemp">
            <Link to={props.path}>
            <ul>   
                <Card className="text-center Card">   
                <div className="overlay"></div>
                  <Card.Img src={props.img} />
                  <h1>{props.body}</h1>
                </Card>
            </ul>
            </Link>
        </div>
    )
}

export default CardTemp
