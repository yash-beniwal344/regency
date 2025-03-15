import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleCheck, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import line from './images/Vector 32.png';
import img from './images/bigimg.png';
import logos from './images/logos-line.png';
import reting1 from './images/reting1.png';
import reting2 from './images/reting2.png';
import st1 from './images/st1.png';
import img2 from './images/bigimg2.png';
import comma from './images/comma.png';
import user1 from './images/user1.png';
import user2 from './images/user2.png';
import user3 from './images/user3.png';
import user4 from './images/user4.png';
import user5 from './images/ic.png';
import inputicon from './images/input-icon.png';

import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {

  const navigate = useNavigate();

  const startwill = ()=>{
    navigate('/will')
  }
  const getstarted = ()=>{
    navigate('/start')
  }
  return (
    <div className='main '>
      <div className='sec-one pb-5'>
        <div className='row'>
          <div className='text-side col-12 col-sm-12 col-md-6'>
            <div className='big-text '>
              Plan Your Legacy , Securely And Easily
            </div>
            <div className='line'>
              <img src={line} alt='line' />
            </div>
            <div className='sm-text'>
              Create a legally-binding will in minutes, guided by experts and stored securely.
            </div>
            <div className='btn'>
              <button className='start' onClick={startwill}>Start My Will</button>
              <button className='learn'><FontAwesomeIcon icon={faCirclePlay} style={{ marginRight: '5px' }} />Learn More</button>
            </div>

          </div>
          <div className='img-side col-12 col-sm-12 col-md-6'>
            <div className='bigimg'>
              <img src={img} alt='man' />

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
      <div className="sec-three">
        <div className="inner-box">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 left">
              <div className="top-text">
                Create Your Will in <br />
                <span>Just 4 Simple Steps</span>
              </div>
              <div className="mid-text">
                Creating a will doesn't have to be complicated. With our streamlined process, you can secure your family's future in just four easy steps. From answering a few basic questions to securely storing your final document, we guide you every step of the way to ensure peace of mind for you and your loved ones.
              </div>
              <div className="btn">
                <button className='start' onClick={getstarted}>get started</button>
              </div>
              <div className="bott-text">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6">
                    <img src={reting1} alt='reting1' />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6">
                    <img src={reting2} alt='reting1' />
                  </div>
                </div>


              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 right">
              <div className="step">
                <div className="img-side">
                  <img src={st1} alt='st1' />
                </div>
                <div className="text-side">
                  <div className="big">
                    Step 1: Answer a Few Questions
                  </div>
                  <div className="small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="img-side">
                  <img src={st1} alt='st1' />
                </div>
                <div className="text-side">
                  <div className="big">
                    Step 1: Answer a Few Questions
                  </div>
                  <div className="small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="img-side">
                  <img src={st1} alt='st1' />
                </div>
                <div className="text-side">
                  <div className="big">
                    Step 1: Answer a Few Questions
                  </div>
                  <div className="small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="sec-four">
        <div className="inner-box">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 text-side">
              <div className="big">
                Why You'll Love Our Platform
              </div>
              <div className="small">
                <div className="line">
                  <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                  <div className="text">Create your will in just minutes</div>
                </div>
                <div className="line">
                  <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                  <div className="text">Create your will in just minutes</div>
                </div>
                <div className="line">
                  <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                  <div className="text">Clear, fixed pricing with no surprises.</div>
                </div>
                <div className="line">
                  <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                  <div className="text">Reviewed by legal professionals  </div>
                </div>
                <div className="line">
                  <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                  <div className="text">Your data is encrypted and protected</div>
                </div>
                <div className="line">
                  <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                  <div className="text">Easily update your will as needed</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 img-side">
              <div className='bigimg'>
                <img src={img2} alt='man2' />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-five">
        <div className="inner-box">
          <div className="top">
            <div className="big">
              Choose Plan
              That’s Right For You
            </div>
            <div className="small">
              Choose plan that works best for you, feel free to contact us
            </div>
            <div className="btn">
              <button className='monthly'>Bill Monthly</button>
              <button className='yearly'>Bill Yearly</button>
            </div>
          </div>
          <div className="cards">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 pt-3">
                <div className="card">
                  <div className="up">
                    <div className="big">
                      Basic
                    </div>
                    <div className="small">
                      A simple solution for creating and storing your will securely
                    </div>
                    <div className="price">
                      <sup>£</sup>99.99
                    </div>
                  </div>
                  <div className="down">
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Secure Wills</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Legal Review</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Easy Updates</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Chat Support</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Secure Wills</div>
                    </div>

                    <button>SignUp fro Basic</button>
                  </div>
                </div>

              </div>
              <div className="col-12 col-sm-12 col-md-4 ">
                <div className="card mid">
                  <div className="up">
                    <div className="big">
                      Premium
                    </div>
                    <div className="small">
                      Includes all Basic features plus legal review and priority support.
                    </div>
                    <div className="price">
                      <sup>£</sup>199.99
                    </div>
                  </div>
                  <div className="down">
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Secure Wills</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Legal Review</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Easy Updates</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Chat Support</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Secure Wills</div>
                    </div>

                    <button>Go To pro</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 pt-3">
                <div className="card">
                  <div className="up">
                    <div className="big">
                      Pro
                    </div>
                    <div className="small">
                      All features, including advanced asset tracking and family
                    </div>
                    <div className="price">
                      <sup>£</sup>299.99
                    </div>
                  </div>
                  <div className="down">
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Secure Wills</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Legal Review</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Easy Updates</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Chat Support</div>
                    </div>
                    <div className="line">
                      <div className="icon"> <FontAwesomeIcon icon={faCircleCheck} /></div>
                      <div className="text">Secure Wills</div>
                    </div>

                    <button>Goto Business</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-six">
        <div className="inner-box">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 mb-5">
              <div className="text">
                <div className="big">
                  What Our Customers Say
                </div>
                <div className="comma">
                  <img src={comma} alt='comma' />
                </div>
                <div className="small">
                  I was overwhelmed with the thought of creating my will, but this platform made it so easy and stress-free. The step-by-step process was clear, and I appreciated the legal review that gave me confidence everything was in order. I now have peace of mind knowing my will is securely stored and can be updated whenever needed. Highly recommend it!
                </div>
                <div className="powerdby">
                  _ Sarah Mitchel
                </div>
                <div className="users">
                  <img src={user1} alt='user1' />
                  <img src={user2} alt='user2' />
                  <img src={user3} alt='user3' />
                  <img src={user4} alt='user4' />
                  <img src={user5} alt='user5' />
                </div>
              </div>

            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="inputs">
                <div className="icon">
                  <img src={inputicon} alt='inputicon' />
                </div>
                <div className="big">
                  Need Assistance? Send Us a
                  Message!
                </div>
                <label>email</label>
                <input type='email' placeholder='enter your email' />
                <label>message</label>
                <input type='text' placeholder='what are you say?' />
                <button>send</button>
                <div className="bott">
                  or Start Free Trial
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

export default HomePage