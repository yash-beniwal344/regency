import React from 'react'
import Footer from './Footer'
import { faArrowLeft, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom';
import left from './images/donor2.png';


const Question17 = () => {
  let navigate = useNavigate();
  const back = ()=>{
    navigate('/question_16')
  }
  const next = ()=>{
    navigate('/question_18')
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
                            <div className="que">
                            Certificate provider details
                            </div>
                            <div className="one-input">
                                <label>Title</label><br />
                                <select class="form-select py-3 mb-2" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="row two-input">
                                <div className="col-12 col-md-6">
                                    <label>First Name</label><br />
                                    <input type='text' />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label>Last Name </label><br />
                                    <input type='text' />
                                </div>
                            </div>

                            <div className="one-input">
                                <label>Date of Barth</label><br />
                                <input type='date' />
                            </div>
                            <div className="one-input">
                                <label>Email Address </label><br />
                                <input type='text' />
                            </div>
                            <div className="one-input">
                                <label>Postcode </label><br />
                                <input type='text' placeholder='Find UK address' />
                            </div>
                            <div className="man">
                                -Enter address manually
                            </div>
                            <div className="one-input">
                                <label> Enter Address</label><br />
                                <input type='text' />
                            </div>
                            <div className="att">
                                <span>-</span>Add another attorney
                            </div>

                            <div className="btn">
                                <button onClick={next} className='continue'>Add Attorney</button>
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

export default Question17