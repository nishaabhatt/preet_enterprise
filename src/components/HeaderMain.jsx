"use client"
import React, {useState,useEffect, use} from "react";
import logo from '../../public/logo.jpg';
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    setCartItemCount(totalCount);
  })

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="container sm:flex justify-between items-center">
        

        <div className="w-[30%] sm:w-[300px] md:w-[15%] relative">
          <input
            className="border-gray-200 border p-1  text-md md:p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Search..."
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-2 text-gray-400 text-sm md:text-xl"
           
          />
        </div>
 
        <div className="font-bold  text-center pb-4 sm:pb-0 text-blackish">
        <Link href="/">
                        <Image src={logo} height={10} width={140}  alt='' 
                        className="h-[6rem] w-[5rem] pt-5 sm:h-[8rem] sm:w-auto md:h-[6rem] md:w-auto lg:h-[8rem] lg:w-auto" />
                    </Link>
        </div>


        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />

          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

        <Link href="cart">
        <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            {cartItemCount}
            </div>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;


