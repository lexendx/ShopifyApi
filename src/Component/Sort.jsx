import React from "react";
import AddToCart from "./AddToCart";

function Product({ product,handleAddToCart, cartItems }) {
  return (
    
    <div className="grid grid-cols-4   ">
       
      
      <div className="w-[285px]  items-center justify-center hover:scale-115 transition duration-280 ease-in  gap-3.5  p-4 mt-11 ml-6   border border-blue-900  square-lg
      hover:shadow-[rgba(0,_0,_0,_0.5)_0px_20px_80px]">
        <div>
          <p className="text-brown-600 font-bold text-left truncate w-35 mt-1.5">{product.title}</p>
        </div>
        <div>
          <p className="w-40 text-Brown-80 font-normal text-[11px] text-left ">
            
            {product.description.length>20?(product.description.substring(0,70)) + "...":(product.description)}</p>
        </div>
        <div className="h-[100px] mt-2">
          <img src={product.image} alt={product.title} className="h-full mx-auto" 
            
           />
        </div>
        /* price and button div */
       /* <div className="flex justify-between gap-14 mt-5 ">
        <div>
          <p><span>₹</span>{product.price}</p>
        </div>
        <div>
         <AddToCart product={product} handleAddToCart={handleAddToCart} cartItems={cartItems}/>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Product