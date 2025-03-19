import React from 'react';
import { useNavigate } from 'react-router-dom';
import left from './images/donor2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';


const Question14 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/question_13')
    }
    const next = () => {
        navigate('/question_15')
    }
    return (
        <div className='question14'>
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
                                            <button>Back</button>
                                        </div>


                                    </div>
                                    <div className="que">
                                        Does the donor want any replacement
                                        attorneys?
                                    </div>
                                    <div className="small">
                                        Replacement attorneys step in if an original attorney can no longer act.<br /><br />

                                        A replacement attorney must meet the same requirements as an original attorney. This includes being 18 or over.
                                    </div>
                                   
                                    <div className="row text-center">
                                        <div className="col-12 col-md-3 p-0">

                                        </div>
                                        <div className="col-12 col-md-5 p-0 mb-2">
                                        <button onClick={next} className='cancel'>Add replacement attorney</button>
                                        </div>
                                        <div className="col-12 col-md-4 p-0 ">
                                        <button onClick={next} className='continue'>Save & Continue</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<Footer/>
            </div>
            )
}

            export default Question14