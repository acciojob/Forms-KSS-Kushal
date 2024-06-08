import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <>
    <Link id="form-link" to={'/form'}>form</Link>
      <Link id="form-ref-link" to={'/formRef'}>formRef</Link>
      <Link id="form-state-link" to={'/formState'}>formState</Link>
      </>
  )
}

export default Card