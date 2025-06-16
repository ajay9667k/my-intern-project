import host from "../imge/host.gif";
import Sliderui from "./mand";
import FAQ from "./singn";
const data=[
    {Dt:"Intel Core i5-3470 4 Cores",Cl:"3.20Ghz",Ram:"8 GB DDR3",Store:"240 GB SSD",Band:"2000 GB",Ip:"1 IP's",Price:"₹ 2999/m",Button:"Configure Now"},

    {Dt:"Intel Core i7-3770 4 Cores",Cl:"3.40Ghz",Ram:"8 GB DDR3",Store:"480 GB SSD",Band:"2000 GB",Ip:"1 IP's",Price:"₹ 3599/m",Button:"Configure Now"},
    
    {Dt:"Intel Xeon 3430 4 Cores",Cl:"2.40Ghz",Ram:"8 GB DDR3",Store:"480 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 3999/m",Button:"Configure Now"},

    {Dt:"Intel Xeon 1231_v3 4 Cores",Cl:"3.20Ghz",Ram:"16 GB DDR3",Store:"480 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 4999/m",Button:"Configure Now"},

    {Dt:"Intel Xeon E5-2620 6 Cores",Cl:"2.5Ghz",Ram:"32 GB DDR3",Store:"480 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 5999/m",Button:"Configure Now"},

    {Dt:"Intel Xeon E5-2620 6 Cores",Cl:"2.5Ghz",Ram:"64 GB DDR3",Store:"480 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 6999/m",Button:"Configure Now"},

    {Dt:"Intel Xeon E5-2650 8 Cores",Cl:"2.60Ghz",Ram:"64 GB DDR3",Store:"480 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 7999/m",Button:"Configure Now"},

    {Dt:"Intel Xeon E5-2620 12 Corse",Cl:"2.60Ghz",Ram:"64 GB DDR3",Store:"480 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 8999/m",Button:"Configure Now"},

    {Dt:"Intel Xeon E5-2670 16 Corse",Cl:"2.60Ghz",Ram:"128 GB DDR3",Store:"960 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 13999/m",Button:"Configure Now"},

    {Dt:"Dual Xeon E5-2670 16 Cores",Cl:"2.60Ghz",Ram:"256 GB DDR3",Store:"960 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 17999/m",Button:"Configure Now"},

    {Dt:"Dual E5-2683v4 24 Cores",Cl:"3.0GHz Turbo",Ram:"128 GB DDR3",Store:"960 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 17999/m",Button:"Configure Now"},

    {Dt:"Dual E5-2683v4 24 Cores",Cl:"3.0GHz Turbo",Ram:"256 GB DDR3",Store:"960 GB SSD",Band:"200 TB",Ip:"1 IP's",Price:"₹ 21999/m",Button:"Configure Now"},

    {Dt:"Xeon E7-4860 4O Cores",Cl:"2.67GHz Turbo",Ram:"256 GB DDR3",Store:"960 GB SSD",Band:"200 TB",Ip:"5 IP's",Price:"₹ 29999/m",Button:"Configure Now"},

]
const Deticatedforner = () => {
  return (
    <div className="bg-[#e2efff]">
      <div className="bg-img2  bg-center  bg-cover bg-no-repeat  w-[100%]   ">
        <div className="justify-center  items-center flex flex-col sm:flex-row bg-opacity-50 font-serif text-center text-[#f8f9fa]   bg-zinc-500 md:h-[550px]  h-[740px] w-full">


          <div className="md:mt-[100px] mt-[130px]  md:h-[300px] w-[70%] md:w-[40%]">
            <p className="sm:text-5xl text-4xl w-[280px]  sm:w-full text-[] mb-6 ml-[25px]  md:text-start">
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
      </div>

      <div className="mt-10 font-serif bg-[#e2efff] mb-36">
        <p className="text-center font-bold text-3xl mb-10">
          India's Best Linux/Windows Dedicated Servers at Affordable Price
        </p>

        <div className="relative overflow-x-auto shadow-md w-[85%] bg-gray-900 m-auto sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
            <thead className="text-xs uppercase h-[60px] text-[#f8f9fa] bg-[#096D72] dark:bg-gray-700 dark:text-gray-400">
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
            <tbody>
                {
                   data.map((value)=>(
                     <>
                 <tr className=" hover:bg-slate-200 bg-gray-100  border-b-[10px] border-t-[10px]    border-[white] text-[#212529]">
                <td className="px-4 py-4 ">{value.Dt}</td>
                <td className="px-4 py-4">{value.Cl}</td>
                <td className="px-4 py-4">{value.Ram}</td>
                <td className="px-4 py-4">{value.Store}</td>
                <td className="px-4 py-4">{value.Band}</td>
                <td className="px-4 py-4">{value.Ip}</td>
                <td className="px-4 py-4">{value.Price}</td>
                <td className="px-4 py-4">
                  <button className="bg-[#2F979F] text-[#f8f9fa] rounded-full h-[30px]   w-[130px]">
                    Configure Now
                  </button>
                </td>
              </tr>
                     </>
                   )) 
                }
              
            </tbody>
          </table>
        </div>
      </div>

      <div className="font-serif bg-[#e2efff]">
        <hr className="text-black" />
        <div className="mt-36">
          <div className=" w-[90%] m-auto">
            <p className="text-[#096d72]  text-xl font-bold">
             Best Linux Dedicated Server Providers in 2023
            </p>

            <p className="mt-6 font-sans text-[#707070]">
             The majority of server providers in the market guarantee cheap web hosting services. They even have pre-built hosting packages that include all the tools you will be needing to expand your company's online presence, such as a free domain name, unlimited storage, feature-rich cPanel, a one-click install among others. Yet, many of them do not specify that these offered resources still have some restrictions. The result is these restrictions lead to the shutdown of your website whenever it suffers a spike in traffic. You must pick the most reliable hosting company if you intend to successfully establish your website in the online world. Herein lies the value of web hosting services like 
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className=" w-[90%] m-auto">
            <p className="text-[#096d72] text-xl font-bold">
              The Main Dedicated Server Hosting Features:
            </p>

             <div className=" font-sans mt-3 text-[#707070]">
                <p>SiteWorx Infotech's team understands that companies want a hosting solution that can meet every demand of their expanding online presence. One of the reasons we prioritize providing the best Linux dedicated hosting services is due to this only. You won't need to be concerned about hosting restrictions with our Linux Dedicated hosting because you will be having total control over your server. Want it better still? We also allow you to customize your hosting plans so that you truly receive the tools required to expand your internet presence and receive the greatest value with our services</p>
            <p className="mt-4">
                Without any additional costs or hidden usage restrictions, our  options are highly affordable. Thus, if you are searching for a reliable and adaptable hosting solution that can meet the demands of your expanding online presence, you can choose SiteWorx’s Linux Dedicated Server hosting.
            </p>
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
            <p className="mt-6 font-medium text-[#1A1C26]">Instant Activation</p>
          </div>
          <div className="max-w-sm text-center rounded overflow-hidden shadow-[2px_2px_10px_0px_rgba(0,0,0,0.3)]  h-[150px] md:w-[200px] w-[250px]">
            <i class="bi bi-person text-7xl text-red-400"></i>
            <p className="mt-6 font-medium text-[#1A1C26]">Instant Activation</p>
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
        <FAQ/>
      </div>
    </div>
  );
};
export default Deticatedforner;
