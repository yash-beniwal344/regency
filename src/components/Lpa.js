import React from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from './images/boys.png';
import logos from './images/logos-line.png';
import Footer from './Footer';
import Plan from './Plan';

const Lpa = () => {
  return (
    <div className='lpa'>
            <div className="sec-one">
                <div className="inner-box">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 text-side">
                            <div className="big">
                            Lasting Power of Attorney Made Easy
                            </div>
                            <div className="small py-2">
                                <div className="line">
                                    <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                                    <div className="text">Make it truly your own with ease.</div>
                                </div>
                                <div className="line">
                                    <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                                    <div className="text">Complete in just 15 minutes.</div>
                                </div>
                                <div className="line">
                                    <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                                    <div className="text">Backed by expert guidance</div>
                                </div>
                                <div className="line">
                                    <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                                    <div className="text">Starting at just £90.</div>
                                </div>
                                

                            </div>
                            <div className='btn'>
                                <button className='start'>Let's get started</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 img-side">
                            <div className='bigimg'>
                                <img src={img1} alt='man2' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-two">
                <div className="inner-box">
                    <div className="top">
                        Over 10,000 Families Protected
                    </div>
                    <div className="mid">
                        As seen on
                    </div>
                    <div className="bott">
                        <img src={logos} alt='logos-line' />
                    </div>
                </div>
            </div>
         <Plan/>
             <Footer/>
        </div>
  )
}

export default Lpa