import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Signup = () => {
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
                        <input type='text' />
                    </div>
                    <div className="input">
                        <label>Email Address</label><br />
                        <input type='email' />
                    </div>
                    <div className="input">
                        <label>Password</label><br />
                        <input type='text' />
                    </div>
                    <div className="btn">
                        <button>Create an account</button>
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



