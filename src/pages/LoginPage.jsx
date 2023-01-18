import React from 'react'
import Logo from '../assets/logo.svg'
import LoginForm from '../components/FormsComponents/LoginForm'

const LoginPage = () => {
  return (
    <React.Fragment>
      <main className='initial-wrapper'>
        <section className='initial-section'>
          <div>
            <hgroup>
              <h1>Welcome,</h1>
              <p className='login-description'>To continue browsing, log in to the network.</p>
            </hgroup>
            <LoginForm />
          </div>
        </section>
        <section className='image-section'>
          <img src={Logo} alt="Compasso's logo" />
        </section>
      </main>
    </React.Fragment>
  )
}

export default LoginPage
