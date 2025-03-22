import React from 'react'

import NewNav from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function StoreLocator() {
    return (
        <>
            <NewNav />



            {/* more details section */}

            <div className="flex justify-around bg-[#f3f3f3]">
                <div className="text-center py-12 bg-[#f3f3f3] pt-sans-regular">
                    <p className="text-lg font-semibold">Head Office</p>
                    <p className="text-4xl mt-2 font-semibold font-[cambria]">Karvi Printing Press</p>
                    <p className="text-xl">Narayan Puram Colony, Gorakhpur, Uttar Pradesh, India - 273014</p>
                    <p className="text-md">Phone: +91 9696745350</p>
                    <p className="text-md">Email: karviprinting@gmail.com</p>
                </div>
                <div className="text-center py-12  pt-sans-regular">
                    <p className="text-lg font-semibold">Branch Office</p>
                    <p className="text-4xl mt-2 font-semibold font-[cambria]">Karvi Printing Press</p>
                    <p className="text-xl">Sahjanwa Main Market, Gorakhpur, Uttar Pradesh, India - 273209</p>
                    <p className="text-md">Phone: +91 9219613606</p>
                    <p className="text-md">Email: karviprinting.02@gmail.com</p>
                </div>

            </div>


            {/* Search */}

            <div className="mx-28   my-10">
                <p className="font-semibold text-lg">Find Our Store</p>
                <input type="text" placeholder='Pincode' className='border rounded-md px-3 mt-2 py-2 w-96 border-slate-400' />
            </div>
            <div className="h-40 w-full"></div>


            {/* <Footer /> */}
            <Footer />


        </>
    )
}
