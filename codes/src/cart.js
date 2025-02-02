import React, { useState } from 'react';
import Laptop from './laptop';
import Smart from './smartphone';
import Head from './headphone';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (itemName) => {
    setCartItems((prevItems) => [...prevItems, itemName]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Items in cart:</p>
      <ul>
        {cartItems.length === 0 ? (
          <li>No items in cart</li>
        ) : (
          cartItems.map((item, index) => <li key={index}>- {item}</li>)
        )}
      </ul>

      <h2>Product List</h2>
      <Laptop addToCart={addToCart} />
      <Head addToCart={addToCart} />
      <Smart addToCart={addToCart} />
    </div>
  );
};

export default Cart;
