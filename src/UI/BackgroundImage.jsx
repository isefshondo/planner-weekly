import React from 'react'
import { ImageWrapper } from '../Global.styles'
import Logo from '../assets/logo.svg'

const BackgroundImage = () => {
  return (
    <React.Fragment>
      <ImageWrapper>
        <img src={Logo} alt="Compasso's Logo" />
      </ImageWrapper>
    </React.Fragment>
  )
}

export default BackgroundImage
