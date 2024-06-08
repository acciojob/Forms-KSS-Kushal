import React from 'react'

const Form = () => {
  return (
    <div id='form-link'>
        <form action="/form" id="info-form">
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