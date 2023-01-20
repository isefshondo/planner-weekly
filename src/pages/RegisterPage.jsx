import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/Register/RegisterForm'
import BackgroundImage from '../UI/BackgroundImage'
import { InitialSection, Wrapper } from '../Global.styles'
import WelcomeMessage from '../UI/WelcomeMessage'
import { LinkWrapper } from '../components/Login/Login.styles'

const RegisterPage = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <InitialSection>
          <LinkWrapper>
            <WelcomeMessage message={'Please, register to continue'} />
            <RegisterForm />
            <span>
              <Link to={"../login"}>Already have an account? Log in</Link>
            </span>
          </LinkWrapper>
        </InitialSection>
        <BackgroundImage />
      </Wrapper>
    </React.Fragment>
  )
}

export default RegisterPage
