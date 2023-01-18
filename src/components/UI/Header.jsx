import React from 'react'
import HeaderClock from './HeaderClock'
import ArrowRight from '../../assets/arrow-right.svg'
import { Description } from '../../styled-components/styled-components'
import { AuthContext } from '../../context/AuthContext'

const Header = () => {
  const authCtx = React.useContext(AuthContext);

  return (
    <header className='main-header'>
      <Description>
        <hgroup>
          <h3>Weekly Planner</h3>
          <p>Use this planner to organize your daily issues.</p>
        </hgroup>
      </Description>
      <HeaderClock />
      <div className='header-weather'>
        <p>Asunción - Paraguay</p>
        <p>22º</p>
      </div>
      <div>
        {/* <img src={Logo} alt="Compasso's logo" /> */}
        <button className="logout-button" onClick={authCtx.onLogout}>
          <img src={ArrowRight} alt="Arrow Icon" />
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header