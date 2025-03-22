"use client"

import Footer from '@/components/Footer'
import NewNav from '@/components/Navbar'
import React from 'react'

function page() {
    return (
        <>
            <NewNav />

            <div className="mainscreen mt-6 mb-10 font-Poppins">

                <p className="text-2xl text-center">Fill the form to join us!</p>

                <div className="rounded form max-w-lg mx-auto mt-6 lg:border border-gray-400 ">
                    <form className="space-y-4 p-6" action="https://formspree.io/f/xkgjjvad" method='post'>
                        <div>
                            <input
                                type="text"
                                name='fullname'
                                placeholder="Full Name"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name='phone'
                                placeholder="Phone Number"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name='email'
                                placeholder="Email"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Address"
                                name='address'
                                rows={3}
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name='storelocation'
                                placeholder="Store Location"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name='franchisetype'>

                                <option value="">Select Franchise Type</option>
                                <option value="basic">Basic</option>
                                <option value="premium">Premium</option>
                                <option value="enterprise">Enterprise</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Share and Request Callback
                        </button>
                    </form>
                </div>



            </div>
            <Footer />


        </>
    )
}

export default page