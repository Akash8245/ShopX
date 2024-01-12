import React from "react";
import insta from "../assets/insta.svg";
import github from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="relative    w-full h-18 bg-black font-[Poppins] text-white text-center text-[13px]  p-6 mb-0 ">
      <p className="p-0.5">
        Developed by <span className="font-bold">Akash</span>
      </p>
      <p className="p-0.5">
        Built with <span className="font-bold">React JS</span> and{" "}
        <span className="font-bold">Tailwind CSS</span>
      </p>
      <div className="flex justify-center items-center ">
        <a href="https://github.com/Akash8245" target="_blank">
          <img src={github} alt="github" className="w-[40px] m-auto p-2" />
        </a>
        <a href="https://www.instagram.com/akash__024/" target="_blank">
          <img src={insta} alt="insta" className="w-[40px] m-auto p-2" />
        </a>
      </div>
    </div>
  );
}
