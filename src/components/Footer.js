import React from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './images/logo WHITE 1.png'

const Footer = () => {
  return (
    <div className="footer">
    <div className="inner-box">
      <div className="row mb-5">
        <div className="col-12 col-sm-12 col-md-5 ">
          <div className="left">
            <div className="img">
              <img src={logo} alt='logo' />
            </div>
            <div className="text">
              Secure Your Legacy, Today
            </div>
            <div className="input-div">
              <input type=' email' placeholder='enter your email' />
              <div className="icon">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

            </div>

          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-7">
          <div className="right">
            <ul>
              <li className="head"><a href="*">Solutions</a></li>
              <li className="li"><a href="*">How It Works</a></li>
              <li className="li"><a href="*">Create Your Will</a></li>
              <li className="li"><a href="*">Pricing Plans</a></li>
              <li className="li"><a href="*">Security</a></li>

            </ul>
            <ul>
              <li className="head"><a href="*">Help & Support</a></li>
              <li className="li"><a href="*">Terms of Use</a></li>
              <li className="li"><a href="*">Contact Us</a></li>
              <li className="li"><a href="*">Legal Resources</a></li>
              <li className="li"><a href="*">User Guide</a></li>

            </ul>
            <ul>
              <li className="head"><a href="*">Product</a></li>
              <li className="li"><a href="*">Will</a></li>
              <li className="li"><a href="*">LPA</a></li>
              <li className="li"><a href="*">Trusts</a></li>
              <li className="li"><a href="*">Calculators</a></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="last">
       
          <div className="bott">
            © 2024 Regency Inc. Copyright and rights reserved
          </div>
       
       
          <div className="bott">
            Terms and Condtions + Privacy Policy
          </div>
       
      </div>
    </div>
  </div>
  )
}

export default Footer