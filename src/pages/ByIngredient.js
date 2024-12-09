
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import RecipesBox from '../component/recipesBox';
import './recipes.css';
const ByIngredient = () => {
  const location = useLocation()
  const ingredient = location.pathname.split('/').pop();
  const api = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    try {
      const url = api + ingredient
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals);
    }
    catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    searchRecipes()
  }, []);
  
  
  return (
    <>
      <div className="recipes-container">
        {
          recipes ? recipes.map(recipe => (
            <RecipesBox key={recipe.idMeal} recipe={recipe} />
          )) : "No Results."
        }
      </div>
    </>
  );


}

export default ByIngredient