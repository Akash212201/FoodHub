import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import './recipeDetails.css'
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
            data.meals.forEach(meal => {
                Object.keys(meal).forEach(key => {

                    if (meal[key] === null || meal[key] === "" || meal[key] === undefined) {
                        delete meal[key];
                    }
                })

            });
            const recipeInfo = data.meals.map(meal => {
                const ingredients = [];

                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];

                    if (ingredient && measure) {
                        ingredients.push({ ingredient, measure });
                    }
                    else
                        break;
                }
                const instructions = meal.strInstructions.split('.')
                    .map(sentence => sentence.trim())
                    .filter(sentence => sentence);
                const instructionsArr = instructions.map(instruction =>
                    instruction.replace(/^\s*(STEP\s*\d+:?|[\r\n]+)+|\s*(STEP\s*\d+:?|[\r\n]+)+$/gi, "").trim()
                ).filter(instruction => instruction);

                return {
                    ...meal,
                    ingredients,
                    instructionsArr
                };
            });
            setRecipes(recipeInfo);
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
                                <h1>{meal.strMeal}</h1>
                            </div>
                            <div className='ingredients-img-box'>
                                {
                                    meal.ingredients.map((ingredient, idx) => (
                                        <div key={idx} className='recipe-ingredients-img'>
                                            <div className='recipe-ingredient-img'>
                                                <img src={`https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`} alt='' />
                                            </div>
                                            <p className='ingredient-title1'>{ingredient.ingredient}</p>
                                            <p className='ingredient-title2'>{ingredient.measure}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className='instructions'>
                            <h1 className='instructions-title'>Instructions</h1>
                            {
                                meal.instructionsArr.map((instruction, idx) => (

                                    <p key={idx} className='instructions-step'>
                                        <b>{`Step ${idx + 1}:`}</b>{` ${instruction}.`}
                                        </p>
                                ))
                            }
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default RecipeDetails