import React from 'react'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import left from './images/donor2.png';
import { useNavigate } from 'react-router-dom';

export const Question19 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/question_18')
    }
    const next = () => {
        navigate('/question_20')
    }
    return (
        <div className='question13'>
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
                                    <div className="que mb-4">
                                        Who will register the Power of Attorney?
                                    </div>
                                    <div className="options">
                                        <div className="form-check" onClick={next}>
                                            Donor
                                        </div>
                                        <div className="form-check">
                                           Attorney
                                        </div>


                                    </div>
                                    <div className="btn">
                                        <button onClick={next} className='continue'>Continue</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
