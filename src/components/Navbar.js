import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo BLACK 1.png'

const Navbar = () => {


  return (
    <div className='main'>
<div className="navbar-one">
    <div className='navbar'>

     <img src={logo} alt='logo' className='logo'/>
      <ul className='main-ul'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Will'>Will</Link></li>
        <li><Link to='/LPA'>LPA</Link></li>
        <li><Link to='/Trusts'>Trusts</Link></li>
        <li><Link to='/Calculators'>Calculators</Link></li>
        <li ><Link to='/legal'>Legal Services</Link></li>
        <li className='startbtn'><Link to='/Started'>Get Started</Link></li>
      </ul>
    </div>
    </div>
    <div className="navbar-two">
    <div className="navbar">
    <img src={logo} alt='logo' className='logo'/>
    <ul className='main-ul'>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Will'>Will</Link></li>
       
        <li className='startbtn'><Link to='/Started'>Get Started</Link></li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Navbar