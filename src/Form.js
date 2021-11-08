import { Button ,Input,styled, IconButton} from '@material-ui/core';
import React, { useState, useEffect,useRef } from 'react';
import './form.css'
import {createVideo} from './APIfuana'
import {PhotoCamera} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { ArrowBackIos, KeyboardArrowDown, Search } from '@material-ui/icons'
import {

    Close,Check,  ExpandLess, ExpandMore, InsertPhoto,Videocam
    
    } from '@material-ui/icons'
import {createPost} from '././actions/posts'
import {updatePost} from '././actions/posts'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { useStateValue } from './Stateprovider'
function Form({setCurrentId,currentId}) {

const userDetails=JSON.parse(localStorage.getItem("user"))
const [currentRoom, setCurrentRoom] = useState(1)
  
const changeRoom = (newRoom) => {
  setCurrentRoom(newRoom)
}
const [currentRoom1, setCurrentRoom1] = useState(1)
  
const changeRoom1 = (newRoom1) => {
  setCurrentRoom1(newRoom1)
}
const [currentRoom2, setCurrentRoom2] = useState(1)
  
const changeRoom2 = (newRoom2) => {
  setCurrentRoom2(newRoom2)
}
const [currentRoom4, setCurrentRoom4] = useState(1)
  
const changeRoom4 = (newRoom4) => {
  setCurrentRoom4(newRoom4)
}
console.log(currentRoom1)
const Input = styled('input')({
display: 'none',
});
const [tags ,setTags]=useState(false)
const [videoImg ,setVideoImg]=useState(true)
const [isVideoplaying, setisVideoplaying]=useState(false)
const [state ,setState]=useState(true)
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


const choseImg=()=>{
document.getElementById('btnImg').click()
setVideoImg(true)
setState(false)


}
const choseImg1=()=>{
  document.getElementById('btnImg1').click()
  setVideoImg(true)
  setState(false)
  
  
  }
  const choseImg2=()=>{
    document.getElementById('btnImg2').click()
    setVideoImg(true)
    setState(false)
    
    
    }
    const choseImg3=()=>{
      document.getElementById('btnImg3').click()
      setVideoImg(true)
      setState(false)
      
      
      }
      const choseImg4=()=>{
        document.getElementById('btnImg4').click()
        setVideoImg(true)
        setState(false)
        
        
        }
const chosevideo=()=>{
document.getElementById('btnvideo').click()
setVideoImg(false)
setState(false)

}




const closeItems=()=>{
setState(true)
// document.getElementById('video').style.pointerEvents="initial"
// document.getElementById('photo').style.pointerEvents="initial"
// setBaseImage("")


}
const handleEmtyInput=({target})=>{

const files=target.files
target.value=''
}

const Tagss=()=>{
if (tags){
setTags(false)


}
else{
setTags(true)
}
}
// submit




const [postData, setPostData] = useState({   
product_name:"",

product_desc:"",
product_brand:"",
product_title:"",
product_price:"",
product_percentage:"",
product_cancelprice:"",
product_status:"",
product_fees:"",
product_warranty:"",
product_stock:"",
product_size_variation:"",

product_cart:"",
product_dimention:"",
product_weight:"",
product_seller:"",
product_seller_name:"",
product_seller_id:"",
product_seller_email:"",
product_seller_phone:"",
product_seller_comments:"",
product_seller_adress:"",

image:"",
image1:"",
image2:"",
image3:"",
image4:"",
video:"",});
const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : currentId));
const dispatch = useDispatch();

const user = JSON.parse(localStorage.getItem('profile'));

useEffect(() => {
if (post) setPostData(post);
}, [post]);

const clear = () => {
setCurrentId(0);
setPostData({   
product_name:"",
product_desc:"",
product_brand:"",
product_title:"",
product_price:"",
product_counrty:"",
product_percentage:"",
product_cancelprice:"",
product_status:"",
product_fees:"",
product_warranty:"",
product_stock:"",
product_size_variation:"",
product_cart:"",
product_dimention:"",
product_color:"",
product_weight:"",
product_seller:"",
product_seller_name:"",
product_seller_id:"",
product_seller_email:"",
product_seller_phone:"",
product_seller_comments:"",
product_seller_adress:"",
tags:"",
category:"",
image:"",
image1:"",
image2:"",
image3:"",
image4:"",
video:"", });
};

useEffect(() => {
if (!post?.title) clear();
if (post) setPostData(post);
}, [post]);

const handleSubmit = async (e) => {
e.preventDefault();

if (currentId === 0) {
dispatch(createPost({ ...postData, product_seller: user?.result?.name,product_seller_id: user?.result?.id ,
product_seller_adress: user?.result?.shop_adress,product_seller_email: user?.result?.email,
product_seller_phone: user?.result?.phone,
tags:currentRoom,
category:currentRoom4,
product_counrty:currentRoom2,
product_color:currentRoom1,
}, ));
clear();
} else {
dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
clear();
}
};

if (!user) {
return (
<div>
<p>
Please Sign In to create your own memories and like other's memories.
</p>
</div>
);
}




