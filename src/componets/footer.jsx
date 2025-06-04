import img from "../imge/uptime.png";
import img1 from "../imge/global1-removebg-preview.png";
import Slider from "react-slick";
const Infoslide = () => {
  return (
    <div>
      <div className="w-[90%] m-auto ">
        <div className="md:w-[80%]   overflow-hidden  m-9  border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
          <p className="h-6 w-12 rounded-r-sm  bg-red-500"></p>
          <div className="p-5 ">
            <p className="mb-3 font-normal text-black dark:text-gray-400">
              Great support, like i have never seen befor Thanks tothe support
              team, they are very helpfull This company provide customers great
              solution, that makes them best.
            </p>
            <div className="">
              <p className="mt-5 text-2xl flex justify-center  font- tracking-tight mb-6  text-gray-900 dark:text-white">
                <img src={img} className="h-[60px] w-[100px]" alt="" />
              </p>
            </div>
            <div>
              <p className="mt-8 text-center">Go Find A Pro </p>
            </div>
            <p className="mt-7">
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[40%]  ">
        <div className="md:w-[80%] sm:w-[70%] h-[400px] w-[90%] overflow-hidden  m-9  border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
          <p className="h-6 w-12 rounded-r-sm  bg-red-500"></p>
          <div className="p-5 ">
            <p className="mb-3 font-normal text-black dark:text-gray-400">
              Site Work is an excellent web hosting service that's simple to use
              and offer an array of useful plans for consumers and small
              businesses.
            </p>
            <div className="flex justify-center">
              <p className="mt-0 text-xl  font- tracking-tight mb-8 text-gray-900 dark:text-white">
                <img src={img} className="h-[60px] w-[100px]" alt="" />
                
              </p>
            </div>
             <div>
              <p className="mt-8 text-center">KD Software</p>
            </div>
            <p className="mt-7">
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[40%]  ">
        <div className="md:w-[80%] sm:w-[70%] h-[400px] overflow-hidden  m-9  border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
          <p className="h-6 w-12 rounded-r-sm  bg-red-500"></p>
          <div className="p-5 ">
            <p className="mb-3 font-normal h-[80px] text-black dark:text-gray-400">
             They offer a lot value based on their skills talent and rate .
            </p>
            <div className="">
              <p className="mt-5 text-2xl flex justify-center  font- tracking-tight  mb-8  text-gray-900 dark:text-white">
                <img src={img} className="h-[60px] w-[100px]" alt="" />
              </p>
            </div>
            <div>
              <p className="mt-8 text-center">Tech Well Solution</p>
            </div>
            <p className="mt-10">
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Infoslide;
