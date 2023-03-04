import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../App.css";

const RecipeCart = ({ name, image,id }) => {
  return (
    <div className=" flex flex-col w-72 mx-auto parent">
      <div className=" relative">
        <img
          className="h-[300px] image object-cover rounded-lg"
          src={image}
          alt=""
        />
        <Link to={`/detail/${id}`}>
          <p className=" text-3xl absolute icon cursor-pointer bg-red-500  bottom-[40%] left-[40%] p-2 rounded-[100%]">
            <BsSearch className=" text-white  text-2xl  h-6 w-6" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCart;
