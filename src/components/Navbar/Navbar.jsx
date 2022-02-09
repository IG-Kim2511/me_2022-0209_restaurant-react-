import React from 'react'


import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';


import images from '../../constants/images.js'

import './Navbar.css'

const Navbar = () => {


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className='app__navbar-links'>
        {/*css10. App.css*/}
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log in / Registration</a>
        <a href='/' className='p__opensans'>Book Table</a>
      </div>

      <div className='app__navbar-smallscreen'>
      
      {/*react-icons로 가져온 icons...
        css적용하려면 여기에 코딩해야함 */}
        
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{}} />


      
        {/*🦄 43:00 */}

      </div>
 
  </nav>

  )
}

export default Navbar