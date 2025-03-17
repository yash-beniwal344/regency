import React from 'react'
import Footer from './Footer'
import { faAngleRight, faArrowLeft, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';




const Question5 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/Question_4')
    }
    const next = () => {
        navigate('/Question_6')
    }
    return (
        <div className='question5'>
            <div className="sec-one">


                <div className="inner-box">
                    <div className='top'>
                        <div className="left" onClick={back}>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                            <button>Back</button>
                        </div>


                    </div>
                    <div className="que">
                        Your Tailored Plan
                    </div>
                    <div className="options">
                        <div className="form-check" onClick={next}>
                            <div className="left">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCalculator} />
                                </div>
                                <div className="text">
                                    <div className="big">
                                        Create Your Will
                                    </div>
                                    <div className="small">
                                        Secure Your Wishes Today
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                        <div className="form-check">
                            <div className="left">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCalculator} />
                                </div>
                                <div className="text">
                                    <div className="big">
                                        Use Net Asset Calculator
                                    </div>
                                    <div className="small">
                                        Estimate Your Net Worth in Minutes
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>


                    </div>
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Question5