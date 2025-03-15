import React from 'react';

import logos from './images/logos-line.png';
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
                        <img src={logos} alt='logos-line' />
                    </div>
                </div>
            </div>
            <Plan />
            <Footer />
        </div>
    )
}

export default HomePage3
