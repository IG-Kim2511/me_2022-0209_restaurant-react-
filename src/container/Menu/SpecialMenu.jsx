import React from 'react'

import {MenuItem, SubHeading} from '../../components'
import {images,data} from '../../constants'


const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">

        <div className="app__specialMenu-title">

            {/* 🍀SubHeading props */}
            <SubHeading title="Menu that fits your palatte"/>
            <h1 className="headtext__cormorant">Today's special</h1>

            <div className="app__specialMenu-menu">
                <div className="app__specialMenu-menu_wine  flex__center">
                <p className="app__specialMenu-menu_heading">Wine & Beer</p>

                <div className="app__specialMenu_menu_items">
                    {/*🍀 map loop + data */}
                    {
                        data.wines.map((wine,index)=>{
                            
                        })

                    }

                    {MenuItem}

                </div>




                </div>

            </div>
        
        
        </div>
    
    
    </div>
  )
}

export default SpecialMenu

