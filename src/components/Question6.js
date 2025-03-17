import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Question6 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/Question_5')
    }
    const next = () => {
        navigate('/Question_7')
    }
  return (
    <div className='question6'>
    <div className="sec-one">


        <div className="inner-box">
            <div className='top'>
                <div className="left" onClick={back}>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <button>Back</button>
                </div>


            </div>
            <div className="que">
            Complete Your Lasting Power of 
            Attorney for Only £99
            </div>
            <div className="btn">
                <button onClick={next} >Start my LPA</button>
            </div>
        </div>
    </div>
    <Footer />
</div>
  )
}

export default Question6