import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from './Page/Shop';
import Admin from './Page/Admin';
import Cart from './Page/Cart';

import Navbar from './Component/Navbar';
import './App.css'

function App() {
  
  return (
    <div>

      {/* navbar ko common krna hai isliye routes ke bahar hai  */}
      <Navbar path="/" element={<Navbar/>}/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/admin" element={<Admin/>} /> 
      </Routes>
    </div>
  );
}

export default App
