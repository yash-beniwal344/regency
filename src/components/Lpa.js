import React from 'react';

import img1 from './images/boys.png';
import logos1 from './images/logos1.png';
import logos2 from './images/logos2.png';
import logos3 from './images/logos3.png';
import logos4 from './images/logos4.png';
import logos5 from './images/logos5.png';
import cr from './images/cr.png'
import Footer from './Footer';
import Plan from './Plan';
import { useNavigate } from 'react-router-dom';

const Lpa = () => {
    let navigate = useNavigate()
    const login = ()=>{
navigate('/login')
    }
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
                                    <div className="icon"><img src={cr} alt="" /></div>
                                    <div className="text">Make it truly your own with ease.</div>
                                </div>
                                <div className="line">
                                    <div className="icon"><img src={cr} alt="" /></div>
                                    <div className="text">Complete in just 15 minutes.</div>
                                </div>
                                <div className="line">
                                    <div className="icon"> <img src={cr} alt="" /></div>
                                    <div className="text">Backed by expert guidance</div>
                                </div>
                                <div className="line">
                                    <div className="icon">  <img src={cr} alt="" /></div>
                                    <div className="text">Starting at just £90.</div>
                                </div>
                                

                            </div>
                            <div className='btn'>
                                <button className='start' onClick={login}>Let's get started</button>
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
                    <img src={logos1} alt='logos-line1' />
            <img src={logos2} alt='logos-line2' />
            <img src={logos3} alt='logos-line3' />
            <img src={logos4} alt='logos-line4' />
            <img src={logos5} alt='logos-line5' />
                    </div>
                </div>
            </div>
         <Plan/>
             <Footer/>
        </div>
  )
}

export default Lpa