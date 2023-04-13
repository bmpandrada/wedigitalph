import React from 'react'
import gropImg from '../assets/images/group_picture-scaled.jpg'
const AboutOne = () => {
  return (
    <div className="about-one-container grid--cols-1">
        <div className="about-img-container">
        <img src={gropImg} alt="" className="group-img" />
        </div>
        <div className="about-box-text">
            <h2 className="title">
            WHAT IS
WEDIGITAL PH?
            </h2>
            <p className="about-text">
            Our company aims to turn impossible out-of-the-box ideas into digital realities.
             We are a dynamic group that is dedicated to helping people and businesses succeed online!
            </p>
            <a href="" className="btn">Know us more</a>
        </div>
        
    </div>
  )
}

export default AboutOne