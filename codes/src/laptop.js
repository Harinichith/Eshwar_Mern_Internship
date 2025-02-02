import React from 'react';

export const Laptop = ({ addToCart }) => {
  const productName = "Laptop";

  const handleAddToCart = () => {
    addToCart(productName);
  };

  return (
    <div>
      <h3>{productName}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Laptop;
