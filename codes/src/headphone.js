import React from 'react';

export const Head = ({ addToCart }) => {
  const productName = "Headphone";

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

export default Head;
