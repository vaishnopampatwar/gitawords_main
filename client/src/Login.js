import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const loginuser =async(e)=>{
        e.preventDefault();
        const res=await fetch('/signin',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })
        const data= res.json();
        if(res.status == 400 || !data){
            window.alert('Invalid Login');
        }
        else{
            window.alert('login success');
            history.push('/')
        }
    }
    return (
        <div>
             <section className="login">
                <form method='POST'>
                    <div className=" form-group form-row">
                        <div className="form-group col-md-6">
                            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-6">
                            
                            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" onClick={loginuser} name="signup" id="signup" placeholder="Register" />
                        </div>
                    </div>
                </form>
                <p>Not a Member?
                <p className='nav-item'><Link to='/signup'>Register Here</Link></p>
                </p>
            </section>
        </div>
    )
}

export default Login
