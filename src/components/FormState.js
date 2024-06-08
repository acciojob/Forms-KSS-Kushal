import React from 'react'
import { Link } from 'react-router-dom'

const FormState = () => {
  return (
    <div >
        <Link id="form-link" to={'/form'}>form</Link>
      <Link id="form-ref-link" to={'/formRef'}>formRef</Link>
      <Link id="form-state-link" to={'/formState'}>formState</Link>
    </div>
  )
}

export default FormState