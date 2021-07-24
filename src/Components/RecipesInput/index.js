import React, { useState } from "react"
import { Popover, Button, Tag, Tooltip, Typography } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { Formik, Field, ErrorMessage } from "formik"
import NumericInput from "../Input/NumericInput"
import Input from "../Input"
import * as Yup from "yup"
import ErrorText from "../ErrorText"
import PropTypes from "prop-types"
const { Paragraph } = Typography

const ingredientSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required(),
  amount: Yup.number().min(0.1).required(),
  measure: Yup.string().min(1, "Too Short!").required(),
})

function Index(props) {
  const { field, onChange } = props
  const { value: tags, name } = field
  const [editing, setEditing] = useState(false)

  const handleClose = () => {
    setEditing(false)
  }

  function showInput() {
    setEditing(true)
  }

  return (
    <Formik
      validationSchema={ingredientSchema}
      initialValues={{
        name: "",
        amount: 1,
        measure: "",
      }}
      onSubmit={(values, { resetForm }) => {
        onChange(name, [...tags, values])
        resetForm()
        handleClose()
      }}
    >
      {({ handleSubmit, setFieldValue }) => (
        <>
          {tags.map((tag, index) => {
            const isLongTag = tag.name.length > 20
            const tagString = `Name: ${tag.name}  
                Measure: ${tag.measure} 
                Amount: ${tag.amount} 
            `
            const tagElem = (
              <Tag
                className="edit-tag"
                key={`${tag.name}-${index}`}
                closable
                onClose={handleClose}
              >
                {isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name}
              </Tag>
            )

            return (
              <Tooltip
                overlayStyle={{ whiteSpace: "pre-line" }}
                title={tagString}
                key={tag.name}
              >
                {tagElem}
              </Tooltip>
            )
          })}

          <Popover
            trigger="contextMenu"
            visible={editing}
            content={
              <>
                <Paragraph strong>Add an ingredient</Paragraph>
                <Field name="name" component={Input} />
                <ErrorMessage name="name" component={ErrorText} />
                <Field
                  name="amount"
                  onChange={setFieldValue}
                  component={NumericInput}
                />
                <ErrorMessage name="amount" component={ErrorText} />
                <Field name="measure" component={Input} />
                <ErrorMessage name="measure" component={ErrorText} />
                <Button onClick={handleSubmit}>Add</Button>
              </>
            }
            onVisibleChange={handleClose}
          >
            <Tag className="site-tag-plus" onClick={showInput}>
              <PlusOutlined /> New
            </Tag>
          </Popover>
        </>
      )}
    </Formik>
  )
}

Index.propTypes = {
  field: PropTypes.object,
  onChange: PropTypes.func,
}

export default Index
