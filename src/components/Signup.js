import React, { useState } from 'react'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
// import Signup from './Signup';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate();
    const namevalue = (e) => {
        setname(e.target.value)
    }
    const emailvalue = (e) => {
        setemail(e.target.value)
    }
    const passwordvalue = (e) => {
        setpassword(e.target.value)
    }
    const submit = () => {
    
   
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_KEY}/signup`,
            data: {
                name: name,
                email: email,
                password: password
            }

        }).then((response) => {
            if (response.data.status === true) {
                localStorage.setItem('user',JSON.stringify(response.data.data))
                localStorage.setItem('token',JSON.stringify(response.data.auth))
                toast.success(response.data.message);
                navigate('/')
            }
            else {
                toast.error(response.data.message)
            }
        }).catch((error) => {
            console.log(error);
            toast.error("something went wrong")
        })
    }
    return (
        <div className='signup'>
            <div className="sec-one">
                <div className="inner-box">
                    <div className="welcome">
                        Create an account
                    </div>
                    <div className="sm-text">
                        Get the support you need today with an account.
                    </div>
                    <div className="input">
                        <label>Full Name</label><br />
                        <input type='text' value={name} onChange={namevalue} />
                    </div>
                    <div className="input">
                        <label>Email Address</label><br />
                        <input type='email' value={email} onChange={emailvalue} />
                    </div>
                    <div className="input">
                        <label>Password</label><br />
                        <input type='password' value={password} onChange={passwordvalue} />
                    </div>
                    <div className="btn">

                    </div>
                    <div className="row text-center">
                        <div className="col-12  p-0">
                            <button onClick={submit}>Create an account</button>
                        </div>

                    </div>
                    <div className="register">
                        Already have an account? <Link to='/login' >login.</Link>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup



