import React from "react"
import PropTypes from "prop-types"

import Comments from "./Comments"

function RecipeSteps(props) {
  const steps = props.steps.map((step, index) => {
    return (
      <li className="step" key={`step-${index}`}>
        {step}
        <Comments />
      </li>
    )
  })
  return (
    <div className="recipe-steps">
      <h1>Steps</h1>
      <ol>{steps}</ol>
    </div>
  )
}

RecipeSteps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
}

export default RecipeSteps
