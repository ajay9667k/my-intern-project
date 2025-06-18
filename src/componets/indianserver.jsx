import { useState } from "react";
import host from "../imge/host.gif";
import Sliderui from "./mand";
import FAQ from "./singn";
import ban from "../imge/baner1.png"
import ban1 from "../imge/vps.svg";
import flight from "../imge/uptime.png"
import Switch from "react-switch"


const data = [
  {
    Dt: "Intel Core i5-3470 4 Cores",
    Cl: "3.20Ghz",
    Ram: "8 GB DDR3",
    Store: "240 GB SSD",
    Band: "2000 GB",
    Ip: "1 IP's",
    Price: "₹ 2999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Intel Core i7-3770 4 Cores",
    Cl: "3.40Ghz",
    Ram: "8 GB DDR3",
    Store: "480 GB SSD",
    Band: "2000 GB",
    Ip: "1 IP's",
    Price: "₹ 3599/m",
    Button: "Configure Now",
  },

  {
    Dt: "Intel Xeon 3430 4 Cores",
    Cl: "2.40Ghz",
    Ram: "8 GB DDR3",
    Store: "480 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 3999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Intel Xeon 1231_v3 4 Cores",
    Cl: "3.20Ghz",
    Ram: "16 GB DDR3",
    Store: "480 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 4999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Intel Xeon E5-2620 6 Cores",
    Cl: "2.5Ghz",
    Ram: "32 GB DDR3",
    Store: "480 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 5999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Intel Xeon E5-2620 6 Cores",
    Cl: "2.5Ghz",
    Ram: "64 GB DDR3",
    Store: "480 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 6999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Intel Xeon E5-2650 8 Cores",
    Cl: "2.60Ghz",
    Ram: "64 GB DDR3",
    Store: "480 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 7999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Intel Xeon E5-2620 12 Corse",
    Cl: "2.60Ghz",
    Ram: "64 GB DDR3",
    Store: "480 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 8999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Intel Xeon E5-2670 16 Corse",
    Cl: "2.60Ghz",
    Ram: "128 GB DDR3",
    Store: "960 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 13999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Dual Xeon E5-2670 16 Cores",
    Cl: "2.60Ghz",
    Ram: "256 GB DDR3",
    Store: "960 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 17999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Dual E5-2683v4 24 Cores",
    Cl: "3.0GHz Turbo",
    Ram: "128 GB DDR3",
    Store: "960 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 17999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Dual E5-2683v4 24 Cores",
    Cl: "3.0GHz Turbo",
    Ram: "256 GB DDR3",
    Store: "960 GB SSD",
    Band: "200 TB",
    Ip: "1 IP's",
    Price: "₹ 21999/m",
    Button: "Configure Now",
  },

  {
    Dt: "Xeon E7-4860 4O Cores",
    Cl: "2.67GHz Turbo",
    Ram: "256 GB DDR3",
    Store: "960 GB SSD",
    Band: "200 TB",
    Ip: "5 IP's",
    Price: "₹ 29999/m",
    Button: "Configure Now",
  },
];

