import React from 'react'
import './popular.css'
import  {ShoppingBasketOutlined} from '@material-ui/icons'
function Popular() {
    return (
        <div className="popular">
            <p>Popular products</p>
               <div className="populars">
     <div className="populardiv1">
        
<h5>Start the best of online <br/>
Shopping and selling<br/>
 With Hookite <br/>
Essay to shop with.<br/>
</h5>   
<ShoppingBasketOutlined/>   
        </div>
        <div className="populardiv2">
          <img src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2020/04/50-great-watches-buy-2020-21-end-year-luxury-watches-mens-timepiece-iconic-pieces-top-50-best-prices-corum-golden-bridge-SPECIAL-men-4.jpg"/>
          <img src="https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/001161/1.jpg?0082"/>
          <img src="https://5.imimg.com/data5/PH/XE/MY-4414485/household-utensils-500x500.png"/>
        </div>
        <div className="populardiv3">
        <img src="https://marketexpress.com.gh/1644-thickbox_default/cindy-rice-25kg-bag.jpg"/>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71YoAHYSL7L._AC_SL1500_.jpg"/>
        <img src="https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg"/>
        </div>
        </div>
        </div>
    )
}

export default Popular





// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Marketplace
// Explore
 
// @pehjos 
// devat-youtuber
// /
// mern-ecommerce
// Public
// 6
// 11579
// Code
// Issues
// 3
// Pull requests
// 1
// Actions
// Projects
// Wiki
// Security
// Insights
// mern-ecommerce/client/src/components/mainpages/cart/Cart.js /
// @devat-youtuber
// devat-youtuber first commit
// Latest commit b454a1d on Oct 4, 2020
//  History
//  1 contributor
// 122 lines (97 sloc)  3.34 KB
   
// import React, {useContext, useState, useEffect} from 'react'
// import {GlobalState} from '../../../GlobalState'
// import axios from 'axios'
// import PaypalButton from './PaypalButton'

// function Cart() {
//     const state = useContext(GlobalState)
//     const [cart, setCart] = state.userAPI.cart
//     const [token] = state.token
//     const [total, setTotal] = useState(0)

//     useEffect(() =>{
//         const getTotal = () =>{
//             const total = cart.reduce((prev, item) => {
//                 return prev + (item.price * item.quantity)
//             },0)

//             setTotal(total)
//         }

//         getTotal()

//     },[cart])

//     const addToCart = async (cart) =>{
//         await axios.patch('/user/addcart', {cart}, {
//             headers: {Authorization: token}
//         })
//     }


//     const increment = (id) =>{
//         cart.forEach(item => {
//             if(item._id === id){
//                 item.quantity += 1
//             }
//         })

//         setCart([...cart])
//         addToCart(cart)
//     }

//     const decrement = (id) =>{
//         cart.forEach(item => {
//             if(item._id === id){
//                 item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
//             }
//         })

//         setCart([...cart])
//         addToCart(cart)
//     }

//     const removeProduct = id =>{
//         if(window.confirm("Do you want to delete this product?")){
//             cart.forEach((item, index) => {
//                 if(item._id === id){
//                     cart.splice(index, 1)
//                 }
//             })

//             setCart([...cart])
//             addToCart(cart)
//         }
//     }

//     const tranSuccess = async(payment) => {
//         const {paymentID, address} = payment;

//         await axios.post('/api/payment', {cart, paymentID, address}, {
//             headers: {Authorization: token}
//         })

//         setCart([])
//         addToCart([])
//         alert("You have successfully placed an order.")
//     }


//     if(cart.length === 0) 
//         return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 

//     return (
//         <div>
//             {
//                 cart.map(product => (
//                     <div className="detail cart" key={product._id}>
//                         <img src={product.images.url} alt="" />

//                         <div className="box-detail">
//                             <h2>{product.title}</h2>

//                             <h3>$ {product.price * product.quantity}</h3>
//                             <p>{product.description}</p>
//                             <p>{product.content}</p>

//                             <div className="amount">
//                                 <button onClick={() => decrement(product._id)}> - </button>
//                                 <span>{product.quantity}</span>
//                                 <button onClick={() => increment(product._id)}> + </button>
//                             </div>
                            
//                             <div className="delete" 
//                             onClick={() => removeProduct(product._id)}>
//                                 X
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }

//             <div className="total">
//                 <h3>Total: $ {total}</h3>
//                 <PaypalButton
//                 total={total}
//                 tranSuccess={tranSuccess} />
//             </div>
//         </div>
//     )
// }

// export default Cart
// © 2021 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// Loading complete
