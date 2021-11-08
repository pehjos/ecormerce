import React,{useEffect,useState,useRef} from 'react'
import videosrc from './video.mp4'
import './Video1.css'
import ViewMore from './images/ViewMore.jpg'
import { MusicVideoSharp, PlayCircleFilled } from '@material-ui/icons'


function Video() {
    const [isVideoplaying, setisVideoplaying]=useState(false)
    const Videoref=useRef(null)
    const Playvideo = () => {
        
    if(isVideoplaying){
    //stop
    Videoref.current.pause()
    setisVideoplaying(false)

    }else{
    //play
    Videoref.current.play()
    setisVideoplaying(true)

    }

    }
  
    
return (
    <div className="video">
        <div className="video__video">
             {isVideoplaying?"":(<PlayCircleFilled onClick={Playvideo}/> )  } 
        <video src={videosrc}
        ref={Videoref}
        onClick={Playvideo}
        className="video__player"
        loop
        alt="snap"
        onSeeking


        />  
    </div>
        
        <div className="video__text">
            <h4 className="video__title">X'mas product</h4>
            <p>Lorem adipisicing elis nisi rem tempora nam blanditiis labore debitis quod consectetur voluptatem?</p>
        </div>
        <div className="video__viewMore">
            <p>View more</p>
       </div>
    </div>
   )
}

export default Video
