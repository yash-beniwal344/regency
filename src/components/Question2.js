import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Question2 = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/question_1');
    }
    const next = ()=>{
        navigate('/question_3')
    }
  return (
    <div className='question2'>
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
                    Question 2 of 4
                </div>

            </div>
            <div className="que">
            How old are you?
            </div>
            <div className="options">
                <div className="form-check">
                    <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                    Under 35
                    </label>
                </div>
                <div class="form-check">
                    <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                       35-44
                    </label>
                </div>
                <div class="form-check">
                    <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                       45-54
                    </label>
                </div>
                <div class="form-check">
                    <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                      55-64
                    </label>
                </div>
                <div class="form-check">
                    <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                      65 or older
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
    <Footer/>
</div>
  )
}

export default Question2