import React from 'react'
import socialImg from '../assets/images/logo/Top-Social-Media-Marketing-Companies.png';
import icon1 from '../assets/images/logo/Facebook_icon-150x150.png';
import icon2 from '../assets/images/logo/Instagram-150x150.png';
import icon3 from '../assets/images/logo/linkedin-150x150.png';
import icon4 from '../assets/images/logo/Tiktok-150x150.png';
import icon5 from '../assets/images/logo/Youtube-150x150.png';

const Footer = () => {
  return (
    <React.Fragment>
    <div className='footer-container'>
        <div className="footer-box grid--footer-3">
                <div className="footer-col">
                   <div className="footer-map">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.268813926638!2d121.06067451483997!3d14.583752489813158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8114f9aa58d%3A0x165d0ab6bc2e45d9!2sAntel%20Global%20Corporate%20Center%20Condo.%20Asso.Inc.!5e0!3m2!1sen!2sph!4v1681365688853!5m2!1sen!2sph"
                     style={{border:0, width:'100%', height:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                   </div>
                </div>
                <div className="footer-col social-contact">
               <div className="footer-address-container">
               <ion-icon name="location-outline"></ion-icon>
                    <h2 className='footer-address'>
                        Antel Global Bldg. Doña Julia Vargas Ave., Ortigas Center, Pasig City
                        Metro Manila, Philippines
                    </h2>
               </div>
                    <ul className="footer-contact">
                        <li>
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                            <p>09815384162</p>
                        </li>
                        <li>
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                            <p>09171473589</p>
                        </li>
                        <li>
                        <ion-icon name="call-outline"></ion-icon>
                            <p>02-82937160</p>
                        </li>
                        <li>
                        <ion-icon name="mail-outline"></ion-icon>
                            <p>info@wedigitalph.com</p>
                        </li>
                    </ul>
                </div>
                <div className="footer-col social-footer">
                    <img src={socialImg} alt="" />
                    <ul className="icon-footer">
                        <li><img src={icon1} alt="" /></li>
                        <li> <img src={icon3} alt="" /></li>
                        <li><img src={icon5} alt="" /></li>
                        <li><img src={icon4} alt="" /></li>
                        <li><img src={icon2} alt="" /></li>
                    </ul>
                </div>
        </div>
        
    </div>
    <p className="footer-by">WEDIGITAL PH © 2022</p>
    </React.Fragment>
  )
}

export default Footer