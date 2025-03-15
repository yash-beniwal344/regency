import React from 'react';
import img1 from './images/legal.png';
import Footer from './Footer';

const Legalservice = () => {
  return (
    <div className='legals'>
            <div className="sec-one">
                <div className="inner-box">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-7 mb-5 bot">
                            <div className="text">
                                <div className="big">
                                Secure Your Legacy with Expert Legal Solutions
                                </div>
                                <div className="small">
                                From will preparation to estate planning and trust management, our legal experts are here to help. Fill in the details below to get started on protecting your assets and securing your future.
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5">
                            <div className="img">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-two">
                <div className="inner-box">
                    <div className="row row1">
                        <div className="col-12 col-sm-4"><div className='in'><div className="icon text-white">1</div>Personal Information</div></div>
                        <div className="col-12 col-sm-4"><div className='inn'><div className="icon">2</div>Legal Requirements</div></div>
                        <div className="col-12 col-sm-4"><div className='inn'><div className="icon">3</div>Select Legal Services Needed</div></div>

                    </div>
                    <div className=" row row2">
                        <div className="col-12 col-md-6">
                            <label> Full Name</label><br />
                            <input type='text' placeholder='name' />
                        </div>
                        <div className="col-12 col-md-6">
                            <label>Phone Number</label><br />
                            <input type='tel' placeholder='Phone' />
                        </div>
                    </div>
                   
                    <div className=" row row2">
                        <div className="col-12 col-md-6">
                            <label>Full Address</label><br />
                            <input type='text' placeholder='Email Address' />
                        </div>
                        <div className="col-12 col-md-6">
                            <label>Date of Birth </label><br />
                            <input type='date' placeholder='Marital Status' />
                        </div>
                    </div>
                    <div className=" row row2">
                        <div className="col-12 col-md-6">
                            <label>Email Address</label><br />
                            <input type='text' placeholder='Email Address' />
                        </div>
                        <div className="col-12 col-md-6">
                            <label>Marital Status </label><br />
                            <input type='text' placeholder='Marital Status' />
                        </div>
                    </div>
                    <div className="btn">
                        <button>Next Step</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Legalservice