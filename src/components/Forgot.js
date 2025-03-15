import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Forgot = () => {
  return (
    <div className='forgot'>
    <div className="sec-one">
        <div className="inner-box">
            <div className="welcome">
                Welcome Back!
            </div>
            <div className="sm-text">
            Please enter your email address to receive a verification code.
            </div>
            <div className="email">
                <label>Enter Your Email</label><br/>
                <input type='email' />
            </div>
           
            <div className="btn">
            <button>Continue</button>
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

export default Forgot