import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Img from "../img/img.jpg";

const Sidebar = ({ children }) => {
  const [open, setOpen]=useState(false);
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
      navItemName: "Home",
    },
    {
      path: "/about",
      name: "About me",
      icon: "fa-solid fa-user",
      navItemName: "About",
    },
    {
      path: "/my-skills",
      name: "Skills",
      icon: "fa-solid fa-graduation-cap",
      navItemName: "Skills",
    },
    {
      path: "/education",
      name: "Education",
      icon: "fa-solid fa-book",
      navItemName: "Education",
    },
    {
      path: "/portfolios",
      name: "Portfolio",
      icon: "fa-solid fa-user",
      navItemName: "Portfolio",
    },
    {
      path: "/contact",
      name:"Contact",
      icon: "fa-solid fa-address-card",
      navItemName: "Contact",
    },
  ];
  return (
    <div className="flex">
      <div className="w-[250px] shadow-md shadow-gray-500 h-screen fixed top-0 -left-[100%] md:left-0 transition-all ease-in-out md:flex flex-col justify-evenly">
        {/* dasktop view */}
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
              <i className="fa-solid fa-star text-[12px] text-[#6c5ce7]"></i>
              <i className="fa-solid fa-star text-[12px] text-[#6c5ce7]"></i>
              <i className="fa-solid fa-star text-[12px] text-[#6c5ce7]"></i>
              <i className="fa-solid fa-star text-[12px] text-[#6c5ce7]"></i>
              <i className="fa-solid fa-star text-[12px] text-[#6c5ce7]"></i>
            </div>
            <p className="text-sm">(5 Review)</p>
          </div>
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

   
  {/* mobile view  */}
  {
    open ? 
    <div className="fixed top-0 right-5 flex justify-center items-center z-50 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}><i className="fa-solid fa-xmark bg-[#8376e6d3] px-2 text-white text-3xl "></i></div>
     :
     <div className="fixed top-0 right-5 flex justify-center z-50 items-center cursor-pointer md:hidden" onClick={()=>setOpen(!open)}><i className="fa-solid fa-bars bg-[#8376e6d5] px-2 text-white text-3xl "></i></div>
  }
  

  <div className={open ? "fixed top-9 right-0 transition-all ease-linear flex flex-col pb-[15px] bg-[#6c5ce7bb] w-[160px] pt-1 z-50" : "fixed top-9 -right-[100%] transition-all ease-linear flex flex-col h-[55%] bg-[#6c5ce7bb] w-[160px] pt-1 z-50"}>
 

   

        {MobileItem.map((item, index) => {
          return (
            <NavLink
            key={index}
              to={item.path}
              className="flex justify-between text-white ml-3 mr-2"
              title={item.navItemName}
              end
              onClick={()=>setOpen(false)}
            >
              <div className="flex items-center gap-3 py-3 ">
                <i className={item.icon}></i>
                <p>{item.name}</p>
              </div>
            </NavLink>
          );
        })}

       
      </div>
      <main className="w-full px-3 md:px-0 md:pl-6 md:ml-[15rem] ">
        {children}
      </main>
       
    </div>
  );
};

export default Sidebar;
