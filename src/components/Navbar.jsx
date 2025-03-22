"use client"

import React, { useState } from 'react'
import { IoMdSearch, } from 'react-icons/io'
import { FaLocationDot, FaCartShopping, FaWhatsapp } from "react-icons/fa6";
import { RiUser5Fill } from "react-icons/ri";
import { PiSealQuestionFill } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import Link from 'next/link';


function NewNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>

            {/* top menu */}

            <div className="tpmnu hidden lg:flex md:flex justify-between text-sm font-[400] font-Poppins bg-[#f8f9fa] items-center py-1">
                <ul className="ml-10">

                    <Link className="brand p-[.5rem] flex " href={'/franchise'}> <FaStore size={21} className='mr-2' />Franchise</Link>


                </ul>

                <ul className="flex space-x-5 mr-16 items-center">
                    <Link className="p-[.5rem] text-violet-900 flex" href={'/locate-store'}><FaLocationDot size={18} className='mr-2' /> Store Locator</Link>
                    <Link href={''} className="p-[.5rem]">Sample Kit</Link>
                    {/* <Link href={''} className="h-full bg-orange-600 p-[.5rem] text-white">Business Solutions</Link> */}<Link className="flex items-center" href={'/help'}><PiSealQuestionFill size={24} className='mr-2' /> Help Center</Link>
                    <Link href={'/login'} className="flex items-center"><RiUser5Fill size={24} className='mr-2' /> Login / Signup</Link>


                </ul>

            </div>

            {/* pc lower menu */}


            <div className="hidden lowermnu  lg:flex md:flex px-3 py-4 justify-between bg-white shadow-none z-10">

                <div className="flex items-center align-middle py-1">
                    <Link href={"/"}>
                        <img src="/images/logo.jpg" alt="karvi printing logo" className="w-15 h-14 ml-6 object-fill" />
                    </Link>
                    <Link className="my-2 ml-3 text-xl font-[700] font-[cambria]" href={'/'}>Karvi Printing Press</Link>
                    {/* Search box */}
                    <form action="" className="relative ml-10">
                        <IoMdSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400 items-center" size={22} />
                        <input
                            type="text"
                            className="border my-1.5 rounded-md py-3 pl-10 pr-3 border-slate-400 w-[625px]"
                            placeholder="Search"
                        />
                    </form>
                </div>

                <div className="flex p-[.5rem] space-x-7 mr-16 text-slate-600 mt-1">
                    {/* <Link className="flex" href={'/help'}><PiSealQuestionFill size={24} className='mr-2' /> Help Center</Link>
                    <Link href={'/login'} className="flex"><RiUser5Fill size={24} className='mr-2' /> Login / Signup</Link> */}

                    <Link href='' className=""><FaCartShopping size={25} className='mt-1' /></Link>
                    <Link href='https://wa.link/ily1c3' className=""><FaWhatsapp color='green' size={25} className='mt-1' /></Link>

                </div>



            </div>


            {/* category menu */}

            <div className="hidden cat-menu bg-[#f8f9fa] lg:flex md:flex space-x-4 font-Poppins text-[#666666] px-6 py-2.5 text-[14px] justify-center ">

                <a href="" className='text-black'>All Products</a>
                <a href="">Business Card</a>
                <a href="">Marketing Material</a>
                <a href="">Signs & Banners</a>
                <a href="">Invitations & Stationary</a>
                <a href="">Stickers & Labels</a>
                <a href="">Letter Board</a>
                <a href="">Digital Print</a>
                <a href="">Offset Print</a>
                <a href="">Service</a>


            </div>



            {/* Mobile menu */}

            <div className="mobmenu flex justify-between items-center p-3 lg:hidden md:hidden">
                <div className="row flex flex-wrap" onClick={toggleDrawer}>
                    <IoMenuOutline size={28} className='' />
                </div>
                <Link href={"/"}>
                    <span className='flex'>
                        <img src="/images/logo2.png" className='h-9' alt="karvi printing logo" />
                        <p className=" font-Poppins font-bold ml-2 mt-1.5">Karvi Printing</p>
                    </span>

                </Link>
                <div className="row flex flex-wrap" >
                    <IoMdSearch className="" size={24} />
                    <Link href={''} className=""><FaCartShopping size={24} className=' ml-2 mr-2' /></Link>


                </div>




            </div>

            {/* drawer */}

            <div>


                <div
                    className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={toggleDrawer}
                ></div>

                <div
                    className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="p-4">
                        <h2 className="text-xl font-semibold cambria">Karvi Printing</h2>
                        <ul className="mt-4">
                            <li className="py-2 border-b border-gray-200"><Link href={'/'}>Home</Link></li>
                            <li className="py-2 border-b border-gray-200"><Link href={'/services'}>Services</Link></li>
                            <li className="py-2 border-b border-gray-200"><Link href={'/login'}>Login</Link></li>
                            <li className="py-2 border-b border-gray-200"><Link href={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>






        </>
    )
}

export default NewNav;

