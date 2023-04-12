import React from 'react'
import img1 from '../assets/images/banner/WebDev_banner.png'

const Hero = () => {
  return (
    <div className="container grid--cols-1">
    <div className="hero-banner">
      <img src={img1} alt="" />
    </div>
      <div className="hero-box">
        <h1 className="hero-title">TURN YOUR <br></br>
        <span className="pink"> ME</span> INTO <span className="blue">WE</span> </h1>
        <p className="hero-text">
        Our specialty is providing full-scale digital marketing services to different types of businesses from Social Media Management, 
        Website Creation, Hosting, and SEO.
        </p>
        <a href="" className="btn">our services</a>
      </div>
  </div>
  )
}

export default Hero