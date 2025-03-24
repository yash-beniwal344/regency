import React, { useState } from 'react'
import Footer from './Footer'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const Otp = () => {
    const [otp ,setotp] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const otpvalue = (e)=>{
        setotp(e.target.value);
    }
    const submit = ()=>{
      const email = location.state.email;
    axios({
        method:'post',
        url:`${process.env.REACT_APP_API_KEY}/otp`,
        data:{
            otp:otp,
            email:email
         
        }
    }).then((response)=>{
        if(response.data.status===true){
           
            toast.success(response.data.message);
            navigate('/createPass',{state:{email}})
        }
        else{
            toast.error(response.data.message) 
        }
    }).catch((error)=>{
        console.log(error);
        toast.error('something went wrong')
    })
    }
  return (
    <div className='otp'>
    <div className="sec-one">
        <div className="inner-box">
            <div className="welcome">
            Enter OTP
            </div>
            <div className="sm-text">
            We have sent an OTP to your email address. Please enter it below to verify your account.
            </div>
            <div className="email">
                <label>OTP</label><br/>
                <input type='text' value={otp} onChange={otpvalue}/>
            </div>
           
            <div className="row text-center mb-3">
                <div className="col-12  p-0">
                    <button onClick={submit}>verify OTP</button>
                </div>

            </div>
            <div className="register">
            Don’t receive OTP <Link>Resend.</Link>
            </div>

        </div>
    </div>
    <Footer />
</div>
  )
}

export default Otp