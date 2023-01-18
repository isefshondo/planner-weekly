import React from 'react'
import RegisterForm from '../components/FormsComponents/RegisterForm'
import Logo from '../assets/logo.svg'

const RegisterPage = () => {
  return (
    <React.Fragment>
      <main className='initial-wrapper'>
        <section className='initial-section'>
          <div>
            <hgroup>
              <h1>Welcome,</h1>
              <p>Please, register to continue</p>
            </hgroup>
            <RegisterForm />
          </div>
        </section>
        <section className='image-section'>
          <img src={Logo} alt="Compasso's logo" />
        </section>
      </main>
    </React.Fragment>
  )
}

export default RegisterPage
