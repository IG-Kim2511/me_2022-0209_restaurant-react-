import React from 'react'

import {SubHeading} from '../../components'
import {images} from '../../constants'

import './Chef.css'

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
         <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef}/>
        </div>

        <div className="app__wrapper_info">
        
            {/* 🍀 SubHeading props */}
            <SubHeading title="SubHeading props-Chef"/>

            <h1 className="headtext__cormorant">container-chef</h1>

            <div>
                <div>
                    <img src={images.quote}/>
                    <p className="p__opensans">test</p>
                </div>
                <p className="p__opensans">Lorem ipt nesciunt! Nostrum ea eaque, hic tempore esse eos nobis atque repellat praesentium quasi! Totam nisi praesentium magni voluptatibus blanditiis? </p>
            </div>

            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Lorem ipsumlat praesentium quasi! Totam nisi praesentium magni voluptatibus blanditiis?</p>
                <img src={images.sign} alt="sign_image" />
            </div>        
        </div>



    </div>
  )
}

export default Chef