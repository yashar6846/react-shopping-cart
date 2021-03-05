import React from 'react'
import { Cart } from '../Cart/Cart'

export const Min = () => {
    const products = [
        {id: 1, title: "Book 1", price: 79},
        {id: 2, title: "Book 2", price: 49},
        // {id: 3, title: "Book 3", price: 89},
        {id: 4, title: "Book 4", price: 99}

    ]
    return (
        <div className=''>
            {
                products.map((item) => {
                    return<Cart
                     key={item.id}
                    title={item.title}
                    price={item.price}
                     />
                })
            }
            {/* <h2>AA Batter</h2>
            <div>
            <h4>$.2.99</h4>
             <img src="" /> 
            <button> Add to Cart</button>
           </div>  */}
        </div>
    )
}
