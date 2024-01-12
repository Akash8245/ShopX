import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const location = useLocation();

  const isCurrentPage = (path) => location.pathname === path;
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const totalItems = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div className="h-[70px] bg-[#010409] font-[Poppins] flex items-center justify-between sticky top-0 z-50 ">
      <div className="text-white text-2xl font-bold p-4 cursor-pointer">
        <p className="flex items-center">
          <Link to="/">Shop</Link>
          <span className="text-[#FF4634]">X</span>
        </p>
      </div>

      <div>
        <ul className="flex space-x-4 text-[18px] md:text-[20px] text-white px-5 md:px-8">
          <li
            className={`hover:text-[#FF4634] duration-150 ${
              isCurrentPage("/") ? "text-[#FF4634] " : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`hover:text-[#FF4634] pl-3 duration-150 ${
              isCurrentPage("/cart") ? "text-[#FF4634] " : ""
            }`}
          >
            <Link to="/cart">
              Cart
              <sup className="text-white bg-[#FF4634] px-1.5 ml-[3px] rounded-[100%]  ">
                {totalItems}
              </sup>
            </Link>
          </li>
          <li
            className={`hover:text-[#FF4634] duration-150 ${
              isCurrentPage("/about") ? "text-[#FF4634] " : ""
            }`}
          >
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
