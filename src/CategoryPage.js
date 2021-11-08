import React from 'react'
import './CategoryPage.css'
import CategoryPageProduct from './CategoryPageProduct'
import { ArrowBackIos, KeyboardArrowDown, Search } from '@material-ui/icons'
import AppsOutlined from '@material-ui/icons/AppsOutlined'
import Phone from './images/Phone.jpg'
import Pro1 from './images/Pro1.jpg'

function CategoryPage() {
    return (
        <div className="categoryPage">
            <div className="categoryPage__top">
                <ArrowBackIos className="categoryPage__topBackIcon" />
                <div className="categoryPage__topSearch">
                    <Search className='categoryPage__topSearchIcon'/>
                    <input placeholder='Enter key words' type="text" />
                </div>
                <p>Search</p>
            </div>
            <div className="categoryPage__flex">
                <p>
                    Overall Rank
                    <span><KeyboardArrowDown className='categoryPage__flexIcon' /></span>
                </p>
                <p>
                    Popularity
                    <span><KeyboardArrowDown className='categoryPage__flexIcon' /></span>
                </p>
                <p>
                   Price
                    <span><KeyboardArrowDown className='categoryPage__flexIcon' /></span>
                </p>
                <p>
                   <AppsOutlined className='categoryPage__flexIcon'/>
                </p>
            </div>

           <div className="categoryPage__products">
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Pro1}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={11.3}
                    actualPrice={16.2}
                    noOfSales={190}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Pro1}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={11.3}
                    actualPrice={16.2}
                    noOfSales={190}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Pro1}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={11.3}
                    actualPrice={16.2}
                    noOfSales={190}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Pro1}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={11.3}
                    actualPrice={16.2}
                    noOfSales={190}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Pro1}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={11.3}
                    actualPrice={16.2}
                    noOfSales={190}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Pro1}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={11.3}
                    actualPrice={16.2}
                    noOfSales={190}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
                <CategoryPageProduct
                    image={Phone}
                    title=' Magic 1200🎇 high resolution Samsung A10K Ultra '
                    discountPrice={15.3}
                    actualPrice={18.6}
                    noOfSales={300}
                    country='China'
                />
           </div>
        </div>
    )
}

export default CategoryPage
