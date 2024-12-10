import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style/popularRecipies.css'
import { FaEye } from "react-icons/fa";

const Popularrecipies = () => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    try {
      const url = 'https://www.themealdb.com/api/json/v2/1/randomselection.php'
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals);
    }
    catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRecipes()
  }, []);

  return (
    <div className='popular-recipies'>
      <div>
        <h1 className="title">Popular recipies</h1>
        </div>
      <div className='row'>
        {
          recipes.length > 0 && recipes?.map((recipeItem) => (
            <div key={recipeItem.idMeal} className='recipe-item'>
              <div className="recipe-img-box">
                <div className="recipe-img">
                  <img src={recipeItem.strMealThumb} alt={recipeItem.recipeImg} />
                </div>
              </div>
              <div className="recipies-info">
                <h1>{recipeItem.strMeal.length < 25 ? recipeItem.strMeal : recipeItem.strMeal.substring(0, 25) + '...'}</h1>
                <p>Category: {recipeItem.strCategory}</p>
              </div>
              <div className="recipe-overlay">
                <Link to={`/recipeDetails/${recipeItem.idMeal}`}>
                <FaEye className="icon"/>
              </Link>
              Quick View
              </div> 
            </div>
          ))

        }
      </div>
    </div>
  );
};

export default Popularrecipies;

