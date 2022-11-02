import React, { useState } from "react";
import PortfolioSingle from "../components/PortfolioSingle";
import Img1 from "../img/portfolio/img1.png";
import Img2 from "../img/portfolio/img2.png";
import Img3 from "../img/portfolio/img3.png";
import Img4 from "../img/portfolio/img4.png";
import Img5 from "../img/portfolio/img5.png";
import Img6 from "../img/portfolio/img6.png";
import Img7 from "../img/portfolio/img7.png";
import Img8 from "../img/portfolio/img8.png";
import Img9 from "../img/portfolio/img9.png";
import Img10 from "../img/portfolio/img10.png";
import Img11 from "../img/portfolio/img11.png";
import Img12 from "../img/portfolio/img12.png";
import Img13 from "../img/portfolio/img13.png";
import Img14 from "../img/portfolio/img14.png";
import Img15 from "../img/portfolio/img15.png";
import Img16 from "../img/portfolio/img16.png";

const Portfolio = () => {
  const [tab, setTab] = useState(1);

  const ClickTab = (index) => {
    setTab(index);
  };
  return (
    <section className="w-full lg:h-full min-h-screen xl:min-h-screen lg:px-11 md:px-8 py-10 md:py-0">
      <div className="flex flex-col h-full md:h-full md:py-12 justify-center items-start">
        <h2 className="text-4xl mb-6 flex items-center uppercase font-bold text-gray-700">
          <p className="border-b-[2px] mr-2 border-b-[#6c5ce7]">recent</p>
          <p className="text-[#6c5ce7] animate-pulse">work</p>
        </h2>

        <div className="flex gap-5 items-center flex-wrap">
          <button
            onClick={() => ClickTab(1)}
            className={
              tab === 1
                ? "uppercase bg-[#6c5ce7] border-2 border-[#6c5ce7] transition-all ease-linear text-white text-sm px-5 rounded-sm py-2 hover:border-2 hover:border-[#6c5ce7] md:hover:bg-transparent font-medium md:hover:text-[#6c5ce7]"
                : "uppercase hover:bg-[#6c5ce7] hover:text-white transition-all ease-linear text-sm px-5 rounded-sm py-2 font-medium border-2 border-[#6c5ce7] bg-transparent text-[#6c5ce7]"
            }
          >
            all
          </button>
          <button
            onClick={() => ClickTab(2)}
            className={
              tab === 2
                ? "uppercase bg-[#6c5ce7] border-2 border-[#6c5ce7] transition-all ease-linear text-white text-sm px-5 rounded-sm py-2 hover:border-2 hover:border-[#6c5ce7] md:hover:bg-transparent font-medium md:hover:text-[#6c5ce7]"
                : "uppercase hover:bg-[#6c5ce7] hover:text-white transition-all ease-linear text-sm px-5 rounded-sm py-2 font-medium border-2 border-[#6c5ce7] bg-transparent text-[#6c5ce7]"
            }
          >
            react js
          </button>

          <button
            onClick={() => ClickTab(3)}
            className={
              tab === 3
                ? "uppercase bg-[#6c5ce7] border-2 border-[#6c5ce7] transition-all ease-linear text-white text-sm px-5 rounded-sm py-2 hover:border-2 hover:border-[#6c5ce7] md:hover:bg-transparent font-medium md:hover:text-[#6c5ce7]"
                : "uppercase hover:bg-[#6c5ce7] hover:text-white transition-all ease-linear text-sm px-5 rounded-sm py-2 font-medium border-2 border-[#6c5ce7] bg-transparent text-[#6c5ce7]"
            }
          >
            next js
          </button>

          <button
            onClick={() => ClickTab(4)}
            className={
              tab === 4
                ? "uppercase bg-[#6c5ce7] border-2 border-[#6c5ce7] transition-all ease-linear text-white text-sm px-5 rounded-sm py-2 hover:border-2 hover:border-[#6c5ce7] md:hover:bg-transparent font-medium md:hover:text-[#6c5ce7]"
                : "uppercase hover:bg-[#6c5ce7] hover:text-white transition-all ease-linear text-sm px-5 rounded-sm py-2 font-medium border-2 border-[#6c5ce7] bg-transparent text-[#6c5ce7]"
            }
          >
            full stack
          </button>
        </div>

        {/* all */}

        <div
          className={
            tab === 1
              ? "flex md:justify-between lg:justify-between  items-center justify-center flex-wrap gap-6 lg:gap-y-[30px] md:gap-5 w-full mt-12"
              : "hidden"
          }
        >
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[47%] lg:w-[31%] sm:w-[48%] sm:h-[200px] md:h-[25vh] lg:h-[35vh]">
            <PortfolioSingle
              Img={Img9}
              Links="https://faisal-ahmed100.github.io/my-protfolio-site/?fbclid=IwAR2_cDB3KFDmEmqgt3w2dJhI2nLzPx5KMNHIl5T_YFI0uAWg7sWWw7eU0V4"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[47%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px] ">
            <PortfolioSingle
              Img={Img2}
              Links="https://faisal-nft-project.netlify.app"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[47%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img4}
              Links="https://faisal123-react-app.netlify.app"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[47%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img3}
              Links="https://faisal-car-landing-page-bootstrap-5.netlify.app"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[47%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img5}
              Links="https://faisal-nextjs-app.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img6}
              Links="https://faisal-full-ecomarce.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img7}
              Links="https://react-admin-dashboard838987.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img8}
              Links="https://getwork100.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img1}
              Links="https://faisal-tailwind-css-site.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img10}
              Links="https://reactwebsiteclone.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img11}
              Links="https://resturentapp.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img12}
              Links="https://myfastreact-app.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img13}
              Links="https://nifty-faisal-fa0857.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img14}
              Links="https://faisalpsdwordfile.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img15}
              Links="https://iconference-react-app-by-faisal.vercel.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img16}
              Links="https://react-door-handle-design.vercel.app/"
            />
          </div>
        </div>

        {/* React js */}
        <div
          className={
            tab === 2
              ? "flex md:justify-between lg:justify-between  items-center justify-center flex-wrap gap-6 lg:gap-y-[30px] md:gap-5 w-full mt-12"
              : "hidden"
          }
        >
         <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img9}
              Links="https://faisal-ahmed100.github.io/my-protfolio-site/?fbclid=IwAR2_cDB3KFDmEmqgt3w2dJhI2nLzPx5KMNHIl5T_YFI0uAWg7sWWw7eU0V4"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img2}
              Links="https://faisal-nft-project.netlify.app"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img4}
              Links="https://faisal123-react-app.netlify.app"
            />
          </div>
          
         
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img6}
              Links="https://faisal-full-ecomarce.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img7}
              Links="https://react-admin-dashboard838987.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img8}
              Links="https://getwork100.netlify.app/"
            />
          </div>
         
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img10}
              Links="https://reactwebsiteclone.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img11}
              Links="https://resturentapp.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img12}
              Links="https://myfastreact-app.netlify.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img13}
              Links="https://nifty-faisal-fa0857.netlify.app/"
            />
          </div>
          
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img15}
              Links="https://iconference-react-app-by-faisal.vercel.app/"
            />
          </div>
          <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img16}
              Links="https://react-door-handle-design.vercel.app/"
            />
          </div>
        </div>

        {/* next js */}
        <div
          className={
            tab === 3
              ? "flex md:justify-between lg:justify-between  items-center justify-center flex-wrap gap-6 lg:gap-y-[30px] md:gap-5 w-full mt-12"
              : "hidden"
          }
        >
           <div className="flex flex-col box relative group shadow group-hover:shadow-sm md:w-[%] lg:w-[31%] md:h-[25vh] lg:h-[35vh] sm:w-[48%] sm:h-[200px]">
            <PortfolioSingle
              Img={Img5}
              Links="https://faisal-nextjs-app.netlify.app/"
            />
          </div>
        </div>

        {/* full stack */}
        <div
          className={
            tab === 4
              ? "flex md:justify-between lg:justify-start  items-center justify-center flex-wrap gap-6 md:gap-5 w-full mt-12"
              : "hidden"
          }
        >
          <h1 className="text-sm text-gray-600">Coming soon</h1>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
