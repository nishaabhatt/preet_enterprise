"use client"
import React, { useState } from "react"




function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
 

  return (

    <nav className="shadow-sm text-black mb-10">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-3">

       <button id="mobile-menu-toggle" className="md:hidden text-black " onClick={toggleMenu}>
       <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
       </button>
      </div>
        
        <ul   id="main-menu"
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          }  space-x-4 md:flex w-fit gap-12 mx-auto`}>
        <li className="relative group">
            <a href="/" className="sm:navbar__link  font-bold relative text-sm md:text-lg ">HOME</a>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
            space-y-2 py-2 px-4 left-0 shadow-lg z-10">
              <div className="font-bold">jwellery</div>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
            </div>
          </li>
          <li className="relative group">
            <a href="jwellery" className="navbar__link font-bold relative text-sm md:text-lg">CATEGORY</a>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
            space-y-2 py-2 px-4 left-0 shadow-lg z-10">
              <div className="font-bold">jwellery</div>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
            </div>
          </li>
          <li className="relative group">
            <a href="mencat" className="navbar__link font-bold relative text-sm md:text-lg">MENS</a>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
            space-y-2 py-2 px-4 left-0 shadow-lg z-10">
              <div className="font-bold">jwellery</div>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
            </div>
          </li>
          <li className="relative group">
            <a href="womens" className="navbar__link font-bold relative text-sm md:text-lg">WOMENS</a>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
            space-y-2 py-2 px-4 left-0 shadow-lg z-10">
              <div className="font-bold">jwellery</div>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
            </div>
          </li>
          <li className="relative group">
            <a href="jwellery" className="navbar__link font-bold relative text-sm md:text-lg">JWELLERY</a>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
            space-y-2 py-2 px-4 left-0 shadow-lg z-10">
              <div className="font-bold">jwellery</div>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
            </div>
          </li>
          <li className="relative group">
            <a href="perfume" className="navbar__link font-bold relative text-sm md:text-lg">PERFUME</a>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
            space-y-2 py-2 px-4 left-0 shadow-lg z-10">
              <div className="font-bold">jwellery</div>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
            </div>
          </li>
          <li className="relative group">
            <a href="jwellery" className="navbar__link font-bold relative text-sm md:text-lg">COLLECTIONS</a>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
            space-y-2 py-2 px-4 left-0 shadow-lg z-10">
              <div className="font-bold">jwellery</div>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
            </div>
          </li>
          <li className="relative group">
            <a href="offers" className="navbar__link font-bold relative text-sm md:text-lg">HOT OFFERS</a>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-900
            space-y-2 py-2 px-4 left-0 shadow-lg z-10">
              <div className="font-bold">jwellery</div>
              <li><a href="#" className="hover:text-gray-400">abc</a></li>
              <a href="#" className="hover:text-gray-400">abc</a>
            </div>
          </li>
        
        </ul>
       
      </div>
    
  </nav>
  

  )
        }

export default Navbar