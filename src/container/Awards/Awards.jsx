import React from 'react'


import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Awards.css'


// const AwardCard = ({pp_award : {imgUrl, title, subtitle}})=>(
const AwardCard = ({pp_award})=>(
    <div className="app__laurels_awards-card">
        <div className='explain'>map loop + data , AwardCard</div>
        <img src={pp_award.imgUrl}/>
        <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
         {pp_award.title}
        </p>
        <p className="p__opensans">
          {pp_award.subtitle}
        </p>
        </div>
    
    </div>
)

const Awards = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">

        <div className="app__wrapper_info">

            <SubHeading title="SubHeading props-Awards" />

            <h1 className="headtext__cormorant">
                Our Awards
            </h1>
            
            <div className="app__laurels_awards">
              {
                data.awards.map(
                    (p_award)=>(
                        <AwardCard pp_award={p_award} key={p_award.title}/>))
              }        
            </div>    
        </div>   
    </div>
  )
}

export default Awards