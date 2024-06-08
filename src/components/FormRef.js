import React from 'react'

const FormRef = () => {
  return (
    <div id='form-ref-link'>
        <form action="/formState" id="info-form">
            <input type="text" id="full_name" placeholder='Full Name' />
            <input type="email" id="email" placeholder='Email'/>
            <input type="password" id="password" placeholder='Password' />
            <input type="password" id="password_confirmation" placeholder='Password Confirmation' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormRef