import React from 'react'
import img1 from './images/living1.png';
import img2 from './images/living2.png';
import img3 from './images/living3.png';
import { faEnvelope, faFileLines, faPhoneVolume, faRobot, faSignal, faTty } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';



const Livingtursts = () => {
  return (
    <div className='livingtrusts'>
         <div className="sec-one">
                <div className="inner-box">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mb-5 bot">
                            <div className="text">
                                <div className="big">
                                A Comprehensive Estate Planning Solution
                                </div>
                                <div className="small">
                                A Living Trust, also known as a Lifetime Trust, is a legal arrangement established during a person’s lifetime, allowing assets to be placed into the Trust and managed by appointed Trustees for the benefit of designated beneficiaries. Unlike a Will Trust, which takes effect only upon death, a Living Trust offers benefits during the lifetime of the settlor and can include property Trusts with specific tax implications.
                                </div>
                                <div className="btn">
                                <button>Trusts & Wills</button>
                                </div>
                              
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 fle">
                            <div className="img1">
                                <img src={img1} alt="img1" />
                            </div>
                            <div className="img2">
                            <img src={img2} alt='img2'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-two">
                <div className="inner-box">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 cen order-2 order-md-1 ">
                        <div className="img3">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6  bot order-1 order-md-2">
                          
                            <div className="text">
                                <div className="big">
                                Advantages of a Living Trust
                                </div>
                                <div className="small">
                                   <ul>
                                    <li>Avoidance of Probate – Assets within the Trust bypass probate, ensuring faster and more private asset distribution.</li>
                                    <li>Continuity of Asset Management – In the event of incapacitation, appointed Trustees can manage assets without court intervention.</li>
                                    <li>Tax Planning Opportunities – Allows for strategic tax planning during the settlor’s lifetime.</li>
                                    <li>Property Protection – Properties placed in the Trust are shielded from probate and can benefit from certain Capital Gains Tax (CGT) exemptions.</li>
                                    <li>Flexibility and Control – The settlor retains control of assets and can amend or revoke the Trust during their lifetime.</li>
                                   </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-three">
                <div className="inner-box">
                    <div className="heading">
                    Tax Implications
                    </div>
                     <div className="boxs row">
                        <div className=" col-12 col-sm-4">
                            <div className="box">
                            <div className="top">
                            <FontAwesomeIcon icon={faFileLines}  className='me-1'/>Capital Gains Tax (CGT):
                            </div>
                            <div className="bot">
                            When transferring assets into a Living Trust, CGT may apply if the assets have appreciated in value.
                            </div>
                            </div>
                            
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="box">
                            <div className="top">
                        <FontAwesomeIcon icon={faRobot} className='me-1'/>Inheritance Tax (IHT):
                            </div>
                            <div className="bot">
                            Assets placed into the Trust during the settlor’s lifetime may still be subject to IHT, depending on the value and timing of the transfer.
                            </div>
                            </div>
                        
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="box">
                            <div className="top">
                        <FontAwesomeIcon icon={faSignal}  className='me-1'/>Nil Rate Bands
                            </div>
                            <div className="bot">
                            Our Living Trusts can leverage the Nil Rate Band and Residence Nil Rate Band to reduce IHT liability.
                            </div>
                            </div>
                        
                        </div>
                     </div>
                </div>
            </div>
            <div className="sec-four">  
                <div className="inner-box">
                    <div className="heading">
                    Additional Benefits of Living Trusts
                    </div>
                <ul>
                    <li><span>Asset Protection–</span> Protects assets from creditors, divorce settlements, and financial mismanagement.</li>
                    <li><span>Bloodline Planning –</span>Ensures wealth is passed down through the bloodline, safeguarding family assets.</li>
                    <li><span>Secondary Planning for Married Couples –</span> Allows couples to name each other as beneficiaries while including children and grandchildren, minimizing IHT on the first death. The surviving spouse can undertake secondary tax planning based on prevailing IHT rules.</li>
                    <li><span>Privacy and Confidentiality–</span> Our Will Trusts can claim both the unused Nil Rate Band and Residence Nil Rate Band of the deceased spouse, further reducing the IHT burden.</li>
                    <li><span>Care Fee Planning –</span> Living Trusts are not subject to public probate, ensuring privacy for beneficiaries.</li>
                   

                </ul>
                <div className="heading">
                10 Reasons to Use a Living Trust:
                </div>
                <ol>
                    
                    <li><span>Avoid Probate-</span>Simplifies and expedites the transfer of assets.</li>
                    <li><span>Protect Vulnerable Beneficiaries-</span>Ensures responsible management of assets for minors or those with special needs..</li>
                    <li><span>Maintain Control-</span>The settlor retains control over assets during their lifetime.</li>
                    <li><span>Tax Efficiency - </span>Tax Efficiency - Reduces potential IHT liabilities and allows for strategic tax planning.</li>
                    <li><span>Asset Safeguarding-</span> Protects assets from third-party claims, including creditors and divorce settlements.</li>
                    <li><span>Continuity During Incapacity-</span>Trustees can manage assets if the settlor becomes incapacitated.</li>
                    <li><span>Privacy-</span>Maintains confidentiality as Trust details are not part of the public record.</li>
                    <li><span>Property Transfers - </span>Allows properties to pass into the Trust, potentially eliminating CGT.</li>
                    <li><span>Flexible Distribution-</span>Enables tailored distribution schedules and conditional payments.</li>
                    <li><span>Long-Term Wealth Management-</span> Facilitates ongoing asset management for future generations.</li>
                </ol>
                <div className="heading">
                Disadvantages of a Living Trust
                </div>
                <ol>
                
                    <li><span>Initial Setup Costs</span>Higher initial costs compared to a Will Trust.</li>
                    <li><span>Ongoing Administration: </span> -Requires regular maintenance and compliance with legal regulations.</li>
                    <li><span>Potential CGT Liability -</span>Transferring assets into the Trust may trigger CGT if assets have appreciated.</li>
                </ol>
                </div>
            </div>
            <div className="sec-five">
                <div className="inner-box">
                    <div className="heading">
                    Contact Us for Professional Advice
                    </div>
                    <div className="row mb-4">
                        <div className="col-12 col-md-4 tex">
                        <FontAwesomeIcon icon={faPhoneVolume} /> <br/>
                        020 8350 4515
                        </div>
                        <div className="col-12 col-md-4 tex">
                        <FontAwesomeIcon icon={faEnvelope} /><br/>
                        info@regencywills.co.uk
                        </div>
                        <div className="col-12 col-md-4 tex">
                        <FontAwesomeIcon icon={faTty} /><br/>
                        07943 828939
                        </div>
                    </div>
                    <div className="bot">
                    In conclusion, a Living Trust is a comprehensive estate planning tool that provides probate avoidance, asset protection, and tax planning benefits, making it an excellent choice for those seeking greater control and privacy during their lifetime.


                    </div>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Livingtursts