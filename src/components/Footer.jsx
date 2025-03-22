import React from 'react';

const Footer = () => {

    const date = new Date()
    let year = date.getFullYear();
    return (
        <footer className="bg-gray-800 text-white py-8 hidden lg:block ">
            <div className="container mx-auto px-4">
                <div className="flex justify-between flex-wrap">
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h5 className="uppercase font-bold mb-2">Contact Us</h5>
                        <p>+91 9696745350 (Mon - Sat: 10:00 AM - 7.00 PM)</p>
                        <p>Karviprinting.helpcare@gmail.com</p>
                        <p>Karvi Printing Press Pvt. Ltd.</p>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h5 className="uppercase font-bold mb-2">Quick Links</h5>
                        <ul>
                            <li><a href="#" className="hover:underline">Track Order</a></li>
                            <li><a href="#" className="hover:underline">Store Locator</a></li>
                            <li><a href="#" className="hover:underline">Sample Kit</a></li>
                            <li><a href="#" className="hover:underline">Business Solutions</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h5 className="uppercase font-bold mb-2">Products</h5>
                        <ul>
                            <li><a href="#" className="hover:underline">Stationery</a></li>
                            <li><a href="#" className="hover:underline">Corporate Gifts</a></li>
                            <li><a href="#" className="hover:underline">Drinkware</a></li>
                            <li><a href="#" className="hover:underline">Labels & Packaging</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h5 className="uppercase font-bold mb-2">Support</h5>
                        <ul>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                            <li><a href="#" className="hover:underline">Payment & Refunds</a></li>
                            <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; {year} Karvi Printing Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
