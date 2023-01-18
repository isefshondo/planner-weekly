import React from 'react'
import { BtnDashboard } from '../../styled-components/styled-components'

const ManageButton = ({ children, type, onClick }) => {
  return (
    <BtnDashboard type={type} onClick={onClick}>
      { children }
    </BtnDashboard>
  )
}

export default ManageButton