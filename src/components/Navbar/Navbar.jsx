import React from 'react'


import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';


import images from '../../constants/images.js'

import './Navbar.css'

const Navbar = () => {

   
  /*🦄 useState 
  React.useState(~); 쓰면 상단에 useState import안해도 됨  
  */
  const [toggleMenu, setToggleMenu] = React.useState(false);
  
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
      
        {/*🍀react-icons로 가져온 icons...
          css적용하려면 여기에 코딩해야함 

          🍀onClick    
        */}        
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{setToggleMenu(true)}} />
        
        {/* 🍀js35. burger menu bar
          phone size화면일때 보임
          
        */}
        {/*🦄 43:00
        
        if {toggleMenu} true...rendering <div>
        
        */}

        { 
          toggleMenu 
          
          ? 
        
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>          
            {/*🍀onClick*/} 
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>{setToggleMenu(false)}}/>

    
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>      
          </div>

        : null        
        }


            {/* 같은 코딩, javascript mastery 방식
                {toggleMenu &&(

                  <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>          
              
                  <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>{setToggleMenu(false)}}/>

          
                  <ul className="app__navbar-smallscreen_links">
                    <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                    <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                    <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                    <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                  </ul>      
                </div>
                )}
          */} 





      </div>
 
  </nav>

  )
}

export default Navbar