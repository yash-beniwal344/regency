import React from 'react';
import img1 from './images/calcul.png';
import Footer from './Footer';


const Calculators = () => {
  return (
    <div className='calculators'>
       <div className="sec-one">
        <div className="inner-box">
            <div className="row">
                <div className="col-12 col-md-6">
                   <div className="form">
                         <div className="heading">
                         IHT Calculator
                         </div>
                         <label>Total Estate Value (£)</label><br/>
                         <input type='text' className='input'/><br/>
                         <label>Total Liabilities (£)</label><br/>
                         <input type='text' className='input'/><br/>
                         <label>Gifts in Last 7 Years (£)</label><br/>
                         <input type='text' className='input'/><br/>
                         <label>Charitable Donations (£)</label><br/>
                         <input type='text' className='input'/><br/>
                         <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                        <label class="form-check-label" for="flexCheckChecked">
                            Checked checkbox 
                        </label>
                        </div>
                        <div className="last-sec">
                        Estimated IHT Liability <br/>
                        <span>£0.00</span>
                        </div>
                        <div className="btn">
                            
                            <button>Get a Free IHT Consultation</button>
                        </div>
                   </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={img1} alt='img'/>
                </div>
            </div>
        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Calculators