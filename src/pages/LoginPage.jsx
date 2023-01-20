import React from 'react'
import { Link } from 'react-router-dom'
import FormLogin from '../components/Login/FormLogin'
import { LinkWrapper } from '../components/Login/Login.styles'
import { InitialSection, Wrapper } from '../Global.styles'
import BackgroundImage from '../components/UI/BackgroundImage'
import WelcomeMessage from '../components/UI/WelcomeMessage'

const LoginPage = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <InitialSection>
          <LinkWrapper>
            <WelcomeMessage message={'To continue browsing safely, log in to the network.'} />
            <FormLogin />
            <span>
              <Link to={"../register"}>Don't have an account yet? Register now</Link>
            </span>
          </LinkWrapper>
        </InitialSection>
        <BackgroundImage />
      </Wrapper>
    </React.Fragment>
  )
}

export default LoginPage
