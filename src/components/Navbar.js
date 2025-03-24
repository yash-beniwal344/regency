import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './images/logo BLACK 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const auth = localStorage.getItem('user')
  let navigate = useNavigate();
  const home = () => {
    navigate('/')
  }
  const [showlink, setshowlink] = useState(false);
  const clicked = () => {
    setshowlink(false)
  }
  const logout = () => {
    if (window.confirm('logout?') === true) {
      localStorage.clear()
    }
    else {
      navigate('/')
    }
  }
  return (
    <div className='main'>
      <div className="navbar-one">
        <div className='navbar'>

          <img src={logo} alt='logo' className='logo' onClick={home} />

          <ul className='main-ul'>
            <li ><Link to='/'>Home</Link></li>
            <li><Link to='/will'>Will</Link></li>
            <li><Link to='/lpa'>LPA</Link></li>
            <li><Link to=''>Trusts</Link>
              <div className="trustdropdown">
                <ul className='trustlist'>
                  <li><Link to='/livingtrusts'>Living Trusts</Link></li>
                  <li><Link to='/trusts'>Will Trusts</Link></li>
                </ul>
              </div>

            </li>
            <li><Link to='/Calculators'>Calculators</Link></li>
            <li ><Link to='/legal'>Legal Services</Link>
              <div className="legaldropdown">
                <ul className='legallist'>
                  <li><Link to='/general'>General Service</Link></li>
                  <li><Link to='/legalservice'>Other Legal Service</Link></li>
                </ul>
              </div>
            </li>
            <li>{auth?<Link onClick={logout}>Logout</Link>:<Link to='/signup'>Signup</Link>}</li>
            <li className='startbtn  '><Link to='/start'>Get Started</Link></li>
          </ul>

          {/* <ul className='main-ul'>
          <li><Link to='/login' onClick={clicked}>Login</Link></li>
          <li><Link to='/signup' onClick={clicked}>Signup</Link></li>
          </ul>
        } */}


        </div>
      </div>
      <div className="navbar-two ">
        <div className="navbar">
          <img src={logo} alt='logo' className='logo' onClick={home} />
          <ul className='main-ul'>
            <li><Link onClick={() => setshowlink(!showlink)}>{showlink ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</Link></li>

          </ul>
        </div>
        <div className={showlink ? "mobile-links" : "mobile"}>
       
            <ul>
              <li><Link to='/' onClick={clicked}>Home</Link></li>
              <li><Link to='/will' onClick={clicked}>Will</Link></li>
              <li><Link to='/lpa' onClick={clicked}>LPA</Link></li>
              <li><Link to='/livingtrusts' onClick={clicked}>Living Trusts</Link></li>
              <li><Link to='/trusts' onClick={clicked}>Will Trusts</Link></li>
              <li><Link to='/Calculators' onClick={clicked}>Calculators</Link></li>
              <li><Link to='/general' onClick={clicked}>General Service</Link></li>
              <li><Link to='/legalservice' onClick={clicked}>Other Legal Service</Link></li>
              <li>{auth?<Link onClick={logout}>Logout</Link>:<Link to='/signup'>Signup</Link>}</li>
              <li><Link to='/start' onClick={clicked}>Get Started</Link></li>
            </ul>
            {/* :
            <ul className='main-ul'>
              <li><Link to='/login' onClick={clicked}>Login</Link></li>
              <li><Link to='/signup' onClick={clicked}>Signup</Link></li>
            </ul>
          } */}
        </div>
      </div>
    </div>
  )
}

export default Navbar