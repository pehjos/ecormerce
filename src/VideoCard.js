// import React,{useState,useEffect,useRef} from 'react'
// import Rightmobileslider from'@material-ui/core/Drawer'

// import {Avatar} from '@material-ui/core'
// import './videocard.css'

// import {
// Card,


// } from '@material-ui/core'
// import {
//   FavoriteBorder,
//   CloudDownload,
//   PlayArrowRounded,
//   ShareOutlined,
//   PlayCircleOutlineRounded,
//   RemoveRedEyeOutlined,
//   ChatBubbleOutline,
//   CheckCircle,
//   Close,
//   VisibilityOffOutlined,
//   PersonAddDisabledOutlined,
//   VolumeMuteOutlined,
//   BlockOutlined,
//   ErrorOutlineOutlined,
//   VisibilityOutlined,


// } from '@material-ui/icons'
// function Videocard({newsrc,newtype,title,videosrc,description,time,newstypeimg,love,views,comment}) {


//     const [isVideoplaying, setisVideoplaying]=useState(false)
//     const Videoref=useRef(null)
//     const Playvideo=()=>{
//     if(isVideoplaying){
//     //stop
//     Videoref.current.pause()
//     setisVideoplaying(false)

//     }else{
//     //play
//     Videoref.current.play()
//     setisVideoplaying(true)

//     }
    
//     }
// // / UN TRACK AN UN FOLLOW DRAWER

// const [state,setState]=useState({
//   right:false
//   })
//   const toglesliders=(slider,open)=>()=>{
  
//   setState({...state,[slider]:open })
//   }
//   const sliderlists= slider=>(
//   <div component="div"className="slider"
//   onClick={toglesliders(slider,false)}>
//   <div className="icons__body">
//   <div className="icons__child">
//   <VisibilityOutlined/>
//   <p>view creator</p>
//   </div>
//   <div className="icons__child">
//   <VisibilityOffOutlined/>
//   <p>Don't want to see this post</p>
//   </div>
//   <div className="icons__child">
//   <PersonAddDisabledOutlined/>
//   <p>Un Track @pehjos</p>
  
//   </div>
//   <div className="icons__child">
//   <VolumeMuteOutlined/>
//   <p>Mute</p>
//   </div>
//   <div className="icons__child">
//   <BlockOutlined/>
//   <p>Block</p>
//   </div>
//   <div className="icons__child">
//   <ErrorOutlineOutlined/>
//   <p>Report</p>
//   </div>
//   </div>
  
//   <div className="footer">
//   </div>
//   </div>
//   ) 
  


//     return (
//       <div className="cardimg" > 
//       <Rightmobileslider className="drawer" open={state.right} anchor="bottom"
// onClose={toglesliders("right",false)}>
// {sliderlists("right ")}

// </Rightmobileslider >

//        {isVideoplaying?"":(
//           (<PlayCircleOutlineRounded style={{fontSize:70,borderRadius:50,color:"whitesmoke",}} className="play"/>)
//          )}
//          <div className="header">
//          <Avatar size='small' src={newsrc} />
//          <marquee>{title}</marquee>
//          <p onClick={toglesliders("right",true)}>{newtype}</p>
//          </div>
//         <video  src={videosrc}
//            ref={Videoref}
//            onClick={Playvideo}
//            className="video__player"
//             loop       
          
// />
//        <div className="tile">
//        <div className="tileright">
//        <p>{description}</p>
      
//      </div>
//      <div className="tileleft">
//      <div className="tilelefticons">
//      <ShareOutlined/>
    
//      </div>
//      <div className="tilelefticons">
//      <CloudDownload/>
   
//      </div>
//      <div className="tilelefticons">
//      <RemoveRedEyeOutlined/>
      
//      </div>
//      </div>
//        </div>
//        </div>
//     )
// }

// export default Videocard
