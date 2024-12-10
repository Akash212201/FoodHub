const RecipesBox = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
  
  return (
      <div className="box">
          <img src={strMealThumb} alt={strMeal} className="box-image" />
          <div className="box-body">
              {strCategory ? <span className="category">Category {strCategory}</span>:<></>}
              <h3>Name: {strMeal}</h3>
              <a href={"/recipeDetails/" + idMeal} className="ins" >View Recipe</a>
          </div>
      </div>
  )
};
export default RecipesBox