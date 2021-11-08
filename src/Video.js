import React,{useEffect,useState,useRef} from 'react'
import videosrc from './video.mp4'
import './video.css'
import { MusicVideoSharp, PlayCircleFilled } from '@material-ui/icons'
function Video() {
const [isVideoplaying, setisVideoplaying]=useState(false)
const Videoref=useRef(null)
const Playvideo=()=>{
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
{isVideoplaying?"":(<PlayCircleFilled onClick={Playvideo}/> )  } 
<video  src={videosrc}
ref={Videoref}
onClick={Playvideo}
className="video__player"
loop
alt="snap"
onSeeking


/>  
</div>
)
}

export default Video