const Indiamserver = () => {
  const [cheked,setCheked]=  useState(false)
    const [ulone,setulone]= useState("1 Cpanel account")
    const [ultwo,setultwo]= useState("5 Cpanel accounts")
    const [ulthree,setulthree]= useState("10 Cpanel accounts")
    const [ulfour,setulfour]= useState("Unlimited Cpanel")
    function handle(){
      setCheked(!cheked)
      if(cheked){
        setulone("1 Cpanel account")
        setultwo("5 Cpanel accounts")
        setulthree("10 Cpanel accounts")
        setulfour("Unlimited Cpanel")
      }else{
        setulone("1 Plesk account")
        setultwo("5 Plesk accounts")
        setulthree("10 Plesk accounts")
        setulfour("Unlimited Plesk")
      }
      
    }
  return (
    <div className="bg-[#e2efff]">
      <div className="bg-img2  bg-fixed bg-center  bg-cover bg-no-repeat  w-[100%]   ">
        <div className="justify-center  items-center flex flex-col sm:flex-row bg-opacity-50 font-serif text-center text-[#f8f9fa]   bg-zinc-500 md:h-[550px]  h-[740px] w-full">
          <div className="md:mt-[100px] mt-[130px]  md:h-[300px] w-[70%] md:w-[40%]">
            <p className="sm:text-5xl text-4xl w-[280px]  sm:w-full text-[#f8f9fa] mb-6 ml-[25px]  md:text-start">
              Dedicated Server{" "}
              <span className="bg-[#096D72]  rounded-md text-3xl md:text-4xl ">
                5% OFF
              </span>
            </p>
            <p className="text-[#f8f9fa] md:text-start text-lg">
              Experience reliability and speed like never before! <br />
              Unleash the power of Linux/Windows India dedicated servers with
              our high-performance hosting solutions. Subscribe now and save big
              on your dedicated server with our limited time 20% discount offer.
            </p>
            <button className="bg-[#2F979F] mt-8 text-[#f8f9fa] rounded-full h-[30px] md:float-start  w-[130px]">
              See All Plans
            </button>
          </div>

          <div className=" flex opacity-50 justify-center items-center md:mt-0  sm:h-[300px] w-[70%]  md:w-[40%]">
            <div className="bg-img3 bg-cover sm:h-[300px] md:ml-16 h-[180px] w-[180px] sm:w-[260px]"></div>
          </div>
        </div>
        {/* <div className="bg-red-400 h-[100px] w-full">

        </div> */}
      </div>

      <div className="p-6 bg-gradient-to-tr from-gray-100 to-white min-h-screen">
        <p className="text-3xl font-bold text-center my-8">
          India's Best Linux/Windows Dedicated Servers at Affordable Price
        </p>
        {/* <div className="text-center justify-center items-center flex h-[60px]">
              <h1 className="text-2xl text-[#707070] font-mono font-semibold p-5" >Linux</h1>
              <div className="h-[20px]">
          <Switch  className="bg-gray-500" value={cheked}   checked={cheked} onChange={()=>handle()} onColor="#3333ff"
       checkedIcon={false} uncheckedIcon={false}  />  
        </div>
        
        <h1 className="text-2xl text-[#707070] font-mono font-semibold p-5">Windows</h1>
           </div>
        <div className="flex flex-col justify-center items-center md:flex-row font-sans gap-10 ">
          <div className="w-[280px] h-[560px] bg-white  rounded-md border border-red-700">
            <div className="w-[280px] text-center rounded-t-lg m-auto overflow-hidden h-[150px]">
              <p className=" font-bold text-[white] h-[60px] rounded-t-lg bg-[#00AEEF]  text-xl">Beginner Plan</p>
              <div className="flex justify-center items-center">
                <img
                  src={ban}
                  alt=""
                  className="h-[80px] border rounded-full mt-1 bg-gray-100  w-[80px]"
                />
              </div>
            </div>
            <p className="text-center font-semibold  text-4xl text-[#00AEEF]">
              161 ₹
            </p>
            <p className=" text-sm text-center  font-semibold"> Monthly</p>

            <ul className=" tracking-widest ml-2  ">
              <li className="pt-8">
                <span className="bg-[#00AEEF] rounded-full  ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                1 Website{" "}
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full  ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">{ulone}</span>
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">2 GB</span>{" "}
                Storage
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">5 GB</span>{" "}
                Bandwidth
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">5 Email</span>{" "}
                Accounts
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">3 Sub</span>{" "}
                Domains
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">1 Mysq</span>{" "}
                Database
              </li>
            </ul>
            
            <div className="flex justify-center items-center  mt-8 ">
              <button className="rounded-lg h-[45px] text-center border-[2px] border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-[white] w-[160px] font-bold text-md">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="w-[280px] h-[560px] bg-white  rounded-md border border-red-700">
            <div className="w-[280px] text-center rounded-t-lg m-auto overflow-hidden h-[150px]">
              <p className=" font-bold text-[white] h-[60px] rounded-t-lg bg-[#00AEEF]  text-xl">Business Plan</p>
              <div className="flex justify-center items-center">
                <img
                  src={ban}
                  alt=""
                  className="h-[80px] border rounded-full mt-1 bg-gray-100  w-[80px]"
                />
              </div>
            </div>
            <p className="text-center font-semibold  text-4xl text-[#00AEEF]">
             221 ₹
            </p>
            <p className=" text-sm text-center  font-semibold"> Monthly</p>

            <ul className=" tracking-widest ml-2  ">
              <li className="pt-8">
                <span className="bg-[#00AEEF] rounded-full  ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                5 Website{" "}
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full  ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">{ultwo}</span>
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">5 GB</span>{" "}
                Storage
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">Unlimited </span>{" "}
                Bandwidth
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">Unlimited</span>{" "}
               Email Accounts
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">Unlimited</span>{" "}
               Sub Domains
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">Unlimited</span>{" "}
                Mysql Database
              </li>
            </ul>
            
            <div className="flex justify-center items-center  mt-8 ">
              <button className="rounded-lg h-[45px] text-center border-[2px] border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-[white] w-[160px] font-bold text-md">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="w-[280px] h-[560px] bg-white  rounded-md border border-red-700">
            <div className="w-[280px] text-center rounded-t-lg m-auto overflow-hidden h-[150px]">
              <p className=" font-bold text-[white] h-[60px] rounded-t-lg bg-[#00AEEF]  text-xl">Traffic Plan</p>
              <div className="flex justify-center items-center">
                <img
                  src={ban}
                  alt=""
                  className="h-[80px] border rounded-full mt-1 bg-gray-100  w-[80px]"
                />
              </div>
            </div>
            <p className="text-center font-semibold  text-4xl text-[#00AEEF]">
             331 ₹
            </p>
            <p className=" text-sm text-center  font-semibold"> Monthly</p>

            <ul className=" tracking-widest ml-2  ">
              <li className="pt-8">
                <span className="bg-[#00AEEF] rounded-full  ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                10 Website{" "}
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full  ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">{ulthree}</span>
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">10 GB</span>{" "}
                Storage
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">Unlimited </span>{" "}
                Bandwidth
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">Unlimited</span>{" "}
               Email Accounts
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">Unlimited</span>{" "}
               Sub Domains
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">Unlimited</span>{" "}
                Mysql Database
              </li>
            </ul>
            
            <div className="flex justify-center items-center  mt-8 ">
              <button className="rounded-lg h-[45px] text-center border-[2px] border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-[white] w-[160px] font-bold text-md">
                Get Started
              </button>
            </div>
          </div>

          <div className="w-[280px] h-[560px] bg-white  rounded-md border border-red-700">
            <div className="w-[280px] text-center rounded-t-lg m-auto overflow-hidden h-[150px]">
              <p className=" font-bold text-[white] h-[60px] rounded-t-lg bg-[#00AEEF]  text-xl">Traffic Plan</p>
              <div className="flex justify-center items-center">
                <img
                  src={ban}
                  alt=""
                  className="h-[80px] border rounded-full mt-1 bg-gray-100  w-[80px]"
                />
              </div>
            </div>
            <p className="text-center font-semibold  text-4xl text-[#00AEEF]">
             521 ₹
            </p>
            <p className=" text-sm text-center  font-semibold"> Monthly</p>

            <ul className=" tracking-widest ml-2  ">
              <li className="pt-8">
                <span className="bg-[#00AEEF] rounded-full  ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                Unlimited Website{" "}
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full  ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">{ulfour}</span>
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">20 GB</span>{" "}
                Storage
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">Unlimited </span>{" "}
                Bandwidth
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>{" "}
                <span className="font-semibold text-gray-600 ml-1">Unlimited</span>{" "}
               Email Accounts
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">Unlimited</span>{" "}
               Sub Domains
              </li>
              <li className="pt-2">
                <span className="bg-[#00AEEF] rounded-full ">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span className="font-semibold text-gray-600 ml-2">Unlimited</span>{" "}
                Mysql Database
              </li>
            </ul>
            
            <div className="flex justify-center items-center  mt-8 ">
              <button className="rounded-lg h-[45px] text-center border-[2px] border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-[white] w-[160px] font-bold text-md">
                Get Started
              </button>
            </div>
          </div>
        </div> */}

        <div className="overflow-x-auto mt-8">
          <table className="min-w-full text-left  ">
            <thead className="text-md font-bold  h-[60px] text-[#f8f9fa] bg-[#00AEEF] ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Dedicated Processors
                </th>
                <th scope="col" className="px-6 py-3">
                  Clock
                </th>
                <th scope="col" className="px-6 py-3">
                  RAM
                </th>
                <th scope="col" className="px-6 py-3">
                  Storage
                </th>
                <th scope="col" className="px-6 py-3">
                  Bandwidth
                </th>
                <th scope="col" className="px-6 py-3">
                  IP's
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Availability
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data.map((value) => (
                <>
                  <tr className=" fourt:bg-red hover:bg-slate-200 odd:bg-white even:bg-gray-100  bg-gray-100   text-[#212529]  font-sans text-md">
                    <td className="px-4 py-4 ">{value.Dt}</td>

                    <td className="px-4 py-4">{value.Cl}</td>
                    <td className="px-4 py-4">{value.Ram}</td>
                    <td className="px-4 py-4">{value.Store}</td>
                    <td className="px-4 py-4">{value.Band}</td>
                    <td className="px-4 py-4">{value.Ip}</td>
                    <td className="px-4 py-4">{value.Price}</td>
                    <td className="px-4 py-4">
                      <button className="bg-[#00AEEF] text-[#f8f9fa] rounded-full h-[30px]   w-[130px]">
                        Configure Now
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="font-serif bg-[#e2efff]">
        <hr className="text-black" />
        <div className="mt-36">
          <div className=" w-[80%] flex  flex-col md:flex-row  m-auto gap-5">
            <div className="w-[60%]">
          <p className="text-[#096d72]  text-xl font-bold">
              Dedicated Server Hosting – Affordable Performance for Your Website
            </p>

            <p className="mt-6 font-sans text-[#707070]">
              Whether you’re just starting out with your business’s website or
              looking for ways to increase your sales online, you must have come
              across the advice of choosing a dedicated server as a web hosting
              solution. There are multiple options in the market that can offer
              reliable performance. But if you want the best and affordable
              performance for your website, it’s worth considering all the
              options including what dedicated server hosting can offer.
            </p>
            </div>
            <div className="w-[40%]">
              <img src={flight} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="w-[80%] flex  flex-col md:flex-row  m-auto gap-5">
            <div className="w-[40%]">
              <img src={ban1} alt="" />
            </div>
            <div className="w-[60%]">
              <p className="text-[#096d72] text-xl font-bold">
              The Main Dedicated Server Hosting Features:
            </p>

            <ul className="ml-[20px] font-sans mt-3 text-[#707070]">
              <li className="mt-1 ">
                <i className="fa-solid fa-check  mr-4 rounded-xl"></i>
                Though Dedicated server hosting is a more expensive option than
                other types of web hosting, it can offer an amazing and
                affordable performance for your website.
              </li>
              <li className="mt-1">
                <i className="fa-solid fa-check mr-4 rounded-xl"></i>
                You can customize the server to your needs. This means you can
                optimize your website’s performance to ensure fast load times.
              </li>
              <li className="mt-1">
                <i className="fa-solid fa-check  mr-4 rounded-xl"></i>
                It offers high levels of security as you won’t be sharing the
                server with other users. Thus, getting you full control over the
                security measures.
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36 bg-[#e2efff]">
        <div className="text-center">
          <p className=" text-[#096d72] font-serif">Build For Speed</p>
          <p className="text-3xl tracking-wide leading-[42px] font-bold font-serif mt-2">
            Hosting Features
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-20">
          <div className="max-w-sm text-center rounded-md overflow-hidden shadow-[2px_2px_10px_0px_rgba(0,0,0,0.3)]  h-[150px] md:w-[200px] w-[250px]">
            <i class="bi bi-alarm text-7xl text-red-400"></i>
            <p className="mt-6 font-medium text-[#1A1C26]">
              Instant Activation
            </p>
          </div>
          <div className="max-w-sm text-center rounded overflow-hidden shadow-[2px_2px_10px_0px_rgba(0,0,0,0.3)]  h-[150px] md:w-[200px] w-[250px]">
            <i class="bi bi-person text-7xl text-red-400"></i>
            <p className="mt-6 font-medium text-[#1A1C26]">
              Instant Activation
            </p>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-[2px_2px_10px_0px_rgba(0,0,0,0.3)] h-[150px] md:w-[200px] text-center w-[250px]">
            <i class="bi bi-arrow-clockwise text-7xl text-red-400"></i>
            <p className="mt-6 font-medium text-[#1A1C26]">99.9% Uptime</p>
          </div>
          <div className="max-w-sm text-center rounded-md  overflow-hidden shadow-[2px_2px_10px_0px_rgba(0,0,0,0.3)] h-[150px] md:w-[200px] w-[250px]">
            <i class="bi bi-cloud-arrow-up text-7xl text-red-400"></i>
            <p className="mt-6 font-medium text-[#1A1C26]">Cloud Powered</p>
          </div>
          <div className="max-w-sm text-center rounded-md  overflow-hidden shadow-[2px_2px_10px_0px_rgba(0,0,0,0.3)] h-[150px] md:w-[200px] w-[250px]">
            <i class="bi bi-stack text-7xl text-red-400"></i>
            <p className="mt-6 font-medium text-[#1A1C26]">Cloud Powered</p>
          </div>
        </div>
      </div>

      <div className="mt-[100px] bg-[#ffffff] w-[100%]">
        <Sliderui />
      </div>

      <div>
        <div className="w-full h-[280px] text-center md:h-[150px] flex md:flex-row flex-col justify-center items-center   bg-[#100F28] text-[#f8f9fa] md:gap-40 ">
          <div className="mt-3 md:mt-0">
            <p className="text-3xl mb-2 font-bold">15425</p>
            <p> Website Powered</p>
          </div>

          <div className="mt-3 md:mt-0">
            <p className="text-3xl mb-1 font-bold">237</p>
            <p>Clients Supported</p>
          </div>

          <div className="mt-3 md:mt-0">
            <p className="text-3xl mb-1 font-bold">11</p>
            <p>Awards Winning</p>
          </div>

          <div className="mt-3 md:mt-0">
            <p className="text-3xl mb-1 font-bold">4</p>
            <p>Years Experience</p>
          </div>
        </div>
      </div>

      <div className="mt-6 mb-6">
        <FAQ />
      </div>
    </div>
  );
};
export default Indiamserver;
