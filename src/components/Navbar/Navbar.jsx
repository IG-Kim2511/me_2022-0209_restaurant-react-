import React from 'react'


import images from '../../constants/images.js'

import './Navbar.css'

const Navbar = () => {
  return (
    <div>
    <p>navbar</p>


    <div className="app__navbar-logo">
    <img src={images.G} alt="app__logo" />
    </div>
  </div>

  )
}

export default Navbar