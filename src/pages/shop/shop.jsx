import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";

export const Shop = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shop relative">
      <div className="bg-[black]">
        <img
          src={currentImage === 0 ? bg1 : currentImage === 1 ? bg2 : bg3} 
          alt={`bg${currentImage + 1}`}
          className="w-full md:w-[70%] pt-1 md:h-[70vh] m-auto opacity-100 transition-opacity duration-1000 ease-in-out"
        />
      </div>
      <h1 className="text-[20px] font-bold text-center p-3 " >Designs of the Week</h1>
      <div className="flex flex-wrap md:ml-[11%] font-[Poppins]">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
