import React,{useState} from 'react'
import './caroselandmenu.css'

import {
ArrowForwardIos


} from '@material-ui/icons'
function CaroselAndMenu() {
const [showdrop, setshowState ]=useState('false')
const [showdrop1, setshowState1 ]=useState('false')
const [showdrop2, setshowState2 ]=useState('false')
const [showdrop3, setshowState3 ]=useState('false')
const [showdrop4, setshowState4 ]=useState('false')
const [showdrop5, setshowState5 ]=useState('false')
const [showdrop6, setshowState6 ]=useState('false')
const [showdrop7, setshowState7 ]=useState('false')
const [showdrop8, setshowState8 ]=useState('false')
const [showdrop9, setshowState9 ]=useState('false')
const [showdrop10, setshowState10 ]=useState('false')
const [showdrop11, setshowState11 ]=useState('false')
const ArowState=()=>{
if(showdrop){
setshowState(false)

}
else{
setshowState(true)

}

}
const Arowfalse=()=>{
if(showdrop){
setshowState(false)


}
else{

setshowState(true)

}

}
const ArowState1=()=>{
if(showdrop1){
setshowState1(false)

}
else{
setshowState1(true)

}

}
const Arowfalse1=()=>{
if(showdrop1){
setshowState1(false)


}
else{

setshowState1(true)

}

}

const ArowState2=()=>{
if(showdrop2){
setshowState2(false)

}
else{
setshowState2(true)

}

}
const Arowfalse2=()=>{
if(showdrop2){
setshowState2(false)


}
else{

setshowState2(true)

}

}    
const ArowState3=()=>{
if(showdrop3){
setshowState3(false)

}
else{
setshowState3(true)

}

}
const Arowfalse3=()=>{
if(showdrop3){
setshowState3(false)


}
else{

setshowState3(true)

}

} 
const ArowState4=()=>{
if(showdrop4){
setshowState4(false)

}
else{
setshowState4(true)

}

}
const Arowfalse4=()=>{
if(showdrop4){
setshowState4(false)


}
else{

setshowState4(true)

}

} 

const ArowState5=()=>{
if(showdrop5){
setshowState5(false)

}
else{
setshowState5(true)

}

}
const Arowfalse5=()=>{
if(showdrop5){
setshowState5(false)


}
else{

setshowState5(true)

}

} 
const ArowState6=()=>{
if(showdrop6){
setshowState6(false)

}
else{
setshowState6(true)

}

}
const Arowfalse6=()=>{
if(showdrop6){
setshowState6(false)


}
else{

setshowState6(true)

}

} 
const ArowState7=()=>{
if(showdrop7){
setshowState7(false)

}
else{
setshowState7(true)

}

}
const Arowfalse7=()=>{
if(showdrop7){
setshowState7(false)


}
else{

setshowState7(true)

}

}
const ArowState8=()=>{
    if(showdrop8){
    setshowState8(false)
    
    }
    else{
    setshowState8(true)
    
    }
    
    }
    const Arowfalse8=()=>{
    if(showdrop8){
    setshowState8(false)
    
    
    }
    else{
    
    setshowState8(true)
    
    }
    
    } 
    const ArowState9=()=>{
        if(showdrop9){
        setshowState9(false)
        
        }
        else{
        setshowState9(true)
        
        }
        
        }
        const Arowfalse9=()=>{
        if(showdrop9){
        setshowState9(false)
        
        
        }
        else{
        
        setshowState9(true)
        
        }
        
        } 
        const ArowState10=()=>{
            if(showdrop10){
            setshowState10(false)
            
            }
            else{
            setshowState10(true)
            
            }
            
            }
            const Arowfalse10=()=>{
            if(showdrop10){
            setshowState10(false)
            
            
            }
            else{
            
            setshowState10(true)
            
            }
            
            }  
            const ArowState11=()=>{
                if(showdrop11){
                setshowState11(false)
                
                }
                else{
                setshowState11(true)
                
                }
                
                }
                const Arowfalse11=()=>{
                if(showdrop11){
                setshowState11(false)
                
                
                }
                else{
                
                setshowState11(true)
                
                }
                
                }                 
return (
<div className="carosel_menu">
<div className="carosel_menuMenu">

{/* FOR YOU */}
<div className="carosel_menuMenuchild" onMouseEnter={ArowState} onMouseLeave={Arowfalse}>
<p>For You</p>
<ArrowForwardIos/>
{showdrop?'':(<div className="foryou__drop">
<div className="child">
<div className="child_header">
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>






</div>
</div> 
</div>)}
</div> 
{/* BEAUTY */}



<div className="carosel_menuMenuchild" onMouseEnter={ArowState1} onMouseLeave={Arowfalse1}>
<p>Beauty</p>
<ArrowForwardIos/>
{showdrop1?'':(<div className="foryou__drop1">
<div className="child">
<div className="child_header">
<h3>CARE</h3>

</div>
<div className="child_desc">
<p>Facial </p>
<p>  CareBody</p>
<p> CareOral</p>
<p> CareEye</p><br/>
<p> CareHair</p>
<p> Dressing</p>
<p>Manicure</p>
<p> Perfume</p>
<p> Dressing</p>
<p>Personal Hygiene</p>




</div>
</div>  
<div className="child">
<div className="child_header">
<h3>MAKE-UP</h3>

</div>
<div className="child_desc">
<p>Foundation</p>
<p>LipstickEye</p>
<p> MakeupTools</p>

</div>
</div>  

</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState2} onMouseLeave={Arowfalse2}>
<p>Digital & Electrical</p>
<ArrowForwardIos/>
{showdrop2?'':(<div className="foryou__drop2">
<div className="child">
<div className="child_header">



<h3>PHONES & COMPUTERS</h3>

</div>
<div className="child_desc">
<p>Phones </p>
<p>Phone Parts</p>
<p>Computer</p>
<p>Computer Parts</p><br/>
<p>Peripheral</p>
<p>WebcamMonitor</p>
<p>Camera</p>
<p>Camera Parts</p>
<p>Watches</p>


</div>
</div>  
<div className="child">
<div className="child_header">
    
<h3>KITCHEN + BATHROOM & APPLIANCES</h3>

</div>
<div className="child_desc">
<p>Big Appliance</p>
<p>Small Appliance</p>
<p>Daily Appliances</p>
<p> Personal Care</p>
<p>TV  </p><br/>
<p>Air Conditioner</p>
<p>Washing Machine</p>
<p>Refrigerator</p>



</div>
</div>  

<div className="child">
<div className="child_header">

<h3>AUDIO & VIDEO</h3>

</div>
<div className="child_desc">
<p>Earphones</p>
<p>Audio Microphone Games</p>
<p>Parts Network</p><br/>
<p> Speakers</p>


</div>
</div> 

</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState3} onMouseLeave={Arowfalse3}>
<p>Home</p>
<ArrowForwardIos/>
{showdrop3?'':(<div className="foryou__drop3">
<div className="child">
<div className="child_header">
{/* Daily Use
StorageSewingRainproofGifts & Crafts
Clean
LaundryHouse Cleaning
Kitchen
TablewareCupsDisposable SuppliesKitchen Tools
Decor
CarpetCurtainAccessories
Beds & Baths
BedsTowels
Furniture
DesksTea TablesChairsSofaWardrobesScreensBalcony/OutdoorOther Furniture
Pet Life
Pet FoodPet DailyPet TravelPet ToyAquariumWashing and BeautyMedical Insurance */}
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>






</div>
</div> 
</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState4} onMouseLeave={Arowfalse4}>
<p>Lighting</p>
<ArrowForwardIos/>
{showdrop4?'':(<div className="foryou__drop4">
<div className="child">
<div className="child_header">
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>






</div>
</div> 
</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState5} onMouseLeave={Arowfalse5}>
<p>Building</p>
<ArrowForwardIos/>
{showdrop5?'':(<div className="foryou__drop5">
<div className="child">
<div className="child_header">
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>






</div>
</div> 
</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState6} onMouseLeave={Arowfalse6}>
<p>Fitness</p>
<ArrowForwardIos/>
{showdrop6?'':(<div className="foryou__drop6">
<div className="child">
<div className="child_header">
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>






</div>
</div> 
</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState7} onMouseLeave={Arowfalse7}>
<p>Baby</p>
<ArrowForwardIos/>
{showdrop7?'':(<div className="foryou__drop7">
<div className="child">
<div className="child_header">
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>






</div>
</div> 
</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState8} onMouseLeave={Arowfalse8}>
<p>Office</p>
<ArrowForwardIos/>
{showdrop8?'':(<div className="foryou__drop8">
<div className="child">
<div className="child_header">
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>






</div>
</div> 
</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState9} onMouseLeave={Arowfalse9}>
<p>Auto</p>
<ArrowForwardIos/>
{showdrop9?'':(<div className="foryou__drop9">
<div className="child">
<div className="child_header">
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>






</div>
</div> 
</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState10} onMouseLeave={Arowfalse10}>
<p>Medical</p>
<ArrowForwardIos/>
{showdrop10?'':(<div className="foryou__drop10">
<div className="child">
<div className="child_header">
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>






</div>
</div> 
</div>)}
</div>
<div className="carosel_menuMenuchild"onMouseEnter={ArowState11} onMouseLeave={Arowfalse11}>
<p>Food</p>
<ArrowForwardIos/>
{showdrop11?'':(<div className="foryou__drop11">
<div className="child">
<div className="child_header">
<h3>DIGITAL</h3>

</div>
<div className="child_desc">
<p>Phone </p>
<p> Tech</p>
<p>Monitor</p>
<p>Smart</p><br/>
<p>Computer</p>
<p>Kitchen</p>
<p>Electrics</p>



</div>
</div>  
<div className="child">
<div className="child_header">
<h3>FASHION</h3>

</div>
<div className="child_desc">
<p>Men</p>
<p>Women</p>
<p>Lady Underwear</p>
<p> Bag Men</p>
<p> Bag</p><br/>
<p>Shoes</p>
<p>Jewelry</p>
<p>Watch</p>
<p>Accessories</p>
<p>Electrics</p>



</div>
</div>  

<div className="child">
<div className="child_header">
<h3>BEAUTY</h3>

</div>
<div className="child_desc">
<p>Make-upTools</p>
<p>Perfume</p>
<p>Lady Underwear</p><br/>
<p> Wigs</p>
<p> Nail</p>
<p>Art</p>
<p> Personal</p>




</div>
</div> 
<div className="child">
<div className="child_header">
<h3>BETTER LIFE</h3>

</div>
<div className="child_desc">
<p>Daily Cook Decor</p>
<p>Textile</p>
<p>Pet</p><br/>
<p> Garden</p>
<p> School</p>
<p>Office</p>
</div>
</div> 
</div>)}
</div>
</div> 



</div>
)
}

export default CaroselAndMenu
