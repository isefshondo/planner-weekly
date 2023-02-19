import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, InitialSection, LinkWrapper } from "../components/UI/styles";
import RegisterForm from "../components/RegisterForm";
import BackgroundImage from "../components/UI/BackgroundImage";
import WelcomeMessage from "../components/UI/WelcomeMessage";
import Loading from "../components/UI/Loading";

const RegisterPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Wrapper isPlanner={false}>
      <InitialSection>
        <LinkWrapper>
          <WelcomeMessage message="Please, register to continue" />
          <RegisterForm setIsLoading={setIsLoading} />
          <span>
            <Link to="../login">Already have an account? Log in</Link>
          </span>
        </LinkWrapper>
      </InitialSection>
      <BackgroundImage />
      { isLoading && <Loading /> }
    </Wrapper>
  );
};

export default RegisterPage;