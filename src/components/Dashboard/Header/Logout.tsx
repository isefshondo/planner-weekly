import React from "react";
import Logo from "../../../assets/imgs/mini-logo.svg";
import IconArrow from "../../../assets/imgs/arrow-right.svg";
import { LogoutWrapper, StyledLogoutButton } from "../../../assets/styles/Global.styles";
import { AppContext } from "../../../context/ApplicationContext";
import { ApplicationContext } from "../../../interfaces/Interfaces";

const Logout = () => {
  const appCtx = React.useContext<ApplicationContext>(AppContext);
  
  return (
    <LogoutWrapper>
      <img src={Logo} alt="Compasso's Logo" />
      <div>
        <StyledLogoutButton onClick={appCtx.onLogout}>
          <img src={IconArrow} alt="Righ Arrow Icon" />
          Logout
        </StyledLogoutButton>
      </div>
    </LogoutWrapper>
  );
};

export default Logout;