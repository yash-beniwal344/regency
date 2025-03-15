import React from 'react';
import img1 from './images/legal.png';
import Footer from './Footer';
// import reportWebVitals from './../reportWebVitals';

const General = () => {
    return (
        <div className='general'>
            <div className="sec-one">
                <div className="inner-box">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-7 mb-5 bot">
                            <div className="text">
                                <div className="big">
                                    Get Personalized Assistance for Your Needs
                                </div>
                                <div className="small">
                                    We provide tailored support to help you manage your finances, assets, and personal needs effectively. Fill out the form below, and our team will guide you through the best solutions for your situation.
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
                        <div className="col-12 col-sm-3"><div className='in'><div className="icon text-white">1</div>Personal Information</div></div>
                        <div className="col-12 col-sm-3"><div className='inn'><div className="icon">2</div>Financial Details</div></div>
                        <div className="col-12 col-sm-3"><div className='inn'><div className="icon">3</div>Loans</div></div>
                        <div className="col-12 col-sm-3"><div className='inn'><div className="icon">4</div>Additional Info</div></div>
                    </div>
                    <div className=" row row2">
                        <div className="col-12 col-md-6">
                            <label>Name</label><br />
                            <input type='text' placeholder='name' />
                        </div>
                        <div className="col-12 col-md-6">
                            <label>Phone </label><br />
                            <input type='tel' placeholder='Phone' />
                        </div>
                    </div>
                    <div className="row row3">
                        <label>Full Address</label><br />
                        <input type='text' placeholder='Full Address' />
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
                    <div className=" row row2 mb-3">
                        <div className="col-12 col-md-6">
                            <label>Number of Children (Under 18)</label><br />
                            <input type='text' placeholder='Number of Children (Under 18)' />
                        </div>
                        <div className="col-12 col-md-6">
                            <label>Number of Children (Over 18)</label><br />
                            <input type='text' placeholder='Number of Children (Over 18)' />
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

export default General