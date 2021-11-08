import { ChevronRightRounded } from '@material-ui/icons'
import React from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import Video from './Video'
import './middle.css'
import { Hidden } from '@material-ui/core'
import Promotion from './Promotion'
import { useDispatch, useSelector } from 'react-redux';
function MiddleSelections() {
    const {posts,isLoading}=useSelector((state)=>state.posts)

    if (isLoading) {
      return (
        <div  className="loadingPape">
          <CircularProgress size="2em" />
        </div>
      );
    }


return (
<div  className="middle">
<div  className="middle_selective">
<div  className="middle_selective_p">
<p>Selectives</p>

</div>

<Hidden smDown>
<div className="promotion__banner">
    <Promotion />
</div>
</Hidden>

<Hidden smUp>
<div className="card__flex">
{ posts.map((post)=>(
      post.tags!=="Selective"?"":(
<div  className="middle_selective_card">
<div  className="middle_selective_cardimg">
<img src={post.image}/>
</div> 
<div  className="middle_selective_carddesc">
<p>{post.product_title}</p>
</div> 
<div  className="middle_selective_cardprice">
<p>¢{post.product_price}</p>
</div> 
</div>

 )))}
</div>
</Hidden>
{/* responsive */}
</div> 
{/* video component */}
{/* <Hidden smUp>
  <Video/>
</Hidden> */}

<div className="middle_flex">
    {/* clearance */}
<div  className="middle_selective">
<div  className="middle_selective_p">
<p>Clearance Sale</p>
<p style={{color:'#2196f3',fontWeight:600}}>Start in 01:51:45</p>
<p>more</p>
<ChevronRightRounded/>
</div>
<div className="card__clearance">
{ posts.map((post)=>(
      post.tags!=="commingsoon"?"":(
<div className="card__clearance__iner">  
<div className="card__clearance__img">
<img src={post.image}/>
</div>
<div className="card__clearance__text">
<div className="card__clearance_dec">
<p>
{post.product_title}</p>
</div>
<div className="card__clearance_per">
    <h6>Coming soon</h6>
<p>{post.product_percentage}% off</p>
</div>
<div className="card__clearance__price">
<h6>¢{post.product_price}</h6>

<s>¢{post.product_cancelprice}</s>

</div>

</div>

</div>
 )))}
</div>

<Hidden smDown>
<div className="hot__sales_baners_img1">
<img src="https://sc01.alicdn.com/kf/HTB1U3MgXsfrK1RkSmLyq6xGApXa3/200378671/HTB1U3MgXsfrK1RkSmLyq6xGApXa3.jpg"/>

</div>
</Hidden>
</div> 
 
{/* HOT SALES */}
<div  className="middle_selective">
<div  className="middle_selective_p">
<p>Hot Sales</p>
</div> 
<div className="hot__sales">
{ posts.map((post)=>(
      post.tags!=="hot"?"":(
<div className="hot__sales__card">

<div className="hot__sales__img_card">
<img src={post.image}/>
</div>
<div className="hot__sales__desc">
<p>
{post.product_title}</p>
</div>
<div className="hot__sales__price">
<h6>¢{post.product_price}</h6>
</div>

</div>
      )))}   
</div>


{/* ############midle#################### */}
<div className="hot__sales_baners">
{ posts.map((post)=>(
      post.tags!=="banner"?"":(
<div className="hot__sales_baners_img">
<img src={post.image}/>

</div>
      )))}
<div className="hot__sales_baners_pro">
<div className="card__flex">

{ posts.map((post)=>(
      post.category!=="computer"?"":(
<div  className="middle_selective_card">
<div  className="middle_selective_cardimg">
<img src={post.image}/>
</div> 
<div  className="middle_selective_carddesc">
<p>{post.product_title}</p>
</div> 
<div  className="middle_selective_cardprice">
<p>¢{post.product_price}</p>
</div> 
</div>
      )))}
</div>

</div>
<Hidden smUp>
{ posts.map((post)=>(
      post.tags!=="solarimg"?"":(
<div className="hot__sales_baners_img">
<img src={post.image}/>

</div>
      )))}
</Hidden>

</div>
</div> 

</div>




{/* SENIOR DIV%%%%%%%%%%%%%%%%%%%%%%%% */}
</div>

)
}

export default MiddleSelections
