import React from 'react'
import { SubHeading } from '..'

import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="app__newsletter">
         <div className="app__newsletter-heading">
            <SubHeading title="subheading props : newsletter"/>

            <h1 className="headtext__cormorant">Subscribe Newsletter</h1>       
        
        </div>

       
         <div className="app__newsletter-input flex__center">
        
            <input type="email" placeholder='placeholder'/>

            <button className="custom__button">subscribe</button>
        </div>
    
    
    </div>
  )
}

export default Newsletter