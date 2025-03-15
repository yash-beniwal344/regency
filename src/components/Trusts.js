import React from 'react';
import img1 from './images/trusts1.png';
import img2 from './images/trusts2.png';
import img3 from './images/trusts3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines, faPhoneVolume, faRobot, faSignal, faTty } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const Trusts = () => {
  return (
    <div className='trusts'>
    <div className="sec-one">
           <div className="inner-box">
               <div className="row">
                   <div className="col-12 col-sm-12 col-md-6 mb-5 bot">
                       <div className="text">
                           <div className="big">
                           A Flexible and Cost-Effective Estate Planning Solution
                           </div>
                           <div className="small">
                           A Will Trust, also known as a Testamentary Trust, is a legal arrangement created within a Will that comes into effect upon the testator’s death. It directs that some or all of the deceased's assets are placed into a Trust, managed by appointed Trustees for the benefit of designated beneficiaries. Compared to a Living Trust, which is established during a person’s lifetime, a Will Trust is often more flexible and cost-effective. Additionally, a Will Trust only takes effect when you die and can be revoked or changed at any time during your lifetime for minimal cost compared to a Living Trust.
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
                           Why Choose a Will Trust Over a Living Trust?
                           </div>
                           <div className="small">
                              <ul>
                               <li>Cost-Effective – Establishing a Will Trust is typically less expensive than creating and maintaining a Living Trust.</li>
                               <li>Simplified Management – : No need to transfer assets into the Trust during one’s lifetime, reducing administrative tasks.</li>
                               <li>Tax Benefits – Upon death, Capital Gains Tax (CGT) is no longer applicable. Instead, assets are subject to Inheritance Tax (IHT), which may be more favorable depending on the estate's value and applicable exemptions.</li>
                               <li>Flexible Control –: Allows for conditional instructions on asset distribution, ensuring beneficiaries receive assets at appropriate times.</li>
                               <li>Asset Protection – : Safeguards assets from creditors, divorce settlements, and irresponsible spending by beneficiaries.</li>
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
               <div className="sm-heading">
               When assets are transferred into a Trust during a person’s lifetime (Living Trust), Capital Gains Tax may apply if the assets have appreciated in value. However, with a Will Trust, no CGT is due upon death. Instead, the estate is assessed for Inheritance Tax. Properties that pass into the Trust benefit from the complete elimination of Capital Gains Tax, which can result in substantial tax savings.
               </div>
                <div className="boxs row">
                   <div className=" col-12 col-sm-4">
                       <div className="box">
                       <div className="top">
                       <FontAwesomeIcon icon={faFileLines}  className='me-1'/>Living Trust
                       </div>
                       <div className="bot">
                       May incur Capital Gains Tax (CGT) when assets appreciate.
                       </div>
                       </div>
                       
                   </div>
                   <div className="col-12 col-sm-4">
                       <div className="box">
                       <div className="top">
                   <FontAwesomeIcon icon={faRobot} className='me-1'/>Will Trust
                       </div>
                       <div className="bot">
                       Avoids CGT upon death and benefits from Inheritance Tax (IHT) exemptions.
                       </div>
                       </div>
                   
                   </div>
                   <div className="col-12 col-sm-4">
                       <div className="box">
                       <div className="top">
                   <FontAwesomeIcon icon={faSignal}  className='me-1'/>Result
                       </div>
                       <div className="bot">
                       A Will Trust can lead to substantial tax savings.
                       </div>
                       </div>
                   
                   </div>
                </div>
           </div>
       </div>
       <div className="sec-four">  
           <div className="inner-box">
               <div className="heading">
               Additional Benefits of Will Trusts
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

export default Trusts