import React, { useState } from "react";
import swiggylogo from "../Images/images (1).png";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import useStore from "./Store";
import { Link } from "react-router-dom";
const Header = ({ headerRef }) => {
  const [toggle, setToggle] = useState(false);

  const { count } = useStore(); // Destructure state and actions
  console.log(count, "cournt");

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    // {
    //   icon: <FaSearch />,
    //   name: " Search",
    // },
    {
      icon: <RiDiscountPercentLine />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <LiaHandsHelpingSolid />,
      name: "Help",
    },
    {
      icon: <BsCart />,
      name: "Cart",
      sup: count,
    },
  ];

  return (
    <>
      {/* Overlay and Side Menu */}
      <div
        ref={headerRef}
        className="black-overlay w-full h-full fixed duration-500 z-50"
        onClick={() => hideSideMenu()}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[300px] sm:w-[400px] bg-white h-full absolute duration-[400ms]"
          style={{ left: toggle ? "0%" : "-100%" }}
        >
          <RxCross1
            className="mx-4 mt-4 cursor-pointer"
            fontSize={25}
            onClick={() => hideSideMenu()}
          />
        </div>
      </div>

      {/* Header */}
      <header className="p-4 shadow-xl">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Logo Section */}
          {/* <div className="w-[50px] sm:w-[100px] flex-shrink-0">
          <img src={swiggylogo} className="w-full" alt="Logo" />
        </div> */}

          {/* Location Section */}
          <div className="flex items-center text-md sm:text-base">
            <span className="text-black underline font-bold">
              {" "}
              Harsol&nbsp;{" "}
            </span>
            Indore, Madhya Pradesh, India
            <IoIosArrowDown
              fontSize={20}
              onClick={() => showSideMenu()}
              className="inline ml-1 cursor-pointer"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-10 text-md sm:text-base font-semibold">
            {/* Search Bar */}
            {/* <div className="relative w-full sm:w-auto">
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 sm:p-4 text-sm rounded-lg border pl-10"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="absolute right-2 bottom-2  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-white rounded-lg text-sm px-4 py-1  sm:py-2"
              >
                Search
              </button>
            </div> */}

            {/* Navigation Links */}
            <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
              <li className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]">
              <FaSearch />
                <span>Search</span>
                <sup className="text-lg text-orange-500 ">New</sup>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]">
                <LiaHandsHelpingSolid />
                <span>Offers</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]">
                <RiDiscountPercentLine />
                <span>Offers</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]">
                <BsCart /> 
                <span>Cart</span>
                <sup className="text-lg text-orange-500 ">{count}</sup>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
