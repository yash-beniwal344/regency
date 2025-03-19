import React from 'react'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import left from './images/donor3.png';
import { useNavigate } from 'react-router-dom';


const Question20 = () => {
    let navigate = useNavigate();
    const next = () => {
        navigate('/question_21')
    }
    const back = () => {
        navigate('/question_19')
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
                                        Add Preferences and Instructions
                                    </div>
                                    <div className="small">
                                        You've entered all the essential information needed for the LPA.<br /><br />

                                        The optional section below lets you add the donor’s preferences or instructions for their attorneys. The donor can state things that the attorneys must or must not do, or give guidance that they’d like their attorneys to follow.
                                        <br /><br />

                                        For example, the donor could add preferences about making charitable donations or managing their bank accounts. The donor could add instructions about giving gifts, managing investments or seeking professional tax advice.<br /><br />


                                        <input type="text" className='Preferences' />
                                      
                                        <div className="row">
                                        <div className="col-12 col-md-8 p-0">

                                        </div>
                                        <div className="col-12 col-md-4 p-0 text-end">
                                        <button onClick={next} className='continue' >Add & Continue</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Question20