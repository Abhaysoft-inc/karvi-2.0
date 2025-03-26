"use client";

import { useState, useEffect, useRef } from "react";
import NewNav from "@/components/Navbar";
import Slider from "@/components/Slider";
import Image from "next/image";
import Footer from "@/components/Footer"
import { FaWhatsapp } from "react-icons/fa6";
import Head from "next/head";

export default function Home() {


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