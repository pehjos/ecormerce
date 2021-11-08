import React from 'react'
import EventNote from '@material-ui/icons/ExpandLess'
import {Hidden,IconButton} from '@material-ui/core'

import {Explore} from '@material-ui/icons'

import NavigateNext from '@material-ui/icons/Add'
import './bactop.css'
function Quickac() {
    const scrolltop= () => window.scrollTo({top:"0",behavior:"smooth"})
    return (
     
        <div className="quickac">

       
        <div className="quickac__top"onClick={scrolltop}>
           <EventNote />
        </div>
     
      
           
      
      
        

        </div>


    )
}

export default Quickac
