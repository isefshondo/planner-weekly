import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, InitialSection, LinkWrapper } from "../components/UI/styles";
import LoginForm from "../components/LoginForm";
import BackgroundImage from "../components/UI/BackgroundImage";
import WelcomeMessage from "../components/UI/WelcomeMessage";
import Loading from "../components/UI/Loading";

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Wrapper isPlanner={false}>
      <InitialSection>
        <LinkWrapper>
          <WelcomeMessage message="To continue browsing safely, log in to the network." />
          <LoginForm setIsLoading={setIsLoading} />
          <span>
            <Link to={"../register"}>
              Don't have an account yet? Register now
            </Link>
          </span>
        </LinkWrapper>
      </InitialSection>
      <BackgroundImage />
      { isLoading && <Loading /> }
    </Wrapper>
  );
};

export default LoginPage;