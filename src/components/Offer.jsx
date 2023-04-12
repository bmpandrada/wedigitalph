import React from 'react'
import iconOne from '../assets/images/offer/megaphone_img_icon.png'
import iconTwo from '../assets/images/offer/webdev_img_icon.png'
import iconThree from '../assets/images/offer/hosting-icon.png'

const Offer = () => {
  return (
    <div className="container">
        <h2 className="feature title">
        WHAT WE OFFER?
        </h2>
        <div className="container-feature grid--cols-3">
            <div className="feature-box box-1">
                <h2 className="offer-title">Digital Marketing</h2>
                <img src={iconOne} alt="" />
                <a href="" className="btn"> know more</a>
            </div>
            <div className="feature-box box-2">
            <h2 className="offer-title">Digital Marketing</h2>
                <img src={iconTwo} alt="" />
                <a href="" className="btn"> know more</a>
            </div>
            <div className="feature-box box-3">
            <h2 className="offer-title">Digital Marketing</h2>
                <img src={iconThree} alt="" />
                <a href="" className="btn"> know more</a>
            </div>
        </div>
    </div>
  )
}

export default Offer