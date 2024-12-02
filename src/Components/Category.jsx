import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../Images/ashwini-chaudhary-monty-YX8L3EFiQmk-unsplash.jpg";

const Category = () => {
   
     const[slide,setSlide] = useState(0)
     const[getData,setGetData] = useState([])
     const [recipes, setRecipes] = useState([]);


     
     const nextSlide = ()=>{
        setSlide(slide+3)
     }

    //  const prevSlide = ()=>{
    //     set
    //  }

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
        const response = await axios.get("https://the-vegan-recipes-db.p.rapidapi.com/", {
          headers: {
            "x-rapidapi-key": "6f52829c3amshc9e9a26fc5cc699p1522a3jsn81568a7d6f2d",
            "x-rapidapi-host": "the-vegan-recipes-db.p.rapidapi.com",
          },
        });

        setRecipes(response.data); // Assuming the response is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
   
   useEffect(() => {
      getCategory();
    },[]);

  return (
    <div>
      {/* this are category details */}

      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between my-10">
          <div className="text-[25px] font-bold">What's on your mind ?</div>
          <div className="flex">
            <div className="   bg-slate-500 flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] mx-2">
              <FaArrowLeft />
            </div>
            <div className="   bg-slate-500 flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] mx-2">
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* this are category data */}

        <div className="flex border  border-red-600">
          {
            recipes.map((item,index)=>{
                return (
         
          <div className="w-[150px] shrink-0 mx-6">
            <img src={item.image} className="h-[150px]" alt="" />
             <p>{item.title}</p>
          </div>
           )
            })
        } 
        </div>
      </div>
    </div>
  );
};

export default Category;
