import React from "react";
import Clock from "./Clock";
import Description from "./Description";

const Header = () => {
  return (
    <header>
      <Description
        title="Weekly Planner"
        message="Use this planner to organize your daily issues"
      />
      <Clock />
    </header>
  );
};

export default Header;