import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './images/logo BLACK 1.png'

const Navbar = () => {
let navigate = useNavigate();
const home = ()=>{
  navigate('/')
}

  return (
    <div className='main'>
      <div className="navbar-one">
        <div className='navbar'>

          <img src={logo} alt='logo' className='logo' onClick={home}/>
          <ul className='main-ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/will'>Will</Link></li>
            <li><Link to='/lpa'>LPA</Link></li>
            <li><Link to='/Trusts'>Trusts</Link>
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
            <li className='startbtn  '><Link to='/start'>Get Started</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-two">
        <div className="navbar">
          <img src={logo} alt='logo' className='logo'  onClick={home}/>
          <ul className='main-ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/will'>Will</Link></li>

            <li className='startbtn py-3 px-4'><Link to='/login'>Get Started</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar