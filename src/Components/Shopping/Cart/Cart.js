import React from 'react'

export const Cart = (props) => {
    const addToCart = () => {
        console.log('Clicked!');
    }
    return (
        <div>
          <p>{props.title}</p>
          <p>{props.price}</p>
          <button
          onClick={addToCart}>
              Add to Cart</button>
        </div>
    )
}
