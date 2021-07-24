import React from "react"
import { StyledInput } from "./style"
import PropTypes from "prop-types"

function Index({ field }) {
  const { name } = field
  return <StyledInput placeholder={name} {...field} />
}

Index.propTypes = {
  field: PropTypes.object,
}

export default Index
