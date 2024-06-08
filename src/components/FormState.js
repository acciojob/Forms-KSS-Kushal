import React from 'react'
import { Link } from 'react-router-dom'

const FormState = () => {
  return (
    <div >
        <Link id="form-link" to={'/form'}>form</Link>
      <Link id="form-ref-link" to={'/form-ref'}>formRef</Link>
      <Link id="form-state-link" to={'/form-state'}>formState</Link>
    </div>
  )
}

export default FormState