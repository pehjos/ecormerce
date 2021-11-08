import React from 'react'
import './Category.css'

function Category({title, Icon, noBorder}) {
    return (
        <div className={`category ${noBorder && 'category__bottom'}`}>
            <Icon className='category__icon' />
            <p className='category__title'>{title}</p>
        </div>
    )
}

export default Category
