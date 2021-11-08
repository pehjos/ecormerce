import React from 'react'
import './browse.css'
import SecurityIcon from '@material-ui/icons/Security';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import TouchAppIcon from '@material-ui/icons/TouchApp';
function Browse() {
    return (
        <div className="browse">
            <p> Hookites is Reliable and trusted</p>
            <p>24/7 Support</p>
           <div className="browseitems">
           <div className="browseitemsch">
         <SecurityIcon/>
         <ContactSupportIcon/>
         <AllInboxIcon/>
         <TouchAppIcon/>
            </div>
            </div> 
            <div className="browseitemsimg">
                <p>Click the button below and browse more product from hookites product base.</p>
            <h5>CLICK Now  <DoubleArrowIcon/>  </h5>
          
            </div> 
        </div>
    )
}

export default Browse
