import React from 'react';
import { Cart } from './Components/Shopping/Cart/Cart';
import { Min } from './Components/Shopping/Min/Min';
import { Section } from './Components/Shopping/Section/Section';


function App() {
  return (
    <div className="">
      <h1>Shopping Cart</h1>
      {/* <Cart /> */}
      <Min />
      <Section />
    </div>
  );
}

export default App;
