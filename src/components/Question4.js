import React from 'react'
import Footer from './Footer'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'


const Question4 = () => {
    const navigate = useNavigate();
    const back =()=>{
        navigate('/question_3')
    }
    const next =()=>{
        navigate('/Question_5')
    }
  return (
    <div className='question3'>
    <div className="sec-one">


        <div className="inner-box">
            <div className='top'>
                <div className="left">
                    <div className='icon'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <button onClick={back}>Back</button>
                </div>
                <div className="right">
                    Question 4 of 4
                </div>

            </div>
            <div className="que">
            What is the estimated value of 
            your <span style={{color:'rgba(84, 189, 149, 1)'}}>net assets?</span> 
            </div>
            <div className="options">
                <div className="form-check">
                    <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                    Less than £325k
                    </label>
                </div>
                <div class="form-check">
                    <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                    £325k to £650k
                    </label>
                </div>
                <div class="form-check">
                    <input className="option me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                    More than £650k
                    </label>
                </div>
               
            </div>
            <div className="row">
                        <div className="col-9 p-0">

                        </div>
                        <div className="col-3 p-0">
                        <button onClick={next}>next</button>
                        </div>
                    </div>
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default Question4