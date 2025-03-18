import React from 'react';
import left from './images/donor.png';
import { faArrowLeft, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';


const Question10 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/question_9')
    }
    const next = () => {
        navigate('/question_11')
    }
    return (
        <div className='question10'>
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
                                        Enter Donor's Information
                                    </div>
                                    <div className="row two-input">
                                        <div className="col-12 col-md-6">
                                            <label>Name</label><br />
                                            <input type='text' />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>Phone </label><br />
                                            <input type='tel' />
                                        </div>
                                    </div>
                                    <div className="row two-input">
                                        <div className="col-12 col-md-6">
                                            <label>Date of Barth</label><br />
                                            <input type='date' />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>Email Address </label><br />
                                            <input type='email' />
                                        </div>
                                    </div>
                                    <div className="one-input">
                                        <label>Postcode lookup</label><br />
                                        <input type='date' placeholder='Find UK address' />
                                    </div>
                                    <div className="man">
                                        -Enter address manually
                                    </div>
                                    <div className="one-input">
                                        <label>Address Line 1</label><br />
                                        <input type='text' />
                                    </div>
                                    <div className="one-input">
                                        <label>Address Line 2</label><br />
                                        <input type='text' />
                                    </div>
                                    <div className="one-input">
                                        <label>Address Line 3</label><br />
                                        <input type='text' />
                                    </div>
                                    <div className="checkbox">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckChecked" />The donor is unable to sign or make a mark
                                        on the LPA
                                    </div>
                                    <div className="btn">
                                        <button onClick={next} >Add Donor</button>
                                    </div>
                                </div>
                                <div className="two">

                                    <div className="top">
                                        <div className="left">
                                            The Donor
                                        </div>
                                        <div className="right">
                                            <Link>View/Change</Link>
                                        </div>
                                    </div>
                                    <div className="mid">
                                        <div className="left">
                                            <FontAwesomeIcon icon={faCircleUser} />
                                        </div>
                                        <div className="right">
                                            <div className="big">
                                                Mr John Dae
                                            </div>
                                            <div className="small">
                                                Flat 3B, Baker House, M1 4AB, United Kingdom
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <button className='cancel'>Cancel</button>
                                        <button className='continue'>Continue</button>
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

export default Question10