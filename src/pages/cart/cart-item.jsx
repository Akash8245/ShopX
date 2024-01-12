import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage,productDesc } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className=" w-[80%] md:w-[55%]   m-auto  items-center  rounded-[20px] flex border-2 border-[#CCCCCC] p-3 justify-around  md:py-5 my-4">
      <img src={productImage} className="w-[125px] md:w-[180px] rounded-[10px] " />
      <div className="md:text-[22px]"> 
        <p  >
          <b> {productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="flex  mx-[20%] md:mx-[32%] text-[20px] ">
          <button onClick={() => removeFromCart(id)}> - </button>

          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="ml-3  w-4"
          />
          <button onClick={() => addToCart(id)} className="pl-0.5" > + </button>
        </div>
      </div>
    </div>
  );
};
