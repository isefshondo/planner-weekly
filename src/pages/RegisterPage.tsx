import React from "react";
import { Link } from "react-router-dom";
import { InitialSection, LinkWrapper, Wrapper } from "../assets/styles/Global.styles";
import RegisterForm from "../components/Register/RegisterForm";
import BackgroundImage from "../components/UI/BackgroundImage";
import WelcomeMessage from "../components/UI/WelcomeMessage";

const RegisterPage: React.FC = () => {
  return (
    <Wrapper>
      <InitialSection>
        <LinkWrapper>
          <WelcomeMessage message="Please, register to continue" />
          <RegisterForm />
        </LinkWrapper>
      </InitialSection>
      <BackgroundImage />
    </Wrapper>
  );
};

export default RegisterPage;