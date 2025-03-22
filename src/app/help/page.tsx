import React from "react";
import { FiChevronRight, FiSearch } from "react-icons/fi";
import NewNav from "@/components/Navbar";
import { BsBox } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoIosPin } from "react-icons/io";
import Footer from "@/components/Footer";
import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Help Center - Karvi Printing Press",
    description: "Need help? Contact Karvi Printing Press for support on orders, shipping, and more. Call or email us today!",
    keywords: ["Help", "Support", "Contact", "Orders", "Shipping", "Printing"],
    authors: [{ name: "Karvi Printing Press" }],
    robots: {
        index: true,
        follow: true,
    },
};

function HelpPage() {
    return (
        <>
            <Head>
                <title>Help Center - Karvi Printing Press</title>
            </Head>
            <NewNav />
            <div className="w-full py-12 bg-gray-100 flex items-center justify-center">
                <div className="text-center max-w-lg mx-auto">
                    {/* Title */}
                    <h1 className="text-4xl font-semibold text-black mb-6">Help is here.</h1>

                    {/* Search Bar */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search for Articles"
                            className="w-[450px] px-4 py-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <FiSearch size={20} />
                        </button>
                    </div>

                    {/* Help Link */}
                    <div className="flex items-center justify-center mt-6 text-black">
                        <BsBox className="mr-2" size={18} />
                        <p className="text-lg">
                            Need help tracking an order?{" "}
                            <a href="#" className="text-black underline">
                                Find and track an order
                            </a>
                        </p>
                    </div>
                </div>
            </div>



            <div className="help mt-10 mb-16">
                <h2 className="about text-center text-3xl font-Poppins font-semibold mt-14 text-gray-800">
                    {/* Help Center */}
                </h2>
                <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-44 mt-16 space-y-6 md:space-y-0 md:space-x-6">
                    <div className="box1">
                        <div className="flex justify-center">
                            <BiSupport className="w-20 h-20 md:w-40 md:h-40" color='#0c366e' />
                        </div>
                        <p className="text-center font-semibold text-lg mt-1 text-gray-800">Call us for queries</p>
                        <p className="text-center text-gray-600">Helpdesk: <b> +91 9696745350, +91 9125318307</b></p>
                        <p className="text-center text-gray-600">(Mon - Sat: 10:00 AM - 7:00 PM)</p>
                    </div>
                    <div className="box2">
                        <div className="flex justify-center">
                            <MdOutlineEmail className="w-20 h-20 md:w-40 md:h-40" color='#0c366e' />
                        </div>
                        <p className="text-center font-semibold text-lg mt-1 text-gray-800">E-Mail us</p>
                        <p className="text-center text-gray-600">Sales enquiries and customer support:</p>
                        <p className="text-center text-gray-600">Karviprinting.helpcare@gmail.com</p>
                    </div>
                    <div className="box1">
                        <div className="flex justify-center">
                            <IoIosPin className="w-20 h-20 md:w-40 md:h-40" color='#0c366e' />
                        </div>
                        <p className="text-center font-semibold text-lg mt-1 text-gray-800">Postal address</p>
                        <p className="text-center text-gray-600">Karvi Printing Press Pvt. Ltd.</p>
                        <p className="text-center text-gray-600">
                            Narayan Puram Colony, Padari Bazar, <br />
                            Gorakhpur Uttar Pradesh - 273014
                        </p>
                    </div>
                </div>
            </div>

            {/* Popular Questions Section */}
            <div className="w-full py-12 bg-white flex justify-center">
                <div className="max-w-5xl mx-2 px-4">
                    <h2 className="text-2xl font-semibold text-black mb-6">Popular Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "Is there any support for Bulk Orders?",
                            "Can I change my order?",
                            "Can I cancel my order?",
                            "Where's my order?",
                            "What are your shipping speeds?",
                            "What if I'm not happy with my purchase?",
                            "My order hasn't arrived, what can I do?",
                            "Where are my designs saved?",
                            "My Vista Account",
                        ].map((question, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow"
                            >
                                <p className="text-black text-sm md:text-base">{question}</p>
                                <FiChevronRight className="text-gray-500" size={20} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />



        </>
    );
}

export default HelpPage;