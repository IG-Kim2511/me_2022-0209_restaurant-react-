import React from 'react'

import {MenuItem, SubHeading} from '../../components'
import {images,data} from '../../constants'

import './SpecialMenu.css'


const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">

    <div className="app__specialMenu-title">
    
            {/* 🍀SubHeading props */}
            <SubHeading title="SubHeading props-Menu"/>
            <h1 className="headtext__cormorant">Menu-SpecialMenu</h1>

            <div className="app__specialMenu-menu">
                <div className="app__specialMenu-menu_wine  flex__center">
                    <p className="app__specialMenu-menu_heading">Wine</p>

                    <div className="app__specialMenu_menu_items">
                    {/*🍀r121 map loop + data 
                        05 ~map.(()=>()) 형식 주의함  , {}틀림

                        10. data.wines 가져옴
                        20. props전송
                        30 key...그냥 적음                 
                    */}
                    {
                        data.wines.map((wine,index) => (
                            <MenuItem 
                            title={wine.title} 
                            price={wine.price} 
                            tags={wine.tags} 
                            key={wine.title + index} />                        
                        ))                    
                    }
                    </div>
                </div>

                <div className="app__specialMenu-menu_img">
                    <img src={images.menu}/>                
                </div>

                <div className="app__specialMenu-menu_cocktails  flex__center">
                    <p className="app__specialMenu-menu_heading">
                        Cocktails
                    </p>

                    {/* 🍉r121 */}
                    {
                        data.cocktails.map((cocktail,index) => (
                            <MenuItem 
                            title={cocktail.title} 
                            price={cocktail.price} 
                            tags={cocktail.tags} 
                            key={cocktail.title + index} />                        
                        ))                    
                    }

                </div>
            </div>
        </div>
    
        <div style={{ marginTop: 15 }}>
                <button className='custom__button'>View More</button>
        </div>
    
    </div>
  )
}

export default SpecialMenu

