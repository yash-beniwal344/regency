import React, { useState } from 'react'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [email,setemail]= useState();
    const [password,setpassword]= useState();
    const navigate = useNavigate();

    const emailvalue = (e)=>{
        setemail(e.target.value)
    }
    const passwordvalue = (e)=>{
        setpassword(e.target.value)
    }

    const submit = ()=>{
        axios({
            method:"post",
            url:"http://localhost:2350/login",
            data:{
                email:email,
                password:password
            }
        }).then((response)=>{
            if(response.data.status===true){
                localStorage.setItem('user',JSON.stringify(response.data.data))
                localStorage.setItem('token',JSON.stringify(response.data.auth))
                toast.success(response.data.message);
               
                navigate('/')
            }
            else{
                toast.error(response.data.message)
            }
        }).catch((error)=>{
            console.log(error);
            toast.error('backend problem')
            
        })
    }
    return (
        <div className='login'>
            <div className="sec-one">
                <div className="inner-box">
                    <div className="welcome">
                        Welcome Back!
                    </div>
                    <div className="sm-text">
                        Log in to your account to access your will
                    </div>
                    <div className="email">
                        <label>Email Address</label><br/>
                        <input type='email' value={email} onChange={emailvalue}/>
                    </div>
                    <div className="password">
                        <div className="label">
                            <label>Password</label><br/>
                            <div className="forgot">
                                <Link to='/forgot' >Forgot Password?</Link>
                            </div>
                        </div>

                        <input type='password' value={password} onChange={passwordvalue}/>
                    </div>
                    <div className="row text-center mb-3">
                        <div className="col-12  p-0">
                            <button onClick={submit}>login</button>
                        </div>

                    </div>
                    <div className="register">
                    Don’t have an account? <Link to='/signup' >Register.</Link>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login



