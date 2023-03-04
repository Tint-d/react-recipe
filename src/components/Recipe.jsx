import React, { useEffect, useState } from 'react'
import RecipeCart from './RecipeCart'

const Recipe = () => {
    const [items,setItems] = useState([])

    useEffect(() =>{
        fetchData()
    },[])

    const fetchData = async() =>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        const {meals} = await api.json()
        setItems(meals)
        // console.log(meals);
    }
  return (
    <div className=' flex flex-wrap gap-10 mt-10'>
        {items?.map(item => {
            return(
                <RecipeCart key={item.idMeal} id={item.idMeal} name ={item.strMeal} image={item.strMealThumb}/>
            )
        })}
    </div>
  )
}

export default Recipe