import React, { useState } from 'react'
import logoNav from '../assets/images/logo/WeDigital-PH-Logo.png'
const Header = () => {
  const [toggle, setToggle] = useState(false);


  const handleClick = () => {
    setToggle(!toggle)
  }
  return (
    <div className="navbar">
    <div className="logo-container">
      <img className='logo-img' src={logoNav} alt="" />
    </div>
    <nav >
      <ul className={`${toggle ? 'show' : ''}`}>
        <li><a onClick={handleClick} className='active' href="#">Home</a></li>
        <li><a onClick={handleClick} href="#">About Us</a></li>
        <li><a onClick={handleClick} href="#">Services <ion-icon name="caret-down-outline"></ion-icon></a>
        <ul className='sub'>
                <li><a onClick={handleClick} href="">Digital Marketing</a></li>
                <li><a onClick={handleClick} href="">Web Design & Development</a></li>
                <li><a onClick={handleClick} href="">Hosting</a></li>
            </ul></li>
        <li><a href="#">Oracle</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <div className="burger" onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
    <div className="nav-btn">
    <a href="" className='btn'>Get Qoutes</a>
    </div>
  </div>
  )
}

export default Header