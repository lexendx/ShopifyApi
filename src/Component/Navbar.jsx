import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div className="bg-gradient-to-r rounded-b-lg from-blue-500 to-purple-500 text-white top-0 shadow-lg z-50">
      <div className="flex justify-between items-center p-4">
        {/* Left side placeholder */}
       /* <div className="flex items-center space-x-4">
          <div>
            <img src={logo} alt="Company Logo" className="w-[100px] h-[50px]" />
          </div>
        </div>
        {/* Right side links */}
       <div className="flex space-x-10 mr-7">
          <Link
            to="/"
            className="text-lg font-semibold hover:scale-125 hover:text-yellow-300 transition duration-200 ease-in-out"
          >
            Shop
          </Link>
          <Link
            to="/admin"
            className="text-lg font-semibold hover:scale-125 hover:text-yellow-300 transition duration-200 ease-in-out"
          >
            Admin
          </Link>
          <Link
            to="/cart"
            className="text-lg flex items-center justify-center gap-2 font-semibold hover:scale-125 hover:text-yellow-300 transition duration-200 ease-in-out relative"
            aria-label={`Cart with ${cartCount} items`}
          >
            Cart
            <FaCartShopping />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar
