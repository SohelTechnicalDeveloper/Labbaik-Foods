import React, { useState } from "react";
import swiggylogo from "../Images/images (1).png";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { LiaHandsHelpingSolid } from "react-icons/lia";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <FaSearch />,
      name: " Search",
    },
    {
      icon: <RiDiscountPercentLine />,
      name: "Offers",
      sup:"New"
    },
    {
      icon: <LiaHandsHelpingSolid />,
      name: "Help",
    },
    {
      icon: <FaRegUser />,
      name: " Search",
    },
    {
      icon: <BsCart />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={() => hideSideMenu()}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[400px] bg-white h-full absolute duration-[400ms]"
          style={{ left: toggle ? "0%" : "-100%" }}
        >
          <RxCross1
            className="mx-8 mt-10 cursor-pointer"
            fontSize={25}
            onClick={() => hideSideMenu()}
          />
        </div>
      </div>

      <header className="p-[25px] shadow-xl">
        <div className="max-w-[1200px] mx-auto  flex items-center">
          <div className="w-[100px]">
            <img src={swiggylogo} className="w-full" alt="" />
          </div>
          <div className="">
            <span className="text-black underline font-bold">Harsol</span>{" "}
            Indore Madhya Pradesh India{" "}
            <IoIosArrowDown
              fontSize={25}
              onClick={() => showSideMenu()}
              className="inline cursor-pointer"
            />
          </div>
          <nav className="flex list-none ml-auto gap-10 text-[18px] font-semibold">
            {links.map((link, index) => {
              return (
                <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]">
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
