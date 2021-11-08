import { DeleteOutlined, FavoriteBorder, FavoriteOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import { useStateValue } from "./Stateprovider";
import { getBasketTotal } from "./reducer";
import {deleteCart} from '././actions/cart'
import './basket.css'
import { useDispatch, useSelector } from 'react-redux';
function Basket({id,post}) {
    const [count, setCount] = useState(1);
    const userDetails=JSON.parse(localStorage.getItem("user"))
    const {posts,isLoading}=useSelector((state)=>state.posts)
    const {  cart, Loading } = useSelector((state) => state.cart);
    const [postData, setPostData] = useState({ 
        product_customer:"",
        product_cart:0,
      
      }); 
     const dispatch1 = useDispatch();
    // const handleSubmit=()=>{
    //     dispatch1(updatePost(post._id,{  product_customer:"",
    //        product_cart:0
    //     }));
    //     console.log("remove")
    //     console.log(postData)
    //     }
           
console.log(cart)
let counter=0;
for (const post of posts){

 if(post.product_customer)   counter++;
}
console.log(counter)

let total=0;
if(userDetails.uid!==posts.product_customer){
  posts.forEach(item=> {
     total+=item.product_price; 
     
parseInt(total)
  })
    }
  console.log(total)  
  if(userDetails.uid!==posts.product_customer){  
   const totalprice=posts.reduce((total,item)=>{
return total+item.product_price

   },0)
   console.log(totalprice) 
  }


  let counter1=0;
  
 cart.map(post=> {
    if(userDetails.uid==post.product_userId){
console.log(post.product_price)
counter1++
    }

})
console.log(counter1)




    console.log(posts)
      const removeFromBasket = () => {
            // remove the item from the basket
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id,
            })
        }
      const [{ basket }, dispatch] = useStateValue();
   
return (
    <div className="basketmain">
<div className="basket">
    <p>Total items in Basket({counter1})</p>
<div className="basketbody">
    <p>TOTAL PRICE (${total})</p>
    <h6>CHECKOUT</h6>
    <h6>CALL SUPLIER</h6>


    {cart.map(post=> (
        userDetails.uid!==post.product_userId?"":(


<div key={post.id} className="basketcontent">


<div className="basketcontenttop">
<div className="basketcontentimage">
 <img src={post.image} />          
</div> 
<div className="basketcontent__desc">
 <p>{post.product_desc}</p>  
 <h5>${post.product_price*count}</h5> 
   {}      
</div>         
</div> 
<div className="basketcontentbottom">
<div className="basketcontent_left">
 <FavoriteBorder/>|
 <DeleteOutlined/>
 <p onClick={() =>  dispatch1(deleteCart(post._id))}>REMOVE</p>           
 </div> 
 <div className="basketcontentright">
 <button onClick={() => setCount(count - 1)}>-</button> 
  <p>{count}</p> 
  <button onClick={() => setCount(count + 1)}>+</button>  
  
</div>          
</div>           
</div>

     ) ))}



</div>  

</div>
<h5>RECENTLY VIEWED ITEMS</h5>  
<div className="view">

<div className="viewcontent">
<img src="https://cdn1.vectorstock.com/i/1000x1000/11/60/electric-cooker-oven-vector-571160.jpg"/> 
<p>centuries. As a result, the lorem ipsum is no longer
      considered Latin, even though it looks a lot</p> 
<p>$400</p>
</div>
</div>
</div>
)
}

export default Basket
