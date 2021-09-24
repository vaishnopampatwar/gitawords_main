import React from 'react'
import { Card } from 'react-bootstrap';
import './card.css'

function TabTemp(props) {
    return (
        <div>
            <div className="TabTemp">
            <Card className="text-center card">
                <h1>{props.head}</h1>
                <h2>{props.sub}</h2>
                    <h3>{props.body}</h3>
                </Card>
            </div>
        </div>
    )
}

export default TabTemp
