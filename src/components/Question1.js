import React from 'react'
import Footer from './Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Question1 = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/start');
    }
    const next = () => {
        navigate('/question_2');
    }

    return (
        <div className='question1'>
            <div className="sec-one">


                <div className="inner-box">
                    <div className='top'>
                        <div className="left">
                            <div className='icon'>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                            <button onClick={back}>Back</button>
                        </div>
                        <div className="right">
                            Question 1 of 4
                        </div>

                    </div>
                    <div className="que">
                        What is your current relationship
                        status?
                    </div>
                    <div className="options">
                        <div className="form-check">
                            <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Single
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Single with Partner
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Married
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Married with Blended Family
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9 p-0">

                        </div>
                        <div className="col-3 p-0">
                        <button onClick={next}>next</button>
                        </div>
                    </div>
                 
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Question1