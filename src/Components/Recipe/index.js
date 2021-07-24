import React from "react"
import RecipeMeta from "./RecipeMeta"
import RecipeIngredients from "./RecipeIngredients"
import RecipeSteps from "./RecipeSteps"
import PropTypes from "prop-types"
import { RecipeCard } from "./style"

function Index(props) {
  const { title, timeToMake, servings, ingredients, steps, id } = props
  return (
    <RecipeCard>
      <RecipeMeta title={title} time={timeToMake} servings={servings} id={id} />
      <RecipeIngredients ingredients={ingredients} />
      <RecipeSteps steps={steps} />
    </RecipeCard>
  )
}

Index.propTypes = {
  title: PropTypes.string,
  timeToMake: PropTypes.string,
  servings: PropTypes.number,
  ingredients: PropTypes.arrayOf(PropTypes.object),
  steps: PropTypes.arrayOf(PropTypes.string),
}

export default Index
