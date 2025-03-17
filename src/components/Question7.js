import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



const Question7 = () => {
    let navigate = useNavigate();
    const back =()=>{
        navigate('/question_6')
    }
    const next =()=>{
        navigate('/question_8')
    }
    return (
        <div className='question7'>
            <div className="sec-one">
                <div className="inner-box">
                    <div className='top'>
                        <div className="left" onClick={back}>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                            <button >Back</button>
                        </div>


                    </div>
                    <div className="welcome">
                        Let's get started
                    </div>

                   
                    <div className="input">
                        <label>Email Address</label><br />
                        <input type='email' />
                    </div>
                    <div className="input">
                        <label>Create Password</label><br />
                        <input type='password' />
                    </div>
                    <div className="input">
                        <label>Confirm Password</label><br />
                        <input type='password' />
                    </div>
                    <div className="btn">
                        <button onClick={next}>Continue</button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Question7