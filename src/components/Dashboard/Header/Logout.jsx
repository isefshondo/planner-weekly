import React from 'react'
import { ButtonLogout, HeaderLogout } from './Header.styles'
import MiniLogo from '../../../assets/mini-logo.svg'
import IconArrow from '../../../assets/arrow-right.svg'
import { AuthContext } from '../../../context/AuthContext'

const Logout = () => {
  const authCtx = React.useContext(AuthContext);
  return (
    <HeaderLogout>
      <img src={MiniLogo} alt="Compasso's Logo" />
      <ButtonLogout onClick={authCtx.onLogout}>
        <img src={IconArrow} alt="Arrow's Right Icon" />
        Logout
      </ButtonLogout>
    </HeaderLogout>
  )
}

export default Logout
