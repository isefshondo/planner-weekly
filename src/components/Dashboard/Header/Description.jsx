import React from 'react'
import { HeaderDescription } from './Header.styles'

const Description = ({title, description}) => {
  return (
    <HeaderDescription>
      <h3>{title}</h3>
      <p>{description}</p>
    </HeaderDescription>
  )
}

export default Description
