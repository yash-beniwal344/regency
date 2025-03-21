import React, { useState } from 'react'
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const CreatePass = () => {
    const [pass,setpass] = useState();
    const [confirm,setconfirm] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.email;
    const newpass = (e) =>{
        setpass(e.target.value)
    }
    const newconfirm = (e) =>{
        setconfirm(e.target.value)
    }
    const submit = ()=>{
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_KEY}/createpass`,
            data: {
             
                email: data,
                password: pass,
                confirmpassword:confirm
            }

        }).then((response) => {
            if (response.data.status === true) {
              
                toast.success(response.data.message);
                navigate('/login')
            }
            else {
                toast.error(response.data.message)
            }
        }).catch((error) => {
            console.log(error);
            toast.error("something went wrong")
        })
    }
  return (
    <div className='createpass'>
    <div className="sec-one">
        <div className="inner-box">
            <div className="welcome">
                create new password
            </div>
            <div className="sm-text">
            Please enter your new password 
            </div>
            <div className="email">
                <label>New Password</label><br/>
                <input type='text' value={pass} onChange={newpass}/>
            </div>
            <div className="email">
                <label>confirm Password</label><br/>
                <input type='text' value={confirm} onChange={newconfirm}/>
            </div>
           
            <div className="btn">
            <button onClick={submit}>submit</button>
            </div>
           

        </div>
    </div>
    <Footer />
</div>
  )
}

export default CreatePass