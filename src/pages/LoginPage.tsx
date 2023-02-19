import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, InitialSection, LinkWrapper } from "../components/UI/styles";
import LoginForm from "../components/LoginForm";
import BackgroundImage from "../components/UI/BackgroundImage";
import WelcomeMessage from "../components/UI/WelcomeMessage";

const LoginPage: React.FC = () => {
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
    </Wrapper>
  );
};

export default LoginPage;