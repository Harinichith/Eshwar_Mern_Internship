import React from 'react';

export const Smart = ({ addToCart }) => {
  const productName = "Smartphone";

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

export default Smart;
