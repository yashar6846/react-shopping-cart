import React, { useContext } from 'react'
import { CreateContext } from '../../../Shared/Coutext/cart-context';

export const Cart = (props) => {

    const [cartItems, setCartItems] = useContext( CreateContext)
    const addToCart = () => {
        const product = { title: props.title, price: props.price}
        setCartItems((currState) => {
            return [...currState, product]
        })
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
