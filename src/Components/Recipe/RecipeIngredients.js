import React from "react"
import Comments from "./Comments"
import PropTypes from "prop-types"

function RecipeIngredients(props) {
  const ingredients = props.ingredients.map((ingredient, index) => {
    return (
      <li className="ingredient" key={`ingredient-${index}`}>
        <strong>{ingredient.name}</strong>: {ingredient.amount} {ingredient.measure}
        <Comments />
      </li>
    )
  })
  return (
    <div className="recipe-ingredients">
      <h1>Ingredients</h1>
      <ul>{ingredients}</ul>
    </div>
  )
}

RecipeIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
}

export default RecipeIngredients
