import React from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900  mb-1 mt-0">
        <div className="mx-auto w-full max-w-screen-xl  ">

          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" style={{color:"#1B2559"}}>
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline text-color">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Team
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" style={{color:"#1B2559"}}>
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Amazon Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Zomatto
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" style={{color:"#1B2559"}}>
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white" style={{color:"#1B2559"}}>
                Available in :
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Delhi
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Gurgaon
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Indore
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-color">
                    Mumbai
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-4 py-6 max-w-screen-2xl    md:flex md:items-center md:justify-between">
            <span className="text-sm text-color dark:text-gray-300 sm:text-center">
              © 2024 <a href="https://flowbite.com/">Labbaik Foods</a>. All
              Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
               <FaFacebook />
                <span className="sr-only">Facebook page</span>
              </a>

              <a
                href="#"
                className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
              <FaTwitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                <FaInstagramSquare />
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin />

                <span className="sr-only">Linkedin page</span>
              </a>
            </div>
          </div>


          <div className="d-flex justify-self-end  text-center h-10 w-10 bg-slate-400 rounded-full "style={{position:"relative",top:"-150px",right:"0px"}}>
            <button className="text-2xl mt-2">

          <BiSolidArrowToTop  />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
