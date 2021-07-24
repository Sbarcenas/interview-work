import React from "react"
import { ErrorStyled } from "./style"
import PropTypes from "prop-types"

function Index({ children }) {
  return <ErrorStyled>{children}</ErrorStyled>
}

Index.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Index
