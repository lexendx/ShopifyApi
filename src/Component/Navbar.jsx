import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaCartShopping} from "react-icons/fa6"

function Navbar() {
  // const [cartItems] = useState(() => {
  //   const saved = localStorage.getItem("Cart");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || [];
  // });
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // const totalItem = cartItems.length;
  const totalItems = cartItems.reduce((acc,item)=>acc+item.quantity,0);
  return (
    <nav className="bg-sky-600 w-full p-7 text-4xl space-x-8 ">
     <div className="flex gap-9">
     <Link to="/" className="ml-[100px]">Shop</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/cart" className="flex gap-2 ">Cart <span className="absolute text-black px-2  text-[20px] rounded-full bg-cyan-400  ml-[105px]  mt-[-22px]">{totalItems}</span>
      <FaCartShopping className="mt-1"/>
      </Link>
     </div>
      
    </nav>
  );
}

export default Navbar;
