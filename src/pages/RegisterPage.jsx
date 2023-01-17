import React from 'react'
import RegisterForm from '../components/FormsComponents/RegisterForm'

const RegisterPage = () => {
  return (
    <React.Fragment>
      <main className='initial-wrapper'>
        <section className='initial-section'>
          <RegisterForm />
        </section>
        <section className='image-section'></section>
      </main>
    </React.Fragment>
  )
}

export default RegisterPage
