import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Button, Modal } from "antd"
import Input from "../Input"
import NumericInput from "../Input/NumericInput"
import Tags from "../Tags"
import RecipesInput from "../RecipesInput/index"
import ErrorText from "../ErrorText"
import { RecipesContext } from "../../Context/RecipesContext"
import * as Yup from "yup"
import { v4 as uuidv4 } from "uuid"

const recipeSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required(),
  servings: Yup.number().min(0.1).required(),
  ingredients: Yup.array().min(1),
  steps: Yup.array().min(1),
  timeToMake: Yup.string().min(2, "Too Short!").required(),
})

function Index() {
  const { setRecipes } = useContext(RecipesContext)
  const history = useHistory()
  const closeModal = () => {
    history.push("/")
  }

  return (
    <Formik
      validationSchema={recipeSchema}
      initialValues={{
        title: "",
        servings: 0,
        ingredients: [],
        steps: [],
        timeToMake: "",
      }}
      onSubmit={(values) => {
        const recipe = { ...values, id: uuidv4() }
        setRecipes((recipes) => [...recipes, recipe])
        closeModal()
      }}
    >
      {({ handleSubmit, setFieldValue }) => (
        <Modal
          onCancel={closeModal}
          title="Add Recipe"
          visible={true}
          footer={[
            <Button key="Add" type="submit" onClick={handleSubmit}>
              Add
            </Button>,
          ]}
        >
          <Form>
            <Field type="text" name="title" component={Input} />
            <ErrorMessage name="title" component={ErrorText} />
            <Field name="timeToMake" component={Input} />
            <ErrorMessage name="timeToMake" component={ErrorText} />
            <Field
              type="number"
              name="servings"
              component={NumericInput}
              onChange={setFieldValue}
            />
            <ErrorMessage name="servings" component={ErrorText} />
            <Field
              placeholder="Ingredients"
              name="ingredients"
              component={RecipesInput}
              onChange={setFieldValue}
            />
            <ErrorMessage name="ingredients" component={ErrorText} />

            <Field
              placeholder="Steps"
              name="steps"
              component={Tags}
              onChange={setFieldValue}
            />
            <ErrorMessage name="steps" component={ErrorText} />
          </Form>
        </Modal>
      )}
    </Formik>
  )
}

export default Index
