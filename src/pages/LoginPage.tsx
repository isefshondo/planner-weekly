import React from "react";
import { Link } from "react-router-dom";
import {
  InitialSection,
  LinkWrapper,
  Wrapper,
} from "../assets/styles/Global.styles";
import LoginForm from "../components/LoginForm";
import BackgroundImage from "../components/UI/BackgroundImage";
import Loading from "../components/UI/Loading";
import Modal from "../components/UI/Modal";
import WelcomeMessage from "../components/UI/WelcomeMessage";
import { AppContext } from "../context/ApplicationContext";

const LoginPage: React.FC = () => {
  const appCtx = React.useContext(AppContext);
  return (
    <Wrapper isPlanner={false}>
      <InitialSection>
        <LinkWrapper>
          <WelcomeMessage message="To continue browsing safely, log in to the network." />
          <LoginForm />
          <span>
            <Link to={"../register"}>
              Don't have an account yet? Register now
            </Link>
          </span>
        </LinkWrapper>
      </InitialSection>
      <BackgroundImage />
      { appCtx.isFormSent && appCtx.isLoading && <Loading /> }
      { appCtx.isFormSent && !appCtx.isLoading && appCtx.errorMessage != null && <Modal errorMessage={appCtx.errorMessage} /> }
    </Wrapper>
  );
};

export default LoginPage;