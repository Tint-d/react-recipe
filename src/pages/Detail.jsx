import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import "./detail.css"

const Detail = () => {
  const { id } = useParams();

  const [items, setItems] = useState({});
  const [ingers, setInger] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const newIngers = [
      { id: 1, name: items?.strIngredient1 },
      { id: 2, name: items?.strIngredient2 },
      { id: 3, name: items?.strIngredient3 },
      { id: 4, name: items?.strIngredient4 },
    ];
    setInger(newIngers);
  }, [items]);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setItems(meals[0]);
  };
  // console.log(ingers);
  return (
    <>
      <div className="mt-10 flex justify-around items-center h-full mx-auto">
        <img
          className=" w-[400px] object-cover"
          src={items?.strMealThumb}
          alt=""
        />
        <div className=" w-[50%]">
          <h2 className=" text-2xl text-gray-600 font-semibold mb-5">
            {items?.strMeal}
          </h2>
          <p className="  text-orange-600 font-semibold tracking-wide">
            {items?.strArea}
          </p>
          <button
            className={`${
              activeTab === "instructions" ? "activeDetail" : ""
            } px-8 py-2 bg-orange-500 rounded-lg text-white text-lg`}
            onClick={() => setActiveTab("instructions")}
          >
            instructions
          </button>
          <button
            className={`${
              activeTab === "ingredents" ? "activeDetail" : ""
            } px-8 py-2 bg-orange-500 rounded-lg text-white text-lg`}
            onClick={() => setActiveTab("ingredents")}
          >
            ingredents
          </button>
          {activeTab === "instructions" && (
            <p
              className={`  text-gray-600 font-semibold tracking-wide leading-8`}
            >
              {items?.strInstructions}
            </p>
          )}
          {activeTab === "ingredents" && (
            <ol>
              {ingers.map((inger) => {
                return <li key={inger.id}>{inger.name}</li>;
              })}
            </ol>
          )}
          <a href={items?.strYoutube}>
            <BsYoutube className=" text-3xl text-red-500" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Detail;
