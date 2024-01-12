import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const totalItems = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <div className="font-[Poppins] min-h-[80vh] ">
      <div>
        {totalAmount > 0 && (
          <h1 className="text-2xl text-center font-bold m-3">
            Your Cart {totalItems} item{" "}
          </h1>
        )}
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product} />;
          }
          return " ";
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="text-[20px] text-center mb-5">
          <p className="font-bold mb-3"> Subtotal: ₹{totalAmount} </p>
          <button
            onClick={() => navigate("/")}
            className="m-3  border-2 border-black p-2 rounded-[15px] hover:bg-black hover:text-white  duration-150"
          >
            {" "}
            &lt;- Continue Shopping{" "}
          </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
            className="mx-4 border-2 border-black p-2 rounded-[15px] hover:bg-black hover:text-white duration-150"
          >
            {" "}
            Checkout -&gt;{" "}
          </button>
        </div>
      ) : (
        <h1 className="text-2xl text-center font-bold m-8">
          Your Cart is empty{" "}
        </h1>
      )}
    </div>
  );
};
