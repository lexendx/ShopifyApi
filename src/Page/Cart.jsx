import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Cart({ cartItems, onRemoveFromCart }) {
  const isEmpty = cartItems.length === 0;

  return (
    <div className="flex p-4">
      {isEmpty ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex w-full">
          <div className="flex-grow">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-x-[150px] ml-20 mb-6">
                  <div className="flex border-b-4 border-b-slate-800 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[160px] h-[220px] object-cover mt-3 mb-3 mr-4"
                    />
                    <div className="flex-grow">
                      <p className="font-semibold ml-3 mt-4">{item.title}</p>
                      <p className="ml-3">
                        {item.description.length > 70
                          ? item.description.substring(0, 70) + "..."
                          : item.description}
                      </p>
                      <div className="flex justify-between items-end mt-14">
                        <p className="text-green-600 font-bold ml-3">
                          ₹{item.price}
                        </p>
                        <MdDeleteForever
                          className="text-2xl bg-orange-400 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
                          onClick={() => onRemoveFromCart(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-[250px] flex flex-col items-start">
            <p className="text-xl font-semibold text-green-600">Your Cart</p>
            <h2 className="text-[40px] font-semibold text-green-600">Summary</h2>
            <p className="text-[20px] font-bold">Total Items: {cartItems.length}</p>

            <div className="mt-[150px]">
              <p className="font-semibold text-[20px]">Total Amount: ₹100</p>
              <button className="bg-green-700 px-[60px] font-bold py-2 rounded-md text-white hover:scale-110 transition-all duration-200 mt-4">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
