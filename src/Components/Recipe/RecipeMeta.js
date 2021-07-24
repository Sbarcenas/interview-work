import React, { useContext } from "react"
import { InputNumber } from "antd"
import { ServingsContainer } from "./style"
import { RecipesContext } from "../../Context/RecipesContext"
import PropTypes from "prop-types"
import RecipeIngredients from "./RecipeIngredients"

function RecipeMeta(props) {
  const { id, title, time, servings } = props
  const { editServings } = useContext(RecipesContext)
  const onChangeServings = (val) => {
    editServings(id, val)
  }

  return (
    <div className="recipe-meta">
      <h1>{title}</h1>
      <div>
        <p>Time: {time}</p>
        <ServingsContainer>
          <p>Servings:</p>
          <InputNumber value={servings} onChange={onChangeServings} />
        </ServingsContainer>
      </div>
    </div>
  )
}

RecipeIngredients.propTypes = {
  id: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  time: PropTypes.string,
  servings: PropTypes.number,
}

export default RecipeMeta
