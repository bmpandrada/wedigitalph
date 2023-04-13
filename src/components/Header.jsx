import React from 'react'
import logoNav from '../assets/images/logo/WeDigital-PH-Logo.png'
const Header = () => {
  return (
    <div className="navbar">
    <div className="logo-container">
      <img className='logo-img' src={logoNav} alt="" />
    </div>
    <nav>
      <ul>
        <li><a className='active' href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services <ion-icon name="caret-down-outline"></ion-icon></a>
        <ul className='sub'>
                <li><a href="">Digital Marketing</a></li>
                <li><a href="">Web Design & Development</a></li>
                <li><a href="">Hosting</a></li>
            </ul></li>
        <li><a href="#">Oracle</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav>
    <div className="nav-btn">
    <a href="" className='btn'>Get Qoutes</a>
    </div>
  </div>
  )
}

export default Header