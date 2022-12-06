import React, { useState, useContext} from "react";
import { navLinks } from "./Data";
import { Link } from 'react-router-dom';
import {SidebarContext} from "./contexts/SidebarContext"
// import UserImg from "../assets/userImage.png";
// import Logo from "../assets/logo-sm.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isOpen, setIsOpen} = useContext(SidebarContext);

  return (
    <nav
      className={`w-full left-0 top-0 z-[999] fixed bg-gray-800 shadow-lg text-white}`}
    >
      <div className="flex items-center justify-between">
        {/* toggle icon */}
        <div onClick={() => setOpen(!open)} className={` ${open ? "text-gray-900" : "text-gray-100"} md:hidden cursor-pointer text-3xl  m-5`}>
          <ion-icon name="menu" color="#228e01" size="large"></ion-icon>
        </div>
        {/* logo or name */}
        <div className="mx-7">
        {/* <img className="w-16" src={Logo} alt="" /> */}
          <h4
            className={`text-xl md:text-4xl uppercase font-bold  ${
              open ? "text-green-500" : "text-green-700"
            } text-white`}
          >
            Fo<span className="text-green-500">odie</span>
          </h4>
        </div>
          <div className="text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-ful">
            <ul className="flex items-center gap-1 py-4">
              {navLinks?.map((menu, i) => (
                <li key={i} className="px-6 text-green-500 hover:text-green-600 text-2xl">
                  
                  <Link to={menu?.link}>{menu?.name}</Link>
                </li>
              ))}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center items-center p-2 text-sm text-green-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 :bg-gray-700 :text-white"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shopping-cart"
                        className="w-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                    >
                        <path
                            fill="currentColor"
                            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                        ></path>
                    </svg>
                </button>
            </ul>
          </div>
          {/* cart toggle*/}
          <div   onClick={() => setIsOpen(!isOpen)}
                className="md:hidden inline-flex justify-center items-center p-2 text-sm text-white rounded cursor-pointer hover:text-green-400 mr-5"
            >
              <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="shopping-cart"
                  className="w-6"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
              >
                  <path
                      fill="currentColor"
                      d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  ></path>
              </svg>
          </div>
        <div   className={`text-white fixed overflow-scroll md:hidden w-2/3 md:w-2/6  min-h-screen px-7 py-2 font-medium bg-gray-50 top-0 duration-300 ${
            open ? "left-0" : "left-[-100%]"}`}>
          <ul className="flex flex-col justify-around gap-10 py-2 text-lg">
            <div
              onClick={() => setOpen(!open)}
              className={` ${
                open ? "text-gray-900" : "text-gray-100"
              } cursor-pointer text-3xl flex items-center justify-end`}
            >
              <ion-icon
                name="close-outline"
                color="#228e01"
                size="large"
              ></ion-icon>
            </div>
            {/* <div className="mt-5">
              <div className="flex items-center justify-center">
                <img src={UserImg} alt="" className="w-14 h-14 rounded-full" />
                <div className="p-1 text-green-500">
                  <h5 className="text-lg font-bold">John Doe</h5>
                  <p className="text-sm">Bal:&#8358; 18,420.81</p>
                </div>
              </div>
              <hr className="bg-black" />
            </div> */}
            <div className="mt-5 space-y-3">
              {navLinks.map((menu, i) => (
                <li
                  onClick={() => setOpen(false)}
                  key={i}
                  className="px-6 text-green-600 rounded-xl hover:bg-green-500 hover:text-white"
                >
                  <a
                    href={menu?.link}
                    className="flex p-3 place-items-center gap-3 space-x-2"
                  >
                    <ion-icon
                      name={menu.icon}
                      size="large"
                      className="m-2"
                    ></ion-icon>
                    <p>{menu?.name}</p>
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
