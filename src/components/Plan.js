import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Plan = () => {
  return (
    <div className="plan">
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
  )
}

export default Plan