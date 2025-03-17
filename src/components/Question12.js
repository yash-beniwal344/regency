import React from 'react';
import left from './images/donor2.png';

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Question12 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/question_11')
    }
    const next = () => {
        navigate('/question_13')
    }
  return (
    <div className='question12'>
    <div className="sec-one">
        <div className="inner-box">
            <div className="row">
                <div className="col-12 col-md-5 mb-4">
                    <div className="left-img">
                        <img src={left} alt='procces' />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="right">
                        <div className="one">
                            <div className='top'>
                                <div className="left" onClick={back}>
                                    <div className='icon'>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </div>
                                    <button >Back</button>
                                </div>


                            </div>
                            <div className="que">
                            Who are the attorneys?
                            </div>
                            <div className="small">
                            Attorneys are people the donor appoints to make decisions on their behalf.<br/><br/>
                            <ul>
                                <li>A donor can have 1 or more attorneys </li>
                                <li>Attorneys must be 18 or over</li>
                                <li>Attorneys must have mental capacity – the ability to make decisions</li>
                                <li>An attorney must not be bankrupt or subject to a debt relief order</li>
                                
                            </ul>
                            The most important thing is that the attorneys are people the donor can trust to respect their wishes and act in their best interests.<br/><br/>
                            You will be asked if the donor would like to add replacement attorneys in a separate question. These would step in if the original attorneys are unable or unwilling to continue.<br/><br/>
                            </div>
                            <div className="btn">
                                <button onClick={next} >Add Donor</button>
                            </div>
                        </div>
                        <div className="two">
                        <div className="que">
                        Do you have children or financial
                        dependents?
                    </div>
                    <div className="options">
                        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"  />
                        <label class="btn " for="option1">I only appoint one attorney</label>

                        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                        <label class="btn " for="option2">Jointly and severally</label>
                        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                        <label class="btn " for="option3">Jointly</label>
                        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                        <label class="btn " for="option4">Jointly for some decisions and jointly and 
                        severally for other decisions</label>
                    </div>
                          
                            <div className="bottom">
                               
                                <button className='continue'>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Question12