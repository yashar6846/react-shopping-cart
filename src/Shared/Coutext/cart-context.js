import React, { createContext, useState } from 'react'

export const CreateContext = createContext()

export const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([])

    return (
        <CreateContext.Provider
            value={[cartItems, setCartItems]} >
                {props.children}
        </CreateContext.Provider>
    )
}