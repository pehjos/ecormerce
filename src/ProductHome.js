import React from 'react'
import Product from './Product'
import {  useQuery } from 'react-query'
import video from './video.mp4'
import image from './images/china.jpg'
import image1 from './images/ghana.jpg'
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts2} from './api/index'
import { getPosts } from './actions/posts';
import './homep.css'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
function ProductHome() {
  const {posts,isLoading}=useSelector((state)=>state.posts)
console.log(posts)

// const { DtaLoading, error, data } = useQuery('poData', () =>
// fetch('http://localhost:5000/cart').then(res =>
//   res.json()

// )
// )
// console.log(data)


// if(!posts.length && !isLoading){
//   return 'no Post'
// }
if (isLoading) {
   return (
     <div  className="loadingPaper">
       <CircularProgress size="2em" />
     </div>
   );
 }
    return (
        <div className="productu">
    
<div className="productus">
     
        <div className="home_row">
      { posts.map((post)=>(
      post.category!=="phone"?"":(
        <Product
        post={post}  key={post._id}
     image={post.image}
     atualp={post.product_price}
     percentage={post.product_percentage}
     cancelp={post.product_cancelprice}
    
     itemdesc={post.product_desc}
  country={post.product_counrty}
     /> )))}
</div>
<div className="home_row">
      { posts.map((post)=>(
      post.category!=="watches"?"":(
        <Product
        post={post}  key={post._id}
     image={post.image}
     atualp={post.product_price}
     percentage={post.product_percentage}
     cancelp={post.product_cancelprice}
    
     itemdesc={post.product_desc}
  country={post.product_counrty}
     /> )))}
</div>
<div className="home_row">
      { posts.map((post)=>(
      post.category!=="shoes"?"":(
        <Product
        post={post}  key={post._id}
     image={post.image}
     atualp={post.product_price}
     percentage={post.product_percentage}
     cancelp={post.product_cancelprice}
    
     itemdesc={post.product_desc}
  country={post.product_counrty}
     /> )))}
</div>
<div className="home_row">
      { posts.map((post)=>(
      post.category!=="fashion"?"":(
        <Product
        post={post}  key={post._id}
     image={post.image}
     atualp={post.product_price}
     percentage={post.product_percentage}
     cancelp={post.product_cancelprice}
    
     itemdesc={post.product_desc}
  country={post.product_counrty}
     /> )))}
</div>
<div className="home_row">
      { posts.map((post)=>(
      post.category!=="education"?"":(
        <Product
        post={post}  key={post._id}
     image={post.image}
     atualp={post.product_price}
     percentage={post.product_percentage}
     cancelp={post.product_cancelprice}
    
     itemdesc={post.product_desc}
  country={post.product_counrty}
     /> )))}
</div>
<div className="home_row">
      { posts.map((post)=>(
      post.category!=="solar"?"":(
        <Product
        post={post}  key={post._id}
     image={post.image}
     atualp={post.product_price}
     percentage={post.product_percentage}
     cancelp={post.product_cancelprice}
    
     itemdesc={post.product_desc}
  country={post.product_counrty}
     /> )))}
</div>
</div>

</div>
    )
}

export default ProductHome
