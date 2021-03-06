import React from 'react'

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components'

// 20
import { images } from '../../constants'
import './Gallery.css'

/* 🦄🍄js230

10 ref

20 map

30 slide show - 왜인지는 모르는데 화면이 안보이는 버그 생겨서 , 일단 comment처리함

*/
const Gallery = () => {

    // 10
    const scrollRef = React.useRef(null);

    // 20
    const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

    // 30
    const scroll =(p_direction)=>{
        const { current} = scrollRef;

        if (p_direction ==='left') {
            current.scrollLeft -=300;
        } else {
            current.scrollRight +=300;
        }
    }

  return (
    <div className="app__gallery flex__center">

        <div className="app__gallery-content">
            <SubHeading title="subheading component-Gallery"/>
            <h1 className='headtext__cormorant'>
                Gallery
            </h1>
            <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>  orem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu
            </p>
            <button className="custom__button">
                view more
            </button>        
        </div>

        <div className="app__gallery-images">
            {/* 10 */}
            <div className="app__gallery-images_container" ref={scrollRef}>
              {/* 20 */}
              {
                  galleryImages.map((p_image,index)=>(
                      <div className="app__gallery-images_card flex__center"  key={index}>                       

                        <img src={p_image} alt="gallery_image" />

                        <BsInstagram className="gallery__image-icon" />
                      </div>
                  ))
              }
            </div>

            {/* 30
            <div className="app__gallery-images_arrows">
              <BsArrowLeftShort className="gallery__arrow-icon" onClick={scroll('left')}/>
              <BsArrowRightShort className="gallery__arrow-icon" onClick={scroll('right')}/>            
            </div>
             */}
            
        </div>  
    </div>
  )
}

export default Gallery