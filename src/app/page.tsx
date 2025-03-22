"use client";

import { useState, useEffect, useRef } from "react";
import NewNav from "@/components/Navbar";
import Slider from "@/components/Slider";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Image from "next/image";
import Footer from "@/components/Footer"
import { FaWhatsapp } from "react-icons/fa6";
import Head from "next/head";

export default function Home() {
  const offers = [
    "🚚 FREE SHIPPING on all Orders! | 📞 Need Assistance? Call at +91 9696745350",
    "Special One Time Offer! Flat 5% OFF on Orders ₹5,000+ | Code: MAR5OFF"
  ];

  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  // Function to navigate to the next offer
  const nextOffer = () => {
    setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  // Function to navigate to the previous offer
  const prevOffer = () => {
    setCurrentOfferIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextOffer();
    }, 2000); // Change offer every 5 seconds

    return () => clearInterval(interval);
  });



  // floatingaction button code here

  const [showChat, setShowChat] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
      setShowChat(false);
    }
  };

  useEffect(() => {
    if (showChat) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showChat]);

  return (
    <>
      <Head>
        <title>Karvi Printing Press - Best Printing Press in Gorakhpur  and Deoria</title>

      </Head>
      <NewNav />
      {/* black ticker */}

      <div className="ticker w-full py-3 bg-black text-center flex justify-between align-middle items-center px-4 md:px-10">
        <button
          onClick={prevOffer}
          className="hover:bg-gray-800 p-1 rounded-full transition-colors"
          aria-label="Previous offer"
        >
          <MdArrowBack color="white" size={20} />
        </button>

        <div className="overflow-hidden mx-2 md:mx-4 flex-1">
          <p
            className="text-white text-sm md:text-base text-center transition-opacity duration-300 animate-fadeIn"
            key={currentOfferIndex} // Key helps React identify when to animate
          >
            {offers[currentOfferIndex]}
          </p>
        </div>

        <button
          onClick={nextOffer}
          className="hover:bg-gray-800 p-1 rounded-full transition-colors"
          aria-label="Next offer"
        >
          <MdArrowForward color="white" size={20} />
        </button>
      </div>

      <Slider />
      <Image src={'/images/banner.jpg'} alt="10" width={1000} height={400} className="w-full" layout="responsive" />

      <div className="h-50 w-full">

      </div>

      {/* Fab */}

      <div className="fixed bottom-3 right-6 z-30">
        <div
          className="rounded-full bg-green-600 p-3 cursor-pointer"
          onClick={toggleChat}
        >
          <FaWhatsapp size={41} color='white' />
        </div>
        {showChat && (
          <div ref={chatRef} className="absolute bottom-16 right-6 bg-white w-72 h-96 rounded-lg shadow-lg flex flex-col">
            <div className="bg-green-600 text-white p-3 flex justify-between items-center">
              <span>Chat with us</span>
              <button onClick={toggleChat} className="text-white font-bold cursor-pointer">X</button>
            </div>
            <div className="flex-1 p-3 overflow-y-auto">
              <div className="bg- -100 p-2 rounded-lg mb-2">
                <p className="text-sm">Hello! How can we help you?</p>
              </div>
              {/* Add more messages here */}
            </div>
            <div className="p-3 border-t border-gray-200">
              <a
                href="https://wa.link/ily1c3"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-600 text-white py-2 rounded-lg"
              >
                Start Chat
              </a>
            </div>
          </div>
        )}
      </div>



      {/* foooter */}
      <Footer />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Karvi Printing Press",
            url: "https://karviprinting.com",
            logo: "https://karviprinting.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 9696745350",
              contactType: "Customer Service",
            },
          }),
        }}
      />
    </>
  );
}