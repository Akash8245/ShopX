import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price,productDesc, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className=" m-auto my-4 rounded-[15px]  font-[Poppins] w-[45%] md:w-[25%] md:mx-5 ">
      <img src={productImage} className=" " />
      <div className="description">
        <p> 
          <b className="py-2">{productName}</b>
        </p>
        <p className="text-[10px]" >{productDesc}</p>
        <p  >₹ {price}</p>
      </div>
      <button className="text-[10px] border-2 border-black  p-2 my-3 hover:bg-black hover:text-white duration-150" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
