import React from 'react';
import Footer from './Footer';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

const Question3 = () => {
       const navigate = useNavigate();

    const back = () => {
        navigate('/question_2');
    }
    const next = ()=>{
        navigate('/question_4')
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
                            Question 3 of 4
                        </div>

                    </div>
                    <div className="que">
                        Do you have children or financial
                        dependents?
                    </div>
                    <div className="options">
                        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"  />
                        <label class="btn bg-primary-subtle" for="option1">Yes</label>

                        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                        <label class="btn bg-primary-subtle" for="option2">No</label>
                    </div>
                    <div className="btn">
                        <button onClick={next}>next</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Question3