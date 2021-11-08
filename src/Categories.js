import React from 'react'
import './Categories.css'
import Category from './Category'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'


function Categories() {
    return (
        <div className='categories'>
            <div className="categories__left">
                <Category
                    Icon={OndemandVideoIcon}
                    title='Consumer Electronics'
                />
                 <Category
                    Icon={OndemandVideoIcon}
                    title='Home Appliances'
                />
                 <Category
                    Icon={OndemandVideoIcon}
                    title='Trending beauty items'
                />
                 <Category
                    Icon={OndemandVideoIcon}
                    title='Shoes & Accessories new arrivals'
                    noBorder
                />
            </div>

            <div className="categories__right">
             
                <Category
                    Icon={OndemandVideoIcon}
                    title='2021 Machinery'
                />
                <Category
                    Icon={OndemandVideoIcon}
                    title='Furniture'
                />
                <Category
                    Icon={OndemandVideoIcon}
                    title='Constru& Real Estate'
                />
                <Category
                    Icon={OndemandVideoIcon}
                    title='Trendy picks of Luggage & Bags'
                    noBorder
                />
            </div>
        </div>
    )
}

export default Categories
