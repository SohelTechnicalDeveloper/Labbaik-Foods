import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900  mb-1 mt-0">
        <div className="mx-auto w-full max-w-screen-xl  ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Team
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Amazon Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Zomatto
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Available in :
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Delhi
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Gurgaon
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Indore
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Mumbai
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 max-w-screen-2xl    md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;
