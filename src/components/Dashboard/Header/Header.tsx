import React from "react";
import { StyledHeader } from "../../../assets/styles/Global.styles";
import Clock from "./Clock";
import Description from "./Description";
import Logout from "./Logout";
import Weather from "./Weather";

const Header = () => {
  return (
    <StyledHeader>
      <Description
        title="Weekly Planner"
        message="Use this planner to organize your daily issues"
      />
      <Clock />
      <Weather />
      <Logout />
    </StyledHeader>
  );
};

export default Header;