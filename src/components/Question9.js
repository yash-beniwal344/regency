import React from 'react'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'


const Question9 = () => {
    let navigate = useNavigate();
    const back = () => {
        navigate('/Question_8')
    }
    const next = () => {
        navigate('/Question_10')
    }
    return (
        <div className='question9'>
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
                        Check if you have mental capacity
                    </div>
                    <ul>
                        <li>must be 18 or over</li>
                        <li>must be able to make their own decisions at the time their LPA is made – this is known as having <Link> mental capacity</Link></li>

                    </ul>

                    <div className="row">
                        <div className="col-12 col-md-8 p-0">

                        </div>
                        <div className="col-12 col-md-4 p-0 text-end">
                            <button onClick={next}>Add Donor</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Question9