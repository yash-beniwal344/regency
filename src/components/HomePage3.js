import React from 'react';

import logos1 from './images/logos1.png';
import logos2 from './images/logos2.png';
import logos3 from './images/logos3.png';
import logos4 from './images/logos4.png';
import logos5 from './images/logos5.png';
import Plan from './Plan';
import Footer from './Footer';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
const HomePage3 = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate('/')
    }
    const start = () => {
        navigate('/question_1')
    }
    return (
        <div className='homepage3'>
            <div className='sec-one'>
                <div className='inner-box'>
                    <div className='top'>
                        <div className='icon'> <FontAwesomeIcon icon={faArrowLeft} /></div>
                        <button onClick={back}>Back</button>
                    </div>
                    <div className='mid'>
                        Answer a 4 simple questions to
                        create your personalized will.
                    </div>
                    <div className="bott">
                        <button onClick={start}>let's get started</button>
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
            <Plan />
            <Footer />
        </div>
    )
}

export default HomePage3
