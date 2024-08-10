import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from './Page/Shop';
import Admin from './Page/Admin';
import Cart from './Page/Cart';
import Navbar from './Component/Navbar';
import AddToCart from './Component/AddToCart';
import Loader from './Component/Loader';
import Category from './Component/Category';
import Product from './Component/Product';
import DataTable from "react-data-table-component";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from local storage if available
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    // Save cart items to local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={<Shop cartItems={cartItems} handleAddToCart={handleAddToCart} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
       <Route path='/addtocart' element={<AddToCart />} />
        <Route path='/loader' element={<Loader />} />
        <Route path='/category' element={<Category />} />
        <Route path='/product' element={<Product />} />
        <Route path='/datatable' element={<DataTable />} />
      </Routes>
    </div>
  );
}

export default App
