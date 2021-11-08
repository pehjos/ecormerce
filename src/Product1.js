import React,{useState,useEffect} from 'react'
import {getAllVideos,createVideo,deleteVideos} from './APIfuana'
import Videocard from './VideoCard'
function VideoApi() {
    const [video,setVideos]=useState('')
useEffect(() => {
getAllVideos.then(res =>{
setVideos(res)
console.log(res)
})


},[video])

function handleDeleteItem(event, id) {
    event.preventDefault();
    deleteVideos(id).then(res => res);
    const newExpenses = video.filter(video => video.ref.id !== id);
    setVideos(newExpenses);
  }


return (
    <div className="videoAPi">
    {video && video.map(video => (
        <Videocard  key={video.ref}
            newsrc="time blog"
            newtype="IB"
            newstypeimg ="https://thumbs.dreamstime.com/b/blue-soap-bubbles-isolated-pink-bakground-background-bright-soap-bubbles-png-bubbles-set-isolated-transparent-145694204.jpg"
           videosrc={video.data.videoName.product_name }
            title="New jesey team has join the primer "
            description="On this year early june the national team of the united state join the legue as stated by the country prime minister the contract was sigh to be taken in 2121national team of the united state join the legue as stated by the country prime minister the contract was sigh to be taken in 2121"
            time="50m"
            comment="56"
           share="200" 
            love="4k"
            // onClick={event => handleDeleteItem(event, video.ref.id)}
            />



))}
        </div>
    )
}

export default VideoApi