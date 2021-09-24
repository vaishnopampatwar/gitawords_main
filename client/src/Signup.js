import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom';

function Signup() {
    const history = useHistory();
    const [user,setUser] = useState({
        name: '' ,email :'',password:'',cpassword:''
    })
    let name,value;
    const handleInputes = (e) =>{
        console.log(e)
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value}); 
    }
    const PostData = async (e) => {
        e.preventDefault();
        const{name ,email ,password,cpassword}=user;
        const res= await fetch('/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,email,password,cpassword
            })
        });
        const data = await res.json();
        if(data.status=== 422 || !data){
            window.alert('INVALID REGISTRATION');
            console.log('INVALID REGISTRATION');
        }else{
            window.alert('sucess REGISTRATION');
            console.log('sucess REGISTRATION');
            history.push('/login')
        }
    }
    return (
        <div>
            <section className="signup">
                <form method='POST' id='register-form'>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name"  
                            autoComplete='off' value={user.name} onChange={handleInputes}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" 
                            autoComplete='off' value={user.email} onChange={handleInputes}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" 
                            autoComplete='off' value={user.password} onChange={handleInputes}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="cpassword" name="cpassword" id="cpassword" placeholder="Confirm Password"
                            autoComplete='off' value={user.cpassword} onChange={handleInputes}/>
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" onClick={PostData} placeholder="Register" />
                        </div>
                    </div>

                    
                </form>
            </section>
        </div>
    )
}

export default Signup
