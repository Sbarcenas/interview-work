import React from "react"
import { StyledNumericInput } from "./style"
import PropTypes from "prop-types"

function NumericInput({ field, onChange }) {
  const { name, value } = field
  return (
    <StyledNumericInput
      type={"number"}
      placeholder={name}
      name={name}
      onChange={(e) => {
        onChange(name, e)
      }}
      value={value}
      min={0}
      max={1000000}
    />
  )
}

NumericInput.propTypes = {
  field: PropTypes.object,
  onChange: PropTypes.func,
}

export default NumericInput
