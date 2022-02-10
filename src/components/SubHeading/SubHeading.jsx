import React from 'react'

import {images} from '../../constants'

/* 🍖55:00 header.jsx */
const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>    
      <p>{title}</p>
      <img src={images.spoon} className='spoon__img'/>    
    </div>
  )
}

export default SubHeading