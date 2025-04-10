import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS

const ModifiedSlider = () => {
    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed in ms
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay interval in ms
        arrows: true, // Show next/prev arrows
    };

    const images = [
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
    ];

    return (
        <div className="w-full">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="w-full">
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            layout="responsive" // Use responsive layout
                            width={1000} // Set a placeholder width
                            height={500} // Set a placeholder height to maintain aspect ratio
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ModifiedSlider;