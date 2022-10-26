import React from "react";
import BannerImg from "../img/banner.png";

const Home = () => {
  
  return (
    <section className="w-full xl:h-screen md:h-screen  flex justify-center items-center">
     
      <div className="flex items-center flex-col md:flex-row gap-5 justify-between w-full md:h-full">
        <div className="flex flex-col md:pl-12 order-2 md:order-1 mt-6 md:mt-10 md:absolute xl:static">
          <h4 className="flex flex-row gap-2 md:text-lg text-normal text-gray-500 font-normal uppercase">
            <span className="md:tracking-[5px]">HI</span>
            <span className="md:tracking-[5px]">THERE!</span>
            <span className="md:tracking-[5px]">I'M</span>
            <strong className="font-semibold text-gray-600 md:tracking-[4px]">
              faisal <span>Ahmad</span>
            </strong>
          </h4>
          <h2 className="sm:text-4xl md:text-4xl text-2xl capitalize font-bold mt-1 text-gray-700 ">
            Creative <span className="text-[#6c5ce7] animate-pulse">web</span> Designer & Developer
          </h2>
          <p className="md:py-6 py-4 text-lg text-gray-600 capitalize">
            I am a <span className="text-[#6c5ce7]">React js</span> and <span className="text-[#6c5ce7]">next js </span> front-end Developer and Designer since 2018. and i have muce more experience in front-end web development. I do my client's projects sincerely.
            
          </p>
          <div className="flex justify-start items-start flex-row gap-5 mb-12 md:mb-0">
            <button className="uppercase bg-[#6c5ce7] border-2 border-[#6c5ce7] transition-all ease-linear text-white text-sm px-5 rounded-sm py-3 hover:border-2 hover:border-[#6c5ce7] hover:bg-white font-medium hover:text-[#6c5ce7]">hire me</button>

            <button className="uppercase hover:bg-[#6c5ce7] hover:text-white transition-all ease-linear text-sm px-5 rounded-sm py-3 font-medium border-2 border-[#6c5ce7] bg-white text-[#6c5ce7]">My portfolio</button>
          </div>
        </div>
      
    <div className="w-full h-[90vh] sm:h-screen -mt-[120px] sm:-mt-30 md:mt-0 order-1 md:order-2">
      <img className="h-full w-full sm:h-full md:w-full object-cover " src={BannerImg} alt="Banner img" />
    </div>
        
      
          
        
      </div>
    </section>
  );
};

export default Home;
