import React, { useState, useRef, useEffect } from "react"
import { Input, Tag, Tooltip } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { Wrapper } from "./style"
import { ModalTitle } from "../MainModal/style"
import PropTypes from "prop-types"

function Tags(props) {
  const { onChange, field, placeholder } = props
  const { value: tags = [], name } = field
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState("")
  const [editInputIndex, setEditInputIndex] = useState(-1)
  const [editValue, setEditValue] = useState("")
  const inputRef = useRef(null)
  const editInputRef = useRef(null)

  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  useEffect(() => {
    if (editInputIndex !== -1) {
      editInputRef.current.focus()
    }
  }, [editInputIndex])

  function showInput(e) {
    setEditing(true)
  }

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleInputConfirm() {
    let _tags = tags
    if (value && tags.indexOf(value) === -1) {
      _tags = [...tags, value]
    }
    onChange(name, _tags)
    setEditing(false)
    setValue("")
  }

  function handleEditInput(e) {
    setEditValue(e.target.value)
  }

  function handleEditConfirm() {
    const newTags = [...tags]
    newTags[editInputIndex] = editValue
    onChange(name, newTags)
    setEditInputIndex(-1)
    setEditValue("")
  }

  function handleClose(removedTag) {
    const _tags = tags.filter((tag) => tag !== removedTag)
    onChange(name, _tags)
  }

  return (
    <Wrapper>
      <ModalTitle>{placeholder}</ModalTitle>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={`tag-${tag}-${index}`}
              size={"small"}
              className="tag-input"
              value={editValue}
              onChange={handleEditInput}
              onBlur={handleEditConfirm}
              onPressEnter={handleEditConfirm}
            />
          )
        }

        const isLongTag = tag.length > 20

        const tagElem = (
          <Tag
            className="edit-tag"
            key={tag}
            closable
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (index !== 0) {
                  setEditInputIndex(index)
                  setEditValue(tag)
                  e.preventDefault()
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        )

        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        )
      })}

      {editing && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          className="tag-input"
          value={value}
          onChange={handleChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}

      {!editing && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> New
        </Tag>
      )}
    </Wrapper>
  )
}

Tags.propTypes = {
  field: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default Tags
