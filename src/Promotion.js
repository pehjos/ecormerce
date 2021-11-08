import React from 'react'
import './Promotion1.css'
import Product from './Product__promo'
import Prom03 from './images/Prom03.jpg'
import Pro1 from './images/Pro1.jpg'
import Pro2 from './images/Pro2.jpg'
import Pro3 from './images/Pro3.jpg'


function Promotion() {
    return (
        <div className='promotion1'>
            <div className="promotion__left">
                <img
                    className='promotion__ad'
                    src={Prom03}
                    alt=''
                />
                <p >View more</p>
            </div>

            <div className="promotion__right">
                 <Product
                    title='Shipping discounts'
                    description='On-time delivers service'
                     image={Pro1}
                />
                 <Product
                    title='LIVE'
                    description='Onetime delivers service'
                     image={Pro2}
                />
                 <Product
                    title='Dropshipping'
                    description='Onetime delivers service'
                     image={Pro3}
                />
            </div>
        </div>
    )
}

export default Promotion