const uploadPrev=()=>{

const oFreader=new  FileReader()
oFreader.readAsDataURL(document.getElementById('btnImg').files[0]);
oFreader.onload=function(oFREvent){
document.getElementById("prev").src=oFREvent.target.result;
console.log(oFREvent.target.result)
//  document.getElementById('photo').style.pointerEvents="none"
//  document.getElementById('photo').style.opacity="0.9"
setPostData({...postData, image:oFREvent.target.result})

}
}

const uploadPrev1=()=>{

  const oFreader=new  FileReader()
  oFreader.readAsDataURL(document.getElementById('btnImg1').files[0]);
  oFreader.onload=function(oFREvent){
  document.getElementById("prev1").src=oFREvent.target.result;
  console.log(oFREvent.target.result)
  //  document.getElementById('photo').style.pointerEvents="none"
  //  document.getElementById('photo').style.opacity="0.9"
  setPostData({...postData, image1:oFREvent.target.result})
  
  }
  }
  const uploadPrev2=()=>{

    const oFreader=new  FileReader()
    oFreader.readAsDataURL(document.getElementById('btnImg2').files[0]);
    oFreader.onload=function(oFREvent){
    document.getElementById("prev2").src=oFREvent.target.result;
    console.log(oFREvent.target.result)
    //  document.getElementById('photo').style.pointerEvents="none"
    //  document.getElementById('photo').style.opacity="0.9"
    setPostData({...postData, image2:oFREvent.target.result})
    
    }
    }
    const uploadPrev3=()=>{

      const oFreader=new  FileReader()
      oFreader.readAsDataURL(document.getElementById('btnImg3').files[0]);
      oFreader.onload=function(oFREvent){
      document.getElementById("prev3").src=oFREvent.target.result;
      console.log(oFREvent.target.result)
      //  document.getElementById('photo').style.pointerEvents="none"
      //  document.getElementById('photo').style.opacity="0.9"
      setPostData({...postData, image3:oFREvent.target.result})
      
      }
      }
      const uploadPrev4=()=>{

        const oFreader=new  FileReader()
        oFreader.readAsDataURL(document.getElementById('btnImg4').files[0]);
        oFreader.onload=function(oFREvent){
        document.getElementById("prev4").src=oFREvent.target.result;
        console.log(oFREvent.target.result)
        //  document.getElementById('photo').style.pointerEvents="none"
        //  document.getElementById('photo').style.opacity="0.9"
        setPostData({...postData, image4:oFREvent.target.result})
        
        }
        }
const uploadprevvideo=()=>{
const ofFreader=new  FileReader()
ofFreader.readAsDataURL(document.getElementById('btnvideo').files[0]);
ofFreader.onload=function(ofFREvent){
document.getElementById("prevvideo").src=ofFREvent.target.result;
console.log(ofFREvent.target.result)
//  document.getElementById('video').style.pointerEvents="none"
//  document.getElementById('video').style.opacity="0.9"
console.log(ofFREvent.target.result,"video")
setPostData({...postData, video:ofFREvent.target.result})


}
}

// getvideos to faunadb 


// onclick function
// function HandleDeatailsChange(event) {
//   console.log(event.target.value)
//   setVideo(event.target.value)
  
//   }
//   function resetInput(event) {
//    setPostData("")
    
//     }
    
//   function SubmitData(event) {
//    event.preventDefault() 
//    createVideo(postData).then(res=>{
//      console.log(postData,"created")
//    })
//    resetInput();
//   }
 
  


