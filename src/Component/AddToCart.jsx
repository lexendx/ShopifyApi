import React from 'react';

function AddToCart({ product, cartItems, handleAddToCart }) {
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <button onClick={() => handleAddToCart(product)}
      className="text-blue-400 border-spacing-2.5 border-orange-300 square-full text-[11px] p-1 hover:bg-gray-700
           hover:text-white transition-all duration-300 ease-in px-3">
      {isInCart ? <p>Remove Item</p> : <p>Add to Cart</p>}
    </button>
  );
}

export default AddToCart