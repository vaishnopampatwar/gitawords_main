import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './card.css'

export const Contact = () => {
    const history = useHistory();
    const [user, setUser] = useState({ name: '', email: '', message: '' })
    let name, value;

    const handleInputes = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, message } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        })
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Message Failed");
            console.log('Message Failed');
        } else {
            window.alert('Message Sent');
            console.log('Message sent');
        }
    }
    return (
        <div className="container-c">
            <div className="contact-card">
                <div className="contact-l">
                    <img src="img/rocket.png"></img>
                </div>
                <div className="contact-r">
                    <h1>Get in Touch</h1>
                <form method="POST" >
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Enter Name" autoComplete="off"
                            value={user.name} onChange={handleInputes} />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" autoComplete="off"
                            value={user.email} onChange={handleInputes} />
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="message" className="form-control" id="message" placeholder="Enter Your Message" autoComplete="off"
                            rows="8" value={user.message} onChange={handleInputes} />
                    </div>
                    <button type="submit" name="submit" id="submit" className="btn btn-primary" onClick={PostData}>Submit</button>
                </form>
                </div>
            </div>
        </div>
    )
}
