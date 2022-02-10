import React from 'react'
import { SubHeading } from '../../components'
import {images} from '../../constants'

import "./Header.css";


const Header = () => {
  return (

    /*🍀app__wrapper section__padding 👉 App.css */
    <div className='app__header app__wrapper section__padding'>

      {/* 🍀55:00 props- text */}
      <SubHeading title="Chase the new flavour"/>

      <h1 className='app__header-h1'>The Key to fine dining</h1>

      <p className='p__opensans' style={{margin:"2rem 0"}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>

      <button type='button' className='custom__button'>Explore Menu</button>
    
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header_img"/>
      </div>
    </div>

  )
}

export default Header