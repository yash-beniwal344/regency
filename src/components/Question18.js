import React from 'react'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
 import left from './images/donor2.png';


const Question18 = () => {
    let navigate = useNavigate();
    const back =()=>{
        navigate('/question_17')
    }
    const next = ()=>{
        navigate('/question_19')
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
                            Who should be notified about the LPA?
                                    </div>
                                    <div className="small">
                                    he donor can choose up to 5 people to be notified about the LPA application. These people have a chance to raise any concerns before the LPA is registered. <br /><br />

Having ‘people to notify’ is optional, though many donors choose family members or close friends. <br /><br />

You will be given a form to download and send to any people to notify once you have finished making the LPA. <br />
                                    </div>
                            <div className="que">
                           Person to notify details
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

                             <div className="row">
                                        <div className="col-12 col-md-8 p-0">

                                        </div>
                                        <div className="col-12 col-md-4 p-0 text-end">
                                        <button onClick={next} className='continue' >Add Attorney</button>
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

export default Question18