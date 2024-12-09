import React from 'react'
import { Link } from 'react-router-dom'
import './style/ingredient.css'
const Ingredients = () => {
    const ingredient = [
        {
            ingredientTitle: "Chicken",
            ingredientImg: "../images/gallery/chicken.jpg",
            ingredientPath: "/chicken_breast",
        },
        {
            ingredientTitle: "Rice",
            ingredientImg: "../images/gallery/rice.jpg",
            ingredientPath: "/rice",
        },
        {
            ingredientTitle: "Salmon",
            ingredientImg: "../images/gallery/salmon.jpg",
            ingredientPath: "/salmon",
        },
        {
            ingredientTitle: "Bread",
            ingredientImg: "../images/gallery/bread.jpg",
            ingredientPath: "/bread",
        },
        {
            ingredientTitle: "Eggs",
            ingredientImg: "../images/gallery/eggs.jpg",
            ingredientPath: "/egg",
        },
        {
            ingredientTitle: "Basil",
            ingredientImg: "../images/gallery/basil.jpg",
            ingredientPath: "/basil",
        },
    ]
    return (
        <div className='ingredient'>
            <div><h1 className="title">Search By Main Ingredient</h1></div>
            <div className='ingredient-item'>
                {
                    ingredient.map((indt,idx) => (
                        <div key={idx} className='ingredient-box'>
                            <div  className='ingredient-img'>
                            <Link to={indt.ingredientPath}>
                                <img src={indt.ingredientImg} alt={indt.ingredientImg} />
                            </Link>
                        </div>
                            <h3 className='ingredient-title'>{indt.ingredientTitle}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Ingredients