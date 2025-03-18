import React from 'react'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import left from './images/donor2.png';
import { useNavigate } from 'react-router-dom';

const Question16 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/question_15')
    }
    const next = () => {
        navigate('/question_17')
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
                                        Who is the certificate provider?
                                    </div>
                                    <div className="small">
                                        Every LPA must have a certificate provider. <br /><br />

                                        The certificate provider is an independent person who helps to protect the donor’s interests. <br /><br />

                                        Before the donor signs the LPA, the certificate provider must discuss the LPA with the donor. This is to make sure: <br /><br />

                                        the donor understands their LPA and the power it gives their attorneys
                                        no one is putting the donor under pressure to make the LPA
                                        The certificate provider must: <br /><br />

                                        be able to have an honest conversation with the donor
                                        be the kind of person who speaks out if anything is wrong
                                        be independent <br />
                                        The certificate provider signs the LPA after the donor. <br /><br />

                                        <div className="btn">
                                            <button onClick={next} className='cancel'>cancel</button>
                                            <button onClick={next} className='continue'>Add a certificate provider</button>
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

            export default Question16