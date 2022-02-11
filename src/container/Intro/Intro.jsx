import React from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


import {meal} from '../../constants'
import './Intro.css'

const Intro = () => {

    /* 🍀🍄
        10. useRef
        20. video : ref={vidRef}

        왜인지 모르지만, app__video div에 css,position: relative 넣어야지 play버튼이 보임
    
    
    */
    const vidRef = React.useRef();
    const [playVideo,setPlayVideo] = React.useState(false);

  return (
    <div className="app__video">
        
        <video 
         loop
         type="video/mp4"
         controls={false}
         muted     
         autoPlay
        
         ref={vidRef}
        src={meal}/>

        <div className="app__video-overlay flex__center">
            <div 
                onClick={()=>{

                    /* 
                        setPlayVideo(!playVideo);
                        playVideo의 반대로 set

                        playVideo가 true 일때 -> false
                        playVideo가 false 일때 -> true
                    
                    */
                    setPlayVideo(!playVideo);
                    

                    /* 
                    🍀JS Video play() Method                    
                        playVideo가 true 일때 -> ~.pause()
                        playVideo가 false 일때 ->  ~.play()                    
                    */

                    if (playVideo) {
                        vidRef.current.pause();                                        
                    } else {
                        vidRef.current.play();
                    }                
                    console.log({playVideo});
                    console.log(vidRef.current)
                }}
                className="app__video-overlay_circle flex__center"
            >

            {/*   playVideo가 true 일때 -> pause icon
                        playVideo가 false 일때 -> play icon
                    
                    */}
                {
                    playVideo?
                    (<BsPauseFill color="#fff" fontSize={30}/> )
                    :(<BsFillPlayFill color="#fff" fontSize={30}/> )
                }            
            </div>
        
        </div>
    
    </div>
  )
}

export default Intro