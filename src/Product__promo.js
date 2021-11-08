import React from 'react'
import './Product__promo.css'

function Product({title, description, image}) {
    return (
        <div className='product3'>
            <p className='product__title1'>{title}</p>
            <p className='product__desc1'>{description}</p>
            <img className='product__image1' src={image} />
        </div>
    )
}

export default Product
