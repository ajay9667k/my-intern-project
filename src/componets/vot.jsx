import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    
    autoplay:true ,
    autuplaySpeed:1,
    
    pauseOnHover: true,
    

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   
    <div className='bg-rt1  bg-cover bg-center h-[400px] border    items-center'>
     <Slider className="gap-4 px-4" {...settings}>
      <div>
        <div className="w-[90%] m-auto ">
          <div className="md:w-80  m-9 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
            <div className="p-5 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
                Hosting
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list">
                  <li>2 GB Storage</li>
                  <li>1 Website</li>
                  <li>5 GB Bandwidth</li>
                  <li>5 Email Accounts</li>
                  <li>3 Sub Domains</li>
                  <li>1 Mysql Database</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[95%] m-auto ">
          <div className="md:w-80 m-9 opacity-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
            <div className="p-5 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
                Reseller
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list">
                  <li>25 GB Storage</li>
                  <li>Unlimited Websit</li>
                  <li>Unlimited Bandwidth</li>
                  <li>Unlimited Email Accounts</li>
                  <li>Unlimited Sub Domans</li>
                  <li>Unlimited Mysql Database</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[90%] mx-12">
          <div className="md:w-80 m-9 opacity-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
            <div className="p-5 mr-12 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
                VPS
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list">
                  <li>2 CPU Cores</li>
                  <li>2 GB RAM</li>
                  <li>30 GB SSD</li>
                  <li>1 TB Bandwidth</li>
                  <li>1 IP Addresses</li>
                  <li>Free CWP Panel</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
         <div className="w-[90%]  mx-12">
        <div className="md:w-80 m-9 opacity-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
          <div className="p-5 ">
            <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
              Cloud
            </p>
            <hr className="mt-3 text-gray-400" />

            <h1 className="mb-3 font-normal text-black dark:text-gray-400">
              <ul className="ul-list">
                <li>2 CPU Cores</li>
                <li>4 GB RAM</li>
                <li>50 GB SSD</li>
                <li>1 TB Addresses</li>
                <li>1 IP Addresses</li>
                <li>Free CWP Panel</li>
              </ul>
            </h1>
            <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
              View Plan
            </p>
          </div>
        </div>
      </div>
      </div>


      <div>
         <div className="w-[90%] m-auto">
          <div className="md:w-80 m-9 opacity-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
            <div className="p-5 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
                Dedicated
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list">
                  <li>Dual 2Core Atom</li>
                  <li>2 GB RAM </li>
                  <li>500 GB HDD</li>
                  <li>1 TB Bandwidth</li>
                  <li>1 IP Addresses</li>
                  <li>Free CWP Panel</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>


      
    </Slider>
   </div>
   
  );
};

export default MyCarousel;
