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
         <Navbar path="/" element={<Navbar/>}/>
      <Routes>
        <Route
          path="/"
          element={<Shop />}
        />
       <Route path="/"
       element={<Cart/>}/>

       <Route path="/"
       element={<Admin/>}/>
       <Route path="/"
       element={<Navbar/>}/>
      </Routes>
    </div>
  );
}

export default App
