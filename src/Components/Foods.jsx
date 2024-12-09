import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoIosContact } from "react-icons/io";
import { LuUtensilsCrossed } from "react-icons/lu";
import { MdMarkEmailUnread } from "react-icons/md";
import image1 from "../Images/PD1081949.jpg";
import useStore from "./Store"; // Import the Zustand store

const Foods = () => {
  const [foodsData, setFoodsData] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const { increase, decrease } = useStore();
  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );

      setRecipes(response.data.meals);
     console.log(recipes.length);


      // Assuming the response is an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const getFoodsData = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );

      setFoodsData(response.data.meals);
      console.log(response.data.mealsstrMeal);

      // Assuming the response is an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFoodsData();
    getCategory()
  }, []);
  return (
    <div style={{ backgroundColor: "#FAF8F2" }}>
      {/* this are foods data  */}
      <section
        id="Projects"
        className=" mx-auto grid grid-cols-1 gap-x-14 p-16 gap-y-14  mb-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center  "
      >
        {foodsData.map((item) => {
          return (
            <div className="w-full   bg-transparent shadow-2xl rounded-2xl duration-500 hover:scale-105 hover:shadow-xl">
              <div className="overflow-hidden rounded-t-lg bg-zinc-300">
                <img
                  className="transition-transform duration-300 ease-in-out rounded-t-lg"
                  src={`${item.strMealThumb}`}
                  alt="Foods Image"
                />
                {/* </div> */}

                <div className="px-4 py-3 w-full">
                 
                  <p
                    className="text-lg font-bold text-black truncate block capitalize"
                    title={item.strMeal}
                  >
                    {item.strMeal}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $ 129
                    </p>
                    <del>
                      <p className="text-sm  cursor-auto ml-2 ">$ 129</p>
                    </del>
                    <div className="ml-auto">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={increase}
                      >
                        Add Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* this is our categoyr caraousel  */}
      

      <div className="relative w-full">
        <div>

          <h1 className="text-center text-5xl mb-6 "style={{fontFamily:' Lobster, cursive !important;',fontWeight:"bold", fontStyle:"italic"}}>From Our Menu</h1>
        </div>
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <button
            className="absolute left-0 z-10 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 focus:outline-none"
            id="prevButton"
          >
            ←
          </button>
          <div className="flex gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory w-full px-8">
           { recipes.map((category,index)=>{

           return( <div className="flex-shrink-0 w-60 h-80 snap-center rounded-lg overflow-hidden ">
              <img
                src={category.strMealThumb}
                alt="Food 1"
                className="w-full  object-cover"
              />
              <div className="p-4">
                {/* <h3 className="font-semibold text-lg">{category.strMeal}</h3> */}
                {/* <p className="text-green-600">$10.00</p> */}
              </div>
            </div>)
          })  
          }
          </div>
          {/* Right Navigation */}
          <button
            className="absolute right-0 z-10 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 focus:outline-none"
            id="nextButton"
          >
            →
          </button>
        </div>
      </div>

      {/* this are center of details of web application  */}

      <div className="bg-white py-16 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold  " style={{ color: "#1B2559" }}>
            Welcome To Labbaik Foods 🍽️
          </h1>
          <p className="text-lg  mt-4 max-w-[1200px]  mx-auto text-color">
            At Labbaik Foods, we are constantly striving to express our passion
            and turn our dreams into reality. We believe in creating experiences
            that nourish both the body and the soul. If you have the opportunity
            to savor our offerings, you have the opportunity to embark on a
            journey of taste, quality, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-sm rounded-lg p-6 text-center">
            <div className=" bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-2xl text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdMarkEmailUnread />
            </div>
            <h3
              className="text-xl font-semibold text-gray-800"
              style={{ color: "#1B2559" }}
            >
              Email Reservation
            </h3>
            <p className=" mt-2 text-color">
              Integrate our shared team inboxes seamlessly with your website.
              Enhance the user experience and provide efficient communication
              channels.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className=" bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-2xl text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <LuUtensilsCrossed />
            </div>
            <h3
              className="text-xl font-semibold text-gray-800"
              style={{ color: "#1B2559" }}
            >
              Healthy Food
            </h3>
            <p className=" mt-2 text-color">
              Manage your team effortlessly with our shared team inboxes.
              Simplify team reporting and ensure smooth operations.
            </p>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-6 text-center">
            <div className=" bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-white w-12 h-12 text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
              <IoIosContact />
            </div>
            <h3
              className="text-xl font-semibold text-gray-800"
              style={{ color: "#1B2559" }}
            >
              Business Meetings
            </h3>
            <p className=" mt-2 text-color">
              Gain valuable insights and data analytics for your team through
              our analytics dashboard. With Labbaik Foods Meetings, make
              informed decisions and track your progress effectively, ensuring
              your team sta ys aligned and productive.
            </p>
          </div>
        </div>

        <div className=" h-64 md:h-96 lg:h-[480px] rounded-3xl relative overflow-hidden m-28  bg-image">
          {/* <img
            alt="Pasta with Pesto and Tomatoes"
            className="w-full  h-full  object-cover "
             
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Foods;
