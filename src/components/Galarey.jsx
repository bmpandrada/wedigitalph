import React from 'react'
import pf1 from '../assets/images/portfolio/PRESIDIUM_LOGO-scaled.jpg'
import pf2 from '../assets/images/portfolio/GORGEMETIQUE-LOGO-scaled.jpg'
import pf3 from '../assets/images/portfolio/MQ_LOGO-scaled.jpg'
import pf4 from '../assets/images/portfolio/powerplus-scaled.jpg'

const Galarey = () => {
  return (
    <div className="container">
        <div className="flex-galarey">
            <h2 className="galarey title">
            CLIENTS & <br /> PORTFOLIO
            </h2>
            <p className='galarey-text'>One of our main priorities is building strong and lasting client relationships. 
                These are our clients who have trusted us throughout the years!</p>
        </div>
        <div className="container">
            <div className="portfolio grid--cols-4">
                <img className='pf-img' src={pf1} alt="" />
                <img className='pf-img' src={pf2} alt="" />
                <img className='pf-img' src={pf3} alt="" />
                <img className='pf-img' src={pf4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Galarey