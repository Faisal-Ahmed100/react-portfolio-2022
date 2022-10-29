import React from "react";
import EducationImg from "../img/education.png";

const Education = () => {
  return (
    <section className="w-full lg:h-full xl:min-h-screen lg:px-11 md:px-8 py-10 md:py-0">
      <div className="flex flex-col h-full md:h-full md:py-12 justify-center items-start">
        <h2 className="text-4xl mb-6 flex items-center uppercase font-bold text-gray-700">
          <p className="border-b-[2px] mr-2 border-b-[#6c5ce7]">my</p>
          <p className="text-[#6c5ce7] animate-pulse">Education</p>
        </h2>
        <h3 className="flex gap-2 items-center mb-2">
          <i className="fa-solid fa-graduation-cap text-sm text-gray-500"></i>

          <span className="text-md text-gray-700 font-medium">
            EDUCATIONAL BACKGROUND
          </span>
        </h3>
        <p className="text-gray-600 capitalize">
        I{"’"}m currently engineering in computer science at TMSS TMSS Technical Institute. I knew that I wanted to go into engineering from day one, so I chose a college with a strong study and a broad alumni network. In fact, I originally heard about this study from an TMSS college students in my computer department. Because I believe that great engineers also have great communication skills, I decided to my engineering skills, too, by minoring in bangali. My teachers has taught me the computer science fundamentals, while my teachers has taught me the soft skills necessary to succeed.
        </p>

        <div className="flex justify-between items-center flex-col lg:flex-row lg:gap-20 gap-10 md:gap-14 w-full lg:mt-10 md:mt-8 mt-8 ">
          <div className="border-l border-gray-400">
            <div className="flex flex-col">
              <div className="pl-4 md:pl-6 relative group">
                <h2 className="text-md uppercase text-gray-700 font-medium">
                  ENGINEERING DIPLOMA -{" "}
                  <span className="uppercase text-md font-normal">
                    Tmss polytechnic institute{" "}
                  </span>{" "}
                </h2>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-calendar-days text-sm text-gray-500"></i>
                  <div className="flex items-center text-gray-600 text-sm">
                    <p className="text-sm text-gray-600 mr-1">2019 </p>-
                    <p className="text-sm text-gray-600 ml-1"> 2022</p>-
                    <p className="text-sm text-gray-600 ml-1"> Present</p>
                  </div>
                </div>
                <p className="my-4 text-gray-600 capitalize">
                TMSS Polytechnic Institute located in Natore District of Rajshahi Division of Bangladesh. Currently I am studying in this college and doing freelancing along with studies. I want to study computer science in computer department in this college.
                </p>
                <div className="w-full h-1 border-b border-gray-400 my-6"></div>
                <div className="absolute top-0 -left-[7px] w-[14px] h-[14px] bg-slate-400 transition-all rounded-full group-hover:bg-[#6c5ce7]"></div>
              </div>
              <div className="pl-4 md:pl-6 relative group">
                <h2 className="text-md uppercase text-gray-700 font-medium">
                  high school -{" "}
                  <span className="uppercase text-md font-normal">s.s.c</span>{" "}
                </h2>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-calendar-days text-sm text-gray-500"></i>
                  <div className="flex items-center text-gray-600 text-sm">
                    <p className="text-sm text-gray-600 mr-1">2015 </p>-
                    <p className="text-sm text-gray-600 ml-1"> 2019</p>
                  </div>
                </div>
                <p className="my-4 text-gray-600 capitalize">
                I passed ssc from puthia dakhil madrasa. and now want to study computer science in tmss college. i studied in putia dakhil madrasa from 2015 to 2019.
                </p>
                <div className="w-full h-1 border-b border-gray-400 my-6"></div>
                <div className="absolute top-0 -left-[7px] w-[14px] h-[14px] bg-slate-400 transition-all rounded-full group-hover:bg-[#6c5ce7]"></div>
              </div>
              <div className="pl-4 md:pl-6 relative group">
                <h2 className="text-md uppercase text-gray-700 font-medium">
                  primary school -{" "}
                  <span className="uppercase text-md font-normal">p.s.c</span>{" "}
                </h2>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-calendar-days text-sm text-gray-500"></i>
                  <div className="flex items-center text-gray-600 text-sm">
                    <p className="text-sm text-gray-600 mr-1">2010 </p>-
                    <p className="text-sm text-gray-600 ml-1"> 2015</p>
                  </div>
                </div>
                <p className="my-4 text-gray-600 capitalize">
                I studied from gandagohaly Primary School and passed class five. and my childhood was very good. From 2010 to 2015 I studied up to class five. I did very well in studies and my previous results were very good.
                </p>
                <div className="absolute top-0 -left-[7px] w-[14px] h-[14px] bg-slate-400 transition-all rounded-full group-hover:bg-[#6c5ce7]"></div>
              </div>
            </div>
          </div>

          {/* second */}

          <div className="lg:flex flex-col hidden ">
            <img
              className="w-[800px] object-cover "
              src={EducationImg}
              alt="education pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
