import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div >
        <Link id="form-link" to={'/form'}>form</Link>
      <Link id="form-ref-link" to={'/formRef'}>formRef</Link>
      <Link id="form-state-link" to={'/formState'}>formState</Link>
        <form action="" id="info-form">
            <input type="text" id="full_name" placeholder='Full Name' />
            <input type="email" id="email" placeholder='Email'/>
            <input type="password" id="password" placeholder='Password' />
            <input type="password" id="password_confirmation" placeholder='Password Confirmation' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form