import React, { createContext, useEffect, useState } from "react"
import recipeData from "../recipeData"

const RecipesProvider = ({ children }) => {
  const savedRecipes = localStorage.getItem("interview-recipes")
  const initialData =
    savedRecipes && savedRecipes !== "undefined"
      ? JSON.parse(savedRecipes)
      : recipeData()
  const [recipes, setRecipes] = useState(initialData)

  const editServings = (recipeId, amount) => {
    if (amount <= 0) return
    let _recipes = [...recipes]
    const index = recipes.findIndex((recipe) => recipe.id === recipeId)
    const currentRecipe = _recipes[index]
    const actualServings = currentRecipe.servings
    currentRecipe.servings = amount
    currentRecipe.ingredients = currentRecipe.ingredients.map((ingredient) => {
      const reason = ingredient.amount / actualServings
      return {
        ...ingredient,
        amount: Math.round(amount * reason * 100) / 100,
      }
    })
    setRecipes(_recipes)
  }

  useEffect(() => {
    localStorage.setItem("interview-recipes", JSON.stringify(recipes))
  }, [recipes])

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
        editServings,
      }}
    >
      {children}
    </RecipesContext.Provider>
  )
}

export const RecipesContext = createContext(RecipesProvider)
export default RecipesProvider
