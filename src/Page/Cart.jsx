import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item=> item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };
  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price*item.quantity), 0);
  const totalItems = cartItems.reduce((acc,item)=>acc+item.quantity,0);
  console.log(cartItems);

  return (
    <div className="flex  ">
      
      {cartItems.length === 0 ? (
        <p  className="text-[40px] font-semibold text-green-600 ">Your cart is empty.</p>
      ) : (
        
       <ul>
        {cartItems.map((item, index) => (
          
          // top level div left hand 
             <div className="flex flex-col">
               {/* left side top level div */}
               <div className=" ml-20 gap-x-[150px]">
                 {/* image and description */}
                 <div className=" flex border-b-4 border-b-slate-800 w-[611px]">
                   <img src={item.image} alt={item.title} className="w-[160px] h-[220px] object-cover mt-3 mb-3 mr-4" />
                   <div>
                     <p className="font-semibold ml-3 mt-4 ">{item.title}</p>
                     <p className="ml-3">
                       {item.description.length>20 ? item.description.substring(0,70) + "...":item.description}
                     </p>
                     <div className="flex">
                       <p className="text-green-600 ml-3 font-bold mt-14">${item.price}</p>
                       <AiFillDelete
                       className="mt-14 text-2xl ml-[350px] bg-orange-500 cursor-pointer hover:scale-105 rounded-full "
                       onClick={()=>removeItem(item.id)} />
   
                     </div>
                   </div>
   
                 </div>
   
               </div>
   
             </div> 
           ))}
       </ul>
      )}
      
      {/* right hand side div */}
      <div className="flex  ml-[250px] gap-x-[150px] flex-col ">
        <p className="text-xl font-semibold text-green-600">Your Cart</p>
        <h2 className="text-[14px] font-semibold text-green-600 ">Summary</h2>
        <p className="text-[20ox] font-bold ">Total Items:{totalItems}</p>
        <div className="mt-[150px]">
          <p className="font-semibold text-[20px] ">Total Amount $:{totalAmount}</p>
          <button className="bg-green-700 px-[60px] font-bold py-2 rounded-md text-white hover:scale-110 transition-all duration-200 mt-4  ">
            Checkout Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;
