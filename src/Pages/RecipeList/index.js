import React, { useContext } from "react"
import { RecipesContext } from "../../Context/RecipesContext"
import Recipe from "../../Components/Recipe"
import { Col, Row, Typography } from "antd"
const { Title } = Typography

function Index() {
  const { recipes } = useContext(RecipesContext)

  return (
    <Row justify={"center"}>
      <Col lg={12}>
        <Title>Recipes:</Title>
        {recipes.map((recipe, index) => (
          <Recipe key={`${recipe.title}-${index}`} {...recipe} />
        ))}
      </Col>
    </Row>
  )
}

export default Index
