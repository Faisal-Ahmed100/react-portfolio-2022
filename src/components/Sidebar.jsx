import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../img/img.jpg";

const Sidebar = ({ children }) => {
  const MenuItem = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About me",
    },
    {
      path: "/my-skills",
      name: "Skills",
    },
    {
      path: "/experience",
      name: "Experience",
    },
    {
      path: "/education",
      name: "Education",
    },
    {
      path: "/portfolios",
      name: "Portfolio",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  const MobileItem = [
    {
      path: "/",
      name: "Home",
      icon: "fa-solid fa-house",
      navItemName:"Home"
    },
    {
      path: "/about",
      name: "About me",
      icon: "fa-solid fa-user",
      navItemName:"About"
    },
    {
      path: "/my-skills",
      name: "Skills",
      icon: "fa-solid fa-graduation-cap",
      navItemName:"Skills"
    },
    {
      path: "/experience",
      name: "Experience",
      icon: "fa-solid fa-briefcase",
      navItemName:"Experience"
    },
    {
      path: "/education",
      name: "Education",
      icon: "fa-solid fa-book",
      navItemName:"Education"
    },
    {
      path: "/portfolios",
      name: "Portfolio",
      icon: "fa-solid fa-user",
      navItemName:"Portfolio"
    },
    {
      path: "/contact",
      icon: "fa-solid fa-address-card",
      navItemName:"Contact"
    },
  ];
  return (
    <div className="flex">
      <div className="w-[250px] shadow-md shadow-gray-500 h-screen fixed top-0 -left-[100%] md:left-0 transition-all ease-in-out md:flex flex-col justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              className="h-[180px] rounded-full border-4 border-[#6c5ce7] object-cover"
              src={Img}
              alt="sidebar pic"
            />
          </div>
          <h2 className="text-2xl mb-0 mt-2 font-semibold uppercase text-gray-800">
            Faisal Ahmad
          </h2>
          <p className="text-sm capitalize text-gray-700">
            Web Developer | Designer
          </p>
          <div className="flex items-center gap-1">
            <div className="flex ">
              <i className="fa-solid fa-star text-[12px] text-yellow-500"></i>
              <i className="fa-solid fa-star text-[12px] text-yellow-500"></i>
              <i className="fa-solid fa-star text-[12px] text-yellow-500"></i>
              <i className="fa-solid fa-star text-[12px] text-yellow-500"></i>
              <i className="fa-solid fa-star text-[12px] text-yellow-500"></i>
            </div>
            <p className="text-sm">(1 Review)</p>
          </div>
          <hr />
        </div>

        <div>
          {MenuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex justify-start py-3.5 ml-4 mr-2  transition-all border-b uppercase font-medium text-sm text-gray-500 items-start hover:text-[#6c5ce7] hover:border-b-[#6c5ce7]"
              end
            >
              <div>{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className=" fixed top-0 md:-left-[100%] transition-all ease-linear flex flex-col h-screen bg-[#6c5ce7] w-[50px]">
        {MobileItem.map((item) => {
          return (
            <NavLink to={item.path} className="flex justify-center items-center text-white text-2xl" title={item.navItemName} end>
              <div className="mb-3 mt-3">
                <i className={item.icon}></i>
              </div>
            </NavLink>
          );
        })}


        <h2 className="-rotate-90 w-[264px] h-[250px] text-2xl font-medium flex gap-2"><span className="text-[#921bb6] font-semibold">Hello</span> <span className="text-white text-2xl font-normal">World</span> </h2>
      </div>

      <main className="w-full px-3 md:px-0 md:pl-6 md:ml-[15rem] ml-[3rem]">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
