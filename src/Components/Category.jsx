import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Category = () => {
  const [slide, setSlide] = useState(0);
  const [recipes, setRecipes] = useState([]);

  const handleNextSlide = () => {
     
    // console.log(slide + 3);
    if(slide===0)
      {
          return false
      }
    setSlide(slide + 6);
    
  };

  const handlePrevSlide = () => {
      if(slide >= recipes.length - 6)
        {
            return false
        }
        setSlide(slide - 6);
  };

  const category = [
    {
      image: "North_Indian_4.jpeg",
      path: "north-indian",
    },
    {
      image: "Pizza.jpeg",
      path: "pizza",
    },
    {
      image: "Noodles.jpeg",
      path: "noodles",
    },
    {
      image: "Pasta.jpeg",
      path: "pasta",
    },
    {
      image: "Paratha.jpeg",
      path: "paratha",
    },
    {
      image: "Biryani_2.jpeg",
      path: "biryani",
    },
    {
      image: "Burger.jpeg",
      path: "burger",
    },
    {
      image: "Cakes.jpeg",
      path: "cakes",
    },
    {
      image: "Chinese.jpeg",
      path: "chinese",
    },
    {
      image: "Chole_Bature.jpeg",
      path: "chole-bature",
    },
    {
      image: "Dosa.jpeg",
      path: "dost",
    },
    {
      image: "Gulab_Jamun.jpeg",
      path: "gulab-jamun",
    },
    {
      image: "Ice_Creams.jpeg",
      path: "ice-creams",
    },
    {
      image: "Idli.jpeg",
      path: "idli",
    },
    {
      image: "Khichdi.jpeg",
      path: "khichdi",
    },
    {
      image: "Poori.jpeg",
      path: "poori",
    },
    {
      image: "Pure_Veg.jpeg",
      path: "pure-veg",
    },
    {
      image: "Rolls.jpeg",
      path: "rolls",
    },
    {
      image: "Salad.jpeg",
      path: "salad",
    },
    {
      image: "South_Indian_4.jpeg",
      path: "south-indian",
    },
  ];

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

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      {/* this are category details */}

      <div className="max-w-[1200px] mx-auto mb-11 ">
        <div className="flex items-center justify-between my-10">
          <div className="text-[25px] font-bold">What's on your mind ?</div>
          <div className="flex  ">
            <div  className="bg-slate-700 flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] mx-2 text-white" onClick={handleNextSlide}>
              <FaArrowLeft   />
            </div>
            <div className="bg-slate-700 flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] mx-2 text-white" onClick={handlePrevSlide}>
              <FaArrowRight  />
            </div>
          </div>
        </div>

        {/* this are category data */}

        <div className="flex overflow-hidden  snap-x ... ">
          {recipes.map((item, index) => {
            return (
              <div
                style={{ transform: `translateX(${slide * 100}%)` }}
                key={item.idMeal}
                className="w-[150px] shrink-0 mx-6 duration-500 snap-center ..."
              >
                <img src={item.strMealThumb} className="h-[150px] rounded-md" alt="" />
                <p>{item.strMeal}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