return (
<div className="form">
<div className="categoryPage__top">
            <Link to="/">
                <ArrowBackIos className="categoryPage__topBackIcon" />
             </Link>
            </div>
<form>
<h4>PRODUCT SELLING PLACE</h4>  
<div className="form_main"  >  


<div className="form_1">
<input type="text" placeholder="PRODUCT NAME (eg galaxy note 8)"value={postData.  product_name}
onChange={(e)=>setPostData({...postData,   product_name:e.target.value})}
/>
<input type="text" placeholder="PRODUCT BRAND (eg sumsung) "value={postData.product_brand}
onChange={(e)=>setPostData({...postData,  product_brand:e.target.value})}
/>
<input type="text" placeholder="PRODUCT TITLE (eg dual core note 8 latest )"value={postData.product_title}
onChange={(e)=>setPostData({...postData,   product_title:e.target.value})}
/>
<input type="text" placeholder="PRODUCT WEIGHT (eg 2kg)"value={postData. product_weight}
onChange={(e)=>setPostData({...postData,   product_weight:e.target.value})}/>
<input type="text" placeholder="PRODUCT IN STOCK (eg. 78)"value={postData.   product_stock}
onChange={(e)=>setPostData({...postData,     product_stock:e.target.value})}/>













<select  onChange={(event) => changeRoom2(event.target.value)}
        value={currentRoom2}>
    <option value={""}>Product Availability</option>
    <option value="Ghana">Ghana</option>
    <option value="China">China</option>
  </select>

<select  onChange={(event) => changeRoom1(event.target.value)}
        value={currentRoom1}>
    <option value={""}>Does  the product difer in color?</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
<input type="text" placeholder="DIMENTIONS (eg 4mm x 4mm)"value={postData.   product_dimention}
onChange={(e)=>setPostData({...postData,     product_dimention:e.target.value})}/>
<input type="text" placeholder="PRODUCT PRICE ($40 or ¢90)"value={postData.  product_price}
onChange={(e)=>setPostData({...postData,     product_price:e.target.value})}/>
<input type="text" placeholder="PRODUCT DISCOUNT PECENTAGE (eg.10%)"value={postData. product_percentage}
onChange={(e)=>setPostData({...postData,   product_percentage:e.target.value})}/>
<input type="text" placeholder="PRODUCT MAKET PRICE ($43 or ¢95)"value={postData.   product_cancelprice}
onChange={(e)=>setPostData({...postData,     product_cancelprice:e.target.value})}/>

<input type="text" placeholder="PRODUCT delivery fees(eg $4)"value={postData. product_fees}
onChange={(e)=>setPostData({...postData,   product_fees:e.target.value})}/>
<input type="text" placeholder="RETURN DATE (eg 30 day)"value={postData.   product_warranty}
onChange={(e)=>setPostData({...postData,     product_warranty:e.target.value})}/>
<input type="text" placeholder="Product size (eg S,L,XL)"value={postData.product_size_variation}
onChange={(e)=>setPostData({...postData,     product_size_variation:e.target.value})}/>


</div>

<div className="form_1">


{/* {tags?(<ExpandLess onClick={Tagss}/>):(<ExpandMore onClick={Tagss}/>)}
{tags?( */}

<select  onChange={(event) => changeRoom(event.target.value)}
        value={currentRoom}>
    <option value={""}>  Chose post category</option>
    <option value="banner">Sliding Image</option>
    <option value="Selective">Selective</option>
    <option value="commingsoon">Comming soon</option>
    <option value="hot">Hot sale</option>
    <option value="solarimg"> Solar Image</option>
 
  </select>
  <select  onChange={(event) => changeRoom4(event.target.value)}
        value={currentRoom4}>
    <option value={""}> Product Category</option>
    <option value="phone">Phone</option>
    <option value="watches">Watches</option>
    <option value="electronics">Electronics</option>
    <option value="solar">  Solar</option>
    <option value="fashion">Fashion</option>
    <option value="wear">Wear</option>
    <option value="bag">Bags</option>
    <option value="shoes">shoes</option>
    <option value="computer">  Computer</option>
    <option value="home">Home Computer Aplience</option>
    <option value="education">Education</option>
    <option value="game">Game</option>
  </select>
{/* ):""
} */}






{videoImg?(<div className="prevImg">
  
  <img accept="image/*" id="prev"/>
  <img accept="image/*" id="prev1"/>
  <img accept="image/*" id="prev2"/>
  <img accept="image/*" id="prev3"/>
  <img accept="image/*" id="prev4"/>
  </div>):(
<video  onClick={Playvideo} ref={Videoref}  id="prevvideo" accept="video/*"/> )}

<label htmlFor="icon-button-file">
    <div className="input">
<input accept="image/*"  type="file" id="btnImg"  
onClick={handleEmtyInput}
onChange={ uploadPrev}/>
<input accept="image/*"  type="file" id="btnImg1"  
onClick={handleEmtyInput}
onChange={ uploadPrev1}/>
<input accept="image/*"  type="file" id="btnImg2"  
onClick={handleEmtyInput}
onChange={ uploadPrev2}/>
<input accept="image/*"  type="file" id="btnImg3"  
onClick={handleEmtyInput}
onChange={ uploadPrev3}/>
<input accept="image/*"  type="file" id="btnImg4"  
onClick={handleEmtyInput}
onChange={ uploadPrev4}/>
</div>
<div>
<IconButton color="primary" aria-label="upload picture" component="span">
<PhotoCamera  id="photo"  onClick={choseImg}/>
</IconButton>
<IconButton color="primary" aria-label="upload picture" component="span">
<PhotoCamera  id="photo1"  onClick={choseImg1}/>
</IconButton>
<IconButton color="primary" aria-label="upload picture" component="span">
<PhotoCamera  id="photo2"  onClick={choseImg2}/>
</IconButton>
<IconButton color="primary" aria-label="upload picture" component="span">
<PhotoCamera  id="photo3"  onClick={choseImg3}/>
</IconButton>
<IconButton color="primary" aria-label="upload picture" component="span">
<PhotoCamera  id="photo4"  onClick={choseImg4}/>
</IconButton>
</div>
</label>
<textarea value={postData.product_desc}
onChange={(e)=>setPostData({...postData,     product_desc:e.target.value})} type="text" placeholder="PRODUCT DETAILS (eg.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. )"/>
</div>

</div>
<Button onClick={handleSubmit} color="primary" variant="outlined" size="large">
Large
</Button>
</form>

</div>
)
}

export default Form
