import React from 'react';

function AddToCart({ product, cartItems, handleAddToCart }) {
  return (
    <button
      onClick={() => handleAddToCart(product)}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full mt-4 hover:bg-orange-600 transition duration-300"
    >
      Add to Cart
    </button>
  );
}

export default AddToCart;
