import React from 'react'
import './basket.css'
import {deleteCart} from '././actions/cart'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined, FavoriteBorder, FavoriteOutlined } from '@material-ui/icons'
function Cart({image,price,description,post}) {
    const dispatch =useDispatch()
    return (
        <div>
          


<div className="basketcontent">
  

<div className="basketcontenttop">
<div className="basketcontentimage">
 <img src={image} />          
</div> 
<div className="basketcontent__desc">
 <p>{description}</p>  
 <h5>${price}</h5>         
</div>         
</div> 
<div className="basketcontentbottom">
<div className="basketcontent_left">
 <FavoriteBorder/>|
 <DeleteOutlined onClick={() => dispatch(deleteCart(post._id))}/>
 <p onClick={() => dispatch(deleteCart(post._id))} >REMOVE</p>           
 </div> 
 <div className="basketcontentright">
  <h3>-</h3>  
  <h4>4</h4> 
  <h3>+</h3>       
</div>          
</div>           
</div>
 
        </div>
    )
}

export default Cart
