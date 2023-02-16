import React from "react";
import { Link } from "react-router-dom";
import {
  InitialSection,
  LinkWrapper,
  Wrapper,
} from "../assets/styles/Global.styles";
import RegisterForm from "../components/RegisterForm";
import BackgroundImage from "../components/UI/BackgroundImage";
import Loading from "../components/UI/Loading";
import Modal from "../components/UI/Modal";
import WelcomeMessage from "../components/UI/WelcomeMessage";
import { AppContext } from "../context/ApplicationContext";

const RegisterPage: React.FC = () => {
  const appCtx = React.useContext(AppContext);
  return (
    <Wrapper isPlanner={false}>
      <InitialSection>
        <LinkWrapper>
          <WelcomeMessage message="Please, register to continue" />
          <RegisterForm />
          <span>
            <Link to="../login">Already have an account? Log in</Link>
          </span>
        </LinkWrapper>
      </InitialSection>
      <BackgroundImage />
      { appCtx.isFormSent && appCtx.isLoading && <Loading /> }
      {/* { appCtx.isFormSent && !appCtx.isLoading && appCtx.errorMessage != null && <Modal errorMessage={appCtx.errorMessage} /> } */}
    </Wrapper>
  );
};

export default RegisterPage;