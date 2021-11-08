import { PauseRounded, StrikethroughS } from '@material-ui/icons'
import React,{useEffect,useState,useRef} from 'react'
import { useStateValue } from "./Stateprovider";
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, likePost, deletePost } from './actions/posts'

import { getBasketTotal } from "./reducer";
import { MusicVideoSharp, PlayCircleFilled } from '@material-ui/icons'
import './product.css'

function Product({setCurrentId,country,country1, post,itemdesc,video,percentage,atualp,image,cancelp,id}) {

const dispatch1 = useDispatch();
  const history = useHistory();

 
const [{basket},dispatch]=useStateValue();
const [state,setState] =useState(false)
const addToBasket=()=>{
dispatch({
type:'ADD_TO_BASKET',
item:{
id:id,
image:image,
description:itemdesc,
percentageprice:percentage,
price:atualp,
rating:cancelp,
video:video
}
})
setState(true);
console.log(basket.length +1)
localStorage.setItem("product",JSON.stringify(basket));
}

// open post


const openPost=()=>
{
history.push(`/posts/${post._id}`)
}
const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
    setState(false);
}

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
<div className="product"> 
<div className="product1"> 

<div className="main_product">
<div className="productgr">

<div className="productitems">
<p>{itemdesc}</p>
{!image?(<div className="vid">
      {isVideoplaying?(<PauseRounded  onClick={Playvideo}/> ):(<PlayCircleFilled onClick={Playvideo}/> )  } 
      </div>):(<div></div>)}

{!image?
(<video

src={video}
ref={Videoref}
onClick={Playvideo}
className="video__player"
loop
alt="snap"
onSeeking
/>):(<img onClick={openPost} src={image}/>)}
<div className="actual_per">
<p><s> {cancelp}</s></p>


<h6 >{percentage}% off</h6>
</div>
<div className="btnsection">

<h5>¢{atualp}</h5>
{<h4>{country}</h4>}
</div>
</div>

</div>
</div>
</div>
</div>
)
}

export default Product
