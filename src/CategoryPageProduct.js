import React from 'react'
import './CategoryPageProduct.css'
import Phone from './images/Phone.jpg'
import Pro1 from './images/Pro1.jpg'

function CategoryPageProduct({image, title, actualPrice, discountPrice, country, noOfSales}) {
    return (
        <div className='categoryPageProduct'>
            <img className='product__image' src={image} alt='' />

            <div className="product__text">
                    <p className="product__textTitle"> {title} </p>
                    <div className="product__textBottom">
                        <div className="product__textBottomLeft">
                           
                                <span>{country}</span>
                               <p>
                                    <small>$</small> <strong>{discountPrice}</strong> <s>${actualPrice}</s>
                                </p>
                        </div>
                        <p className='product__textBottomSales'> Sales:{noOfSales}</p>
                    </div>
            </div>
        </div>
    )
}

export default CategoryPageProduct
