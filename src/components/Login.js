import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Login = () => {
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
                        <input type='email' />
                    </div>
                    <div className="password">
                        <div className="label">
                            <label>Password</label><br/>
                            <div className="forgot">
                                <Link to='/forgot' >Forgot Password?</Link>
                            </div>
                        </div>

                        <input type='text'/>
                    </div>
                    <div className="btn">
                    <button>login</button>
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



