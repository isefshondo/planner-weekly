import React from "react";
import { ImageSection } from "./styles";
import Logo from "../../assets/imgs/logo.svg";

export const BackgroundImage: React.FC = () => {
  return (
    <ImageSection>
      <img src={Logo} alt="Compasso's Logo" />
    </ImageSection>
  );
};

export default BackgroundImage;