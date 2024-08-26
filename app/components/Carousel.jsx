"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Carousel = () => {
  const images = [
    "/bitcoinjpg.jpg",
    "/images.jpg",
    "/news.jpg",
    "/top.jpg",
    "/bit.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[400px] mx-auto max-sm:h-[200px]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[400px] max-sm:h-[200px] object-cover"
          width={400}
          height={400}
        />
      </div>
      <FaArrowCircleLeft
        color="white"
        className="absolute top-1/2 -left-3 cursor-pointer"
        size={28}
        onClick={prevSlide}
      />
      <FaArrowCircleRight
        color="white"
        className="absolute top-1/2 -right-3 cursor-pointer"
        size={28}
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carousel;
