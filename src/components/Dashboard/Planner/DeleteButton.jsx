import React from 'react'
import { DeleteTask } from './Dashboard.styles'

const DeleteButton = ({ onClick }) => {
  return (
    <DeleteTask onClick={onClick}>
      Delete
    </DeleteTask>
  )
}

export default DeleteButton
