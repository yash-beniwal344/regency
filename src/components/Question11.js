import React from 'react';
import left from './images/donor.png';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';


const Question11 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/question_10')
    }
    const next = () => {
        navigate('/question_12')
    }
    return (
        <div className='question11'>
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
                                        When can the LPA be used?
                                    </div>
                                    <div className="box1">
                                        <div className="big">
                                            as soon as it's registered (with the donor's consent)
                                        </div>
                                        <div className="small">
                                            Most donors choose this option because it is the most practical. While the donor still has mental capacity, their attorneys can only act with the donor's permission. The donor will still be in control of all decisions affecting them. <br /><br />

                                            This option is useful if the donor is able to make their own decisions but there’s another reason they want their attorneys' help – for example, if the donor is away on holiday, or if they have a physical condition that makes it difficult to visit the bank.
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <div className="big">
                                        only if the donor does not have mental capacity
                                        </div>
                                        <div className="small">
                                        This means the attorneys can only act if the donor does not have mental capacity to make certain decisions themselves. But be careful – this option can make the LPA a lot less useful. Every time the attorneys try to use the LPA, they might be asked to prove that the donor does not have mental capacity
                                        </div>
                                    </div>


                                    <div className="btn">
                                        <button onClick={next} >Continue</button>
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

export default Question11