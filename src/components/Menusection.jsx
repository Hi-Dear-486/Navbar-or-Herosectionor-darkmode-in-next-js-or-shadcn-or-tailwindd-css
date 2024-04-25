"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

const Menusection = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-[32rem] 2xl:h-96 ">
      <Carousel className="z-[-10]">
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image
            src={"/slider-1.jpg"}
            alt="slider-1"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="z-10 text-justify max-w-96 sm:w-96 md:w-96 ML:w-64 MM:w-56 MS:w-52">
            <h1 className="sm:text-3xl text-xl font-medium title-font text-gray-100">
              Manufacturer and Exporter in All Type of Knitted And Woven
              Garments
            </h1>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image
            src={"/slider-2.jpg"}
            alt="slider-2"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image
            src={"/slider-3.jpg"}
            alt="slider-3"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Menusection;
