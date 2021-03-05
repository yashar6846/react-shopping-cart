import React, { useContext } from 'react'
import { CreateContext } from '../../../Shared/Coutext/cart-context'

export const Section = () => {
    const [cartItems, setCartItems] = useContext(CreateContext)

    const totalPrice = cartItems.reduce((prevValue, currValue) => {
        return prevValue + currValue.price

    }, 0)
    return (
        <div>
            <p>Items is cart: {cartItems.length} </p>
            <p>Total Price: {totalPrice} </p>
            
        </div>
    )
}
