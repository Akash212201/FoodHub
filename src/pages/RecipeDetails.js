import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

const RecipeDetails = () => {
    const location = useLocation()
    const ingredient = location.pathname.split('/').pop();
    const api = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
    const [recipe, setRecipes] = useState([]);

    // search for the recipe
    const searchRecipes = async () => {
        try {
            const url = api + ingredient;
            const res = await fetch(url);
            const data = await res.json();
            //console.log(data.meals,"g2")
            data.meals.forEach(meal => {
                //Remove null or empty values from the object
                Object.keys(meal).forEach(key => {

                    if (meal[key] === null || meal[key] === "" || meal[key] === undefined) {
                        delete meal[key];
                    }
                })

            });

            // console.log(data.meals,"g")
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
        <div>
            {
                recipe?.map((meal) => (
                    <div key={meal.idMeal} className='recipe-details'>
                        <div className='recipe-tag'>
                            <h1>{meal.strArea}</h1>
                            <p>Category: {meal.strCategory}</p>
                        </div>
                        <div className='recipes-img-box'>
                            <div className='recipe-img-box'>
                                <div className='recipe-img'>
                                    <img src={meal.strMealThumb} alt='' />
                                </div>
                            </div>
                            <div className='ingredients-img-box'>
                                <div className='ingredients-img'>
                                    <div className='ingredient-img'>
                                        <img src='' alt='' />
                                    </div>
                                    <p>item 1</p>
                                </div>

                            </div>
                        </div>
                        <div className='instructions'>
                            <h1 className='instructions-title'>Instructions</h1>
                            <p>1. lorem</p>
                            <p>2. lorem</p>
                            <p>3. lorem</p>
                            <p>4. lorem</p>
                            <p>5. lorem</p>
                            <p>6. lorem</p>
                            <p>7. lorem</p>
                            <p>8. lorem</p>
                            <p>9. lorem</p>
                            <p>10. lorem</p>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default RecipeDetails