import React from 'react'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Question8 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/Question_7')
    }
    const next = () => {
        navigate('/Question_9')
    }
  return (
    <div className='question8'>
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
            Which type of LPA do you want 
            to make?
            </div>
            <div className="options">
                <div className="form-check" onClick={next}>
                Property and financial affairs
                </div>
                <div className="form-check"  onClick={next}>
                 Health and Welfare
                </div>


            </div>
           
        </div>
    </div>
    <Footer />
</div>
  )
}

export default Question8