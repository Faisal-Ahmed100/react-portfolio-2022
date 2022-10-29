import React from "react";
import Skillprogressbar from "../components/Skillprogressbar";

const Skills = () => {
  return (
    <section className="w-full lg:h-full xl:min-h-screen lg:px-11 md:px-8 py-10 md:py-0">
      <div className="flex flex-col h-full md:h-full md:py-12 justify-center items-start">
        <h2 className="text-4xl mb-6 flex items-center uppercase font-bold text-gray-700">
          <p className="border-b-[2px] mr-2 border-b-[#6c5ce7]">my</p>
          <p className="text-[#6c5ce7] animate-pulse">Skills</p>
        </h2>
        <h3 className="flex gap-2 items-center mb-2">
          <i className="fa-solid fa-award text-md text-gray-500"></i>

          <span className="text-md text-gray-700 font-medium">
            PERSONAL SKILL
          </span>
        </h3>
        <p className="text-gray-600 capitalize">
          Hi there! I am Faisal Ahmed from BD. I am a professional front-end Web
          Developer since 2018. I have 4 years of experience in Responsive
          Design which is useful for supporting your site on any device.I can
          create any kind of Website as static or dynamic. I can create any type
          of html, css, tailnd css, bootstrap, javaScript, react js, next js,
          material ui etc and Responsive Website.{" "}
          <a
            className="text-[#6c5ce7] hover:text-gray-400"
            href="https://www.fiverr.com/coderfaisal100"
            target="__blank"
          >
            Lern more
          </a>
        </p>

        <div className="grid lg:grid-cols-2 w-full grid-cols-1 lg:gap-10 mt-8">
          <div className="flex flex-col">
            <Skillprogressbar done="98" text="HTML" />
            <Skillprogressbar done="95" text="JAVASCRIPT" />
            <Skillprogressbar done="97" text="React js" />
            <Skillprogressbar done="95" text="Next js" />
            <Skillprogressbar done="92" text="Redux" />
          </div>

          <div className="flex flex-col">
            <Skillprogressbar done="97" text="CSS" />
            <Skillprogressbar done="96" text="BOOTSTRAP" />
            <Skillprogressbar done="95" text="Tailwind css" />
            <Skillprogressbar done="94" text="material ui" />
            <Skillprogressbar done="85" text="Node js" />
          </div>
        </div>

        <div className="sm:gap-3 flex flex-col justify-start items-start lg:mb-0 mt-4">
          <h3 className="flex gap-2 items-center">
            <i className="fa-solid fa-message text-sm text-gray-500"></i>
            <span className="text-md text-gray-700 font-medium">
              COMMUNICATION SKILL
            </span>
          </h3>
          <p className="text-gray-600">
            English is my favorite language. I love to speak English. And in
            English I can talk very well with everyone. And Bengali is my mother
            tongue. And besides Bengali I can speak Urdu and Hindi very well.
            You can talk to me in all languages if you want. So I like to speak
            in all languages.
          </p>

          <div className="flex lg:justify-start items-center justify-between flex-wrap gap-10 xl:gap-24 lg:mt-4 mt-6 w-full">
            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-md font-medium uppercase text-gray-700">
                bangla
              </h3>
              <div className="flex gap-2">
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-md font-medium uppercase text-gray-700">
                English
              </h3>
              <div className="flex gap-2">
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star-half-stroke text-[#6c5ce7]"></i>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-md font-medium uppercase text-gray-700">
                hindi
              </h3>
              <div className="flex gap-2">
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star-half-stroke text-[#6c5ce7]"></i>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <h3 className="text-md font-medium uppercase text-gray-700">
                urdu
              </h3>
              <div className="flex gap-2">
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star text-[#6c5ce7]"></i>
                <i className="fa-solid fa-star-half-stroke text-[#6c5ce7]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
