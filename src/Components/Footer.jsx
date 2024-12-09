import React, { useRef } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ onScrollToTop }) => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900  mb-1 mt-0">
        {/* google maps in reactjs */}
        <div className="flex flex-col lg:flex-row justify-center items-start space-y-10 lg:space-y-0 lg:space-x-10 px-4 lg:px-10 py-10">
          {/* Map Section */}
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.708812178738!2d72.82911611490245!3d19.00743058713544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfbb55555555%3A0x65f732c899f93a59!2sKamathipura%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697034876085!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white shadow border rounded-lg px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Contact Us
            </h2>

            {/* Name Input */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            {/* Submit Button */}
            <center>
              
            <button
              type="submit"
              className="w-36  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
              Submit
            </button>
              </center>
          </div>
        </div>

        <div className="mx-auto w-full max-w-screen-xl  ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2
                className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                style={{ color: "#1B2559" }}
              >
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
              <h2
                className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                style={{ color: "#1B2559" }}
              >
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
              <h2
                className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                style={{ color: "#1B2559" }}
              >
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
              <h2
                className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                style={{ color: "#1B2559" }}
              >
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
            <div className="flex mt-4 mx-16 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                <FaFacebook className=" hover:text-blue-500  text-3xl" />
                <span className="sr-only">Facebook page</span>
              </Link>

              <Link
                href="#"
                className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                <FaTwitter className=" hover:text-blue-300  text-3xl" />
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                <FaInstagramSquare className=" hover:text-red-600  text-3xl " />
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin className=" hover:text-sky-700   text-3xl" />

                <span className="sr-only">Linkedin page</span>
              </Link>
            </div>
          </div>

          <div
            className="d-flex animate-bounce justify-self-end mx-6 mt-0 text-center h-14 w-14 bg-slate-400 rounded-full "
            style={{ position: "relative", top: "-150px", right: "0px" }}
          >
            <button
              type="button"
              className="text-3xl  mt-3 text-black font-bold"
              onClick={onScrollToTop}
            >
              <BiSolidArrowToTop />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
