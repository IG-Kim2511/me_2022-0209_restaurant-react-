import React from 'react'

import {meal} from '../../constants'
import './Intro.css'

const Intro = () => {

    const countRef = React.useRef(1);

    console.log(countRef);
  return (
    <div className="app__video">
        
        <video src={meal}/>
    
    </div>
  )
}

export default Intro