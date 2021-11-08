import React from 'react'
import './buttons.css'
import {SearchOutlined} from '@material-ui/icons'
function Buttons() {
return (
    <div className="mainsection">
<div className="buttons">
<div className="buttonsgr">
<div className="buttonsgr_ch">
<img  src="https://phoneaqua.com/products/xiaomi-redmi-note-9-pro-global.jpg"/>
<p>Phones</p>

</div>
<div className="buttonsgr_ch">
<img  src="http://ae01.alicdn.com/kf/HTB1hK31asfrK1Rjy1Xdq6yemFXap.jpg"/>
<p>Fashion</p>

</div>
<div className="buttonsgr_ch">
<img src="https://img.icons8.com/pastel-glyph/50/000000/hot-price--v2.png"/>
<p>Hot Sales</p>

</div>
<div className="buttonsgr_ch">
<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhqAlYjXmjz6TGJn-O054SugeA9L8OeSuLBTEzuRVIXaaMXd4Yoar5iUfkxrwAvL2MZg&usqp=CAU"/>
<p>Foods</p>

</div>

</div>
<div className="buttonsgr">
<div className="buttonsgr_ch">
<img  src="https://image.made-in-china.com/202f0j00qntTdBNaCpoI/4-Way-Multi-UK-Power-Socket-with-USB-Outlet-250V-Electric-Outlets-Power-USB-Extension-Socket.jpg"/>
<p>electrical</p>

</div>
<div className="buttonsgr_ch">
<img  src="https://ae01.alicdn.com/kf/H492a82b1fa5740338d80a07e56074b09T/Portable-Solar-Light-15W-110LM-Solar-Powered-Energy-Lamps-5V-LED-Bulb-for-Outdoors-Camping-Light.jpg_220x220.jpg_.webp"/>
<p>Solar</p>

</div>
<div className="buttonsgr_ch">
<img src="https://pictures-ghana.jijistatic.com/9083873_10-speed-blender-hamilton-beach-hb50167-1200x1200_1200x1200.jpg"/>
<p>kitchen</p>

</div>
<div className="buttonsgr_ch">
<img  src="https://m.media-amazon.com/images/I/61xQRROBrRL._AC_SY355_.jpg"/>
<p>digital</p>

</div>

</div>
<div className="main__nav_search">
<div className="main__nav_search_input">
<input type="text"placeholder=" Search Product"/>
<SearchOutlined/>
    
</div>
<div className="main__nav_popular_searches">
<p>Top Search :</p>
<p>Watches</p>
<p>Computers</p> 
<p>Shoes</p>
<p>Camera</p>
</div>
</div>
</div>
  
</div>

)
}

export default Buttons
