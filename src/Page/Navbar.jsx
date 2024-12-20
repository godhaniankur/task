import React, { useState } from 'react';
import logo from "../image/do.avif";
import { IoMdCall } from "react-icons/io";
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div
            className={`fixed w-full top-0 z-50 transition duration-300 ${scroll ? "bg-white text-black shadow-md border" : "bg-white text-black"
                }`}
        >
            <div className="w-11/12 mx-auto flex justify-between items-center h-20">



                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl text-black"
                    >
                        {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                    </button>
                </div>

                <div
                    className={`${menuOpen ? "block" : "hidden"
                        } lg:w-full  w-full lg:flex lg:items-center lg:gap-x-10 absolute lg:static top-16 left-0  bg-white shadow-md lg:shadow-none transition-all duration-300`}
                >
                    <nav className="flex flex-col lg:flex-row  lg:justify-between items-center gap-y-5 justify-around w-full   lg:gap-x-10 text-center lg:text-left">
                        <div className="flex items-center gap-x-2 text-lg underline underline-offset-8 text-[#8B2823] font-semibold">
                            <IoMdCall size={24} />
                            <a href="tel:+916355434799" title="Call Us" className="text-black">
                                +91-9625221822
                            </a>
                        </div>
                        <div className="flex items-center">
                            <img src={logo} alt="Company Logo" className="h-10" />
                        </div>
                        <div className="mt-4 lg:mt-0 mb-4">
                            <button
                                className="bg-[#8B2823] text-red-200 px-5 py-2 rounded-full tracking-widest font-semibold hover:bg-[#6f211d] transition duration-200"
                                title="Book an Appointment"
                            >
                               <Link to="/appointment">BOOK APPOINTMENT</Link> 
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
