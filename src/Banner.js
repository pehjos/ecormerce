import React, { useState } from 'react'
import './Banner.css'
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Box from '@material-ui/core/Box'
import Super from './images/11.jpg'
import Product1 from './images/2.jpg'
import Product2 from './images/1.jpg'
import Product3 from './images/10.jpg'
import Carosel from './Carosel'
import CaroselMenu from './CaroselAndMenu'
import TabPanel from '@material-ui/lab/TabPanel';
import TabList from '@material-ui/lab/TabList';
import TabContext from '@material-ui/lab/TabContext';
import Categories from './Categories';


  
function Banner() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   

    return (
      <div className='banner'>
        
            <div className="banner__left"
              style={{
                width: "39%",
                
              }}
            >
        <Paper square>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="MARKET" value="1" />
            <Tab label="SUPER SEPT" value="2" />

          </TabList>
        </Box>
        <TabPanel value="1"><CaroselMenu/></TabPanel>
        <TabPanel value="2"><Categories /></TabPanel>
      
      </TabContext>
          </Paper>
          
            </div>
            <Paper square>
            <div className="banner__image">
              <Carosel/>
              <div className="card__flex">
<div  className="middle_selective_card">
<div  className="middle_selective_cardimg">
<img src="https://cdn.shopify.com/s/files/1/0247/7191/9925/products/IP7PB_442044e8-ded9-452b-a192-540bb421874d_1024x1024.jpg?v=1619872793"/>
</div> 
<div  className="middle_selective_carddesc">
<p>Two Piece Women's Shoulder Bag Hand Bag Women's Big Bag Womens</p>
</div> 
<div  className="middle_selective_cardprice">
<p>¢123</p>
</div> 
</div> 
<div  className="middle_selective_card">
<div  className="middle_selective_cardimg">
<img src="https://cdn.shopify.com/s/files/1/0247/7191/9925/products/IP7PB_442044e8-ded9-452b-a192-540bb421874d_1024x1024.jpg?v=1619872793"/>
</div> 
<div  className="middle_selective_carddesc">
<p>Two Piece Women's Shoulder Bag Hand Bag Women's Big Bag Womens</p>
</div> 
<div  className="middle_selective_cardprice">
<p>¢123</p>
</div> 
</div>
<div  className="middle_selective_card">
<div  className="middle_selective_cardimg">
<img src="https://ftpfile.tospino.com//tospino/test/thumb/yichangbaobei/2020/12/389df556-6dd8-476e-bc98-8a8c0a7a677b.jpg"/>
</div> 
<div  className="middle_selective_carddesc">
<p>Two Piece Women's Shoulder Bag Hand Bag Women's Big Bag Womens</p>
</div> 
<div  className="middle_selective_cardprice">
<p>¢123</p>
</div> 
</div>
</div>
            </div>
             </Paper>
            <div className="banner__right">
                <p className="banner__rightTop">
                  Sports & Entertainment and Toys &
                </p>
          <div className="banner__rightPromo">
            
                  <div className="promotion__option">
                      <div className="promotion__optionText">
                        <p className="promotion__optionTitle">
                          Hot selections from leading suppliers
                        </p>
                        <span>Source now</span>
                      </div>
                     <img 
                       className='promotion__optionImage'
                       src={Product1} alt='' 
                     />
                  </div>
                 
                 <div className="promotion__option">
                      <div className="promotion__optionText">
                          <p className="promotion__optionTitle">
                        Trending products
                        </p>
                        <span>Source now</span>
                      </div>
                     <img className='promotion__optionImage' src={Product2} alt='' />
                  </div>
                  
                   <div className="promotion__option">
                      <div className="promotion__optionText">
                          <p className="promotion__optionTitle">
                         Ready to ship within 7days
                        </p>
                        <span>Source now</span>
                      </div>
                     <img className='promotion__optionImage' src={Product3} alt='' />
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
