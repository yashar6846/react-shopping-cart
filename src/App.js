import React from 'react';
// import { Cart } from './Components/Shopping/Cart/Cart';
import { Min } from './Components/Shopping/Min/Min';
import { Section } from './Components/Shopping/Section/Section';
import {CartProvider} from './Shared/Coutext/cart-context'


function App() {
  return (
    <CartProvider>
    <div className="">
      <h1>Shopping Cart</h1>
      {/* <Cart /> */}
      <Min />
      <Section />
    </div>
    </CartProvider>
  );
}

export default App;
