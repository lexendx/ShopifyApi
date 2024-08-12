import React, { useState } from "react";

function Navbar() {
  const [cartItems, setCartItem] = useState(() => {
    const saved = localStorage.getItem("Cart");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const totalItem = cartItems.length;

  return (
    <nav>
      <p>Total Items in Cart: {totalItem}</p>
    </nav>
  );
}

export default Navbar;
