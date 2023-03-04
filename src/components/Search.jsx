import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState({});

  const { name } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { meals } = await api.json();
     setSearch(meals[0])
    // setSearch(meals?.meals[0]);
    console.log(meals);
  };

  return( 
  <div>
    <img src={search?.strMealThumb} alt="" />
  </div>);
};

export default Search;
