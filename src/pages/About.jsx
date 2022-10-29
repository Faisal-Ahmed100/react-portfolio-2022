import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-full lg:h-full xl:min-h-screen lg:px-11 md:px-8 py-10 md:py-0">
      <div className="flex flex-col h-full md:h-full md:py-10 justify-center items-start">
        <h2 className="text-4xl mb-6 flex uppercase items-center font-bold text-gray-700">
          <p className="border-b-[2px] mr-2 border-b-[#6c5ce7]">ABOUT</p>
          <p className="text-[#6c5ce7] animate-pulse">ME</p>
        </h2>
        <h3 className="flex gap-2 items-center mb-2">
          <i className="fa-solid fa-user text-sm text-gray-500"></i>
          <span className="text-md text-gray-700 font-medium">
            PERSONAL INFO
          </span>
        </h3>
        <p className="text-gray-600 capitalize">
          Hi there! I am Faisal Ahmed from
          <span className="font-medium">Bangladesh</span> . I am a professional
          front-end Web Developer since 2018. I have 4 years of experience in
          Responsive Design which is useful for supporting your site on any
          device. Front-end Developer is not only my Profession, it is also my
          hobby and my Passion. <a className="text-[#6c5ce7] hover:text-gray-400" href="https://www.fiverr.com/coderfaisal100" target='__blank'>Lern more</a>
        </p>
        <div className="grid lg:grid-cols-2 w-full grid-cols-1 gap-5 mt-8">
          <div className="flex flex-col gap-3">
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 mr-10 font-medium">First Name</h3>
              <p className="text-gray-600">: Faisal</p>
            </div>
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 mr-10 font-medium">Last Name</h3>
              <p className="text-gray-600">: ahmad</p>
            </div>
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 mr-[93px] font-medium">age</h3>
              <p className="text-gray-600">: 18 Years</p>
            </div>
            <div className="flex capitalize text-md">
              <h3 className="text-gray-800 font-medium mr-6">Date of birth</h3>
              <p className="text-gray-600">: 30 october 2003</p>
            </div>
            <div className="flex capitalize text-md">
              <h3 className="text-gray-800 mr-[2.4rem] font-medium">
                Nationality
              </h3>
              <p className="text-gray-600">: Bangladesh</p>
            </div>
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 mr-12 font-medium">Freelance</h3>
              <p className="text-gray-600">: Available</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 lg:mr-10 mr-[77px] font-medium">
                Phone
              </h3>
              <p className="text-gray-600">: 01729-462003</p>
            </div>
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 lg:mr-[1.6rem] mr-[62px]  font-medium">
                Address
              </h3>
              <p className="text-gray-600">: Rajshahi, Bangladesh</p>
            </div>
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 lg:mr-[3rem] font-medium mr-[85px] emailName">
                email
              </h3>
              <p className="text-gray-600">: princepavel100@gmail.com</p>
            </div>
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 lg:mr-[12px] font-medium mr-[49px] ">
              Language 
              </h3>
              <p className="text-gray-600">: English-Bangali</p>
            </div>
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 lg:mr-[9px] font-medium mr-[47px] ">
                WhatsApp
              </h3>
              <p className="text-gray-600">: 01729-462003</p>
            </div>
            <div className="flex  capitalize text-md">
              <h3 className="text-gray-800 lg:mr-[39px] font-medium mr-[78px] ">
                github
              </h3>
              <p className="text-gray-600">: Faisal-Ahmed100
</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start flex-row gap-4 sm:gap-5  lg:mb-0 mt-12">
          <Link to="/">
            <button className="uppercase bg-[#6c5ce7] border-2 border-[#6c5ce7] transition-all ease-linear text-white text-sm px-5 rounded-sm py-3 hover:border-2 hover:border-[#6c5ce7] hover:bg-transparent font-medium hover:text-[#6c5ce7]">
              download resume
            </button>
          </Link>

          
        </div>
      </div>
    </section>
  );
};

export default About;
