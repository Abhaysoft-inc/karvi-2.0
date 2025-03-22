"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/images/webp/g1.webp";
import image2 from "@/images/webp/g2.webp";
import image3 from "@/images/webp/g3.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
    src: StaticImageData;
}

const images: ImageData[] = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
];

export default function ImageSlider(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    const handleMouseOver = (): void => setIsHovered(true);
    const handleMouseLeave = (): void => setIsHovered(false);

    return (
        <div className="relative w-full bg-[#ffff] py-2 md:py-6"> {/* Further reduced padding for mobile */}
            <div
                className="relative flex flex-col md:flex-row items-center justify-between h-auto md:h-[400px] mx-auto max-w-7xl px-2 md:px-8 space-y-1 md:space-y-0" // Added space-y control for vertical spacing
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                {/* Image Content */}
                <div className="relative w-full h-[200px] md:h-full"> {/* Further reduced height for mobile */}
                    <Image
                        src={images[currentIndex].src}
                        alt={`Slider Image ${currentIndex + 1}`}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                        priority
                    />
                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 bg-white p-1 md:p-2 rounded-full shadow-md hover:bg-gray-200"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                </button>
                <button
                    className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 bg-white p-1 md:p-2 rounded-full shadow-md hover:bg-gray-200"
                    onClick={nextSlide}
                >
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-1 md:mt-4"> {/* Further reduced margin for mobile */}
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 w-1.5 md:h-3 md:w-3 mx-1 rounded-full cursor-pointer ${index === currentIndex ? "bg-[#ff7a00]" : "bg-gray-300"
                            } transition-all duration-300 ease-in-out`}
                    ></div>
                ))}
            </div>
        </div>
    );
}