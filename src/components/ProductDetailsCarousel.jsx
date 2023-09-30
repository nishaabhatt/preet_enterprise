"use client"
import React, { Component }  from 'react'
import Image from 'next/image';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel 
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            thumbWidth={60}
            
            className="productCarousel h-full">

             <img src='/handbad1.webp'  alt=""/>
             <img src='/handbag1_1.webp'  alt=''/>
             <img src='/handbag1_2.webp'  alt=''/>
             <img src='/handbag1_3.avif'   alt=''/>
             <img src='/handbag1_4.avif' h alt=''/>

            </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;