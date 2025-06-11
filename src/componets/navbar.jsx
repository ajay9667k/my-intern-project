import React, { useState } from "react";
import { Link } from "react-router-dom";
import siteworex from "../imge/siteworex.png"

const Sitenav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <div className="h-[50px]  w-[100%] m-auto ">
     <nav className="bg-white  shadow-md bg-opacity-50 backdrop-blur-sm fixed-top w-[100%] m-auto ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Brand */}
          <div className="flex float-left">
            
            <Link className="text-2xl font-bold text-blue-600">
             <button>
                <img src={siteworex} className="h-[40px] w-[150px] rounded-lg" alt="" />
             </button>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-normal ml-48 ">
            <Link className="text-gray-700 hover:text-blue-600" to="/">
              DOMAINS 
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/about">
              HOSTING
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/services">
              SERVERS
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/contact">
              EMAIL MARKETING
            </Link>

             <Link className="text-gray-700 hover:text-blue-600" to="/">
              GOOGLE WORKSPACE
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/about">
              LICENSE
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/services">
              SUPPORT
            </Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/contact">
              ABOUT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none ml-[230px]"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } px-4 pb-4 transition-all duration-300`}
      >

        <Link className="block py-2 text-gray-700 hover:text-blue-600" to="/">Home</Link>
        <Link className="block py-2 text-gray-700 hover:text-blue-600" to="/about">About</Link>
        <Link className="block py-2 text-gray-700 hover:text-blue-600" to="/services">Services</Link>
        <Link className="block py-2 text-gray-700 hover:text-blue-600" to="/contact">Contact</Link>
      </div>
    </nav>

  


   </div>
   
  );
};

export default Sitenav;
