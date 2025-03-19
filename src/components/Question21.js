import React from 'react'
import Footer from './Footer'
import { faArrowLeft, faCircleUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom';
import left from './images/donor3.png';

const Question21 = () => {
    let navigate = useNavigate();
    const next = ()=>{
        navigate('/')
    }
    const back = ()=>{
        navigate('/question_20')
    }
  return (
    <div className='question13'>
            <div className="sec-one">
                <div className="inner-box"> 
                    <div className="row">  
                        <div className="col-12 col-md-5 mb-4">
                            <div className="left-img">
                                <img src={left} alt='procces'/>
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
                                    Final Check: LPA Details
                                    </div>
                                    <div className="one-input">
                                        <div className="edit"><label>Type of LPA</label><div className="tex"><FontAwesomeIcon icon={faPenToSquare} />Edit Details</div></div><br />
                                        <input type='text' placeholder='Property and finance' />
                                    </div>
                                    <div className="row two-input">
                                        <div className="col-12 col-md-6">
                                            <label>Donor Name</label><br/>
                                            <input type='text' placeholder='Mr. John Bee'/>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>Donor Date of Birth</label><br/>
                                            <input type='text' placeholder='1 January 1965'/>
                                        </div>
                                    </div>
                                    <div className="row two-input">
                                        <div className="col-12 col-md-6">
                                            <label>Donor Email Address</label><br/>
                                            <input type='email' placeholder='h.john@gmail.com'/>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>Sign</label><br />
                                            <input type='text' placeholder='yes'/>
                                        </div>
                                    </div>
                                
                                    <div className="one-input">
                                        <label>Donor Address</label><br />
                                        <input type='text' placeholder='12 Ridings Avenue, London, N21 2EL'/>
                                    </div>
                                    <div className="one-input">
                                        <label>When LPA Starts</label><br />
                                        <input type='text' placeholder='As soon as its registered'/>
                                    </div>
                                    <div className="row two-input">
                                        <div className="col-12 col-md-6">
                                            <label>Attorney Name</label><br />
                                            <input type='text' placeholder='Miss Medi Barand'/>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>Attorney Date of Birth</label><br />
                                            <input type='text' placeholder='4 April 1974'/>
                                        </div>
                                    </div>
                                    <div className="one-input">
                                        <label>Attorney Address </label><br />
                                        <input type='text' placeholder='7 Ridings Avenue, London, N21 2EL' />
                                    </div>
                                  
                                    <div className="one-input">
                                        <label> Replacement Attorneys</label><br />
                                        <input type='text' placeholder='No replacement attorneys' />
                                    </div>
                                    <div className="one-input mb-2">
                                        <label>Certificate Provider</label><br />
                                        <input type='text' placeholder='Not added' />
                                    </div>
                                    
                                  
                                    <div className="row text-end">
                                            <div className="col-12 col-md-4 p-0">

                                            </div>
                                            <div className="col-12 col-md-5 p-0 mb-1">
                                            <button onClick={next} className='continue mb-2'>Confirm and Continue</button>
                                            </div>
                                            <div className="col-12 col-md-3 p-0 ">
                                            <button className='cancel'>Save for Later</button>
                                            </div>
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

export default Question21