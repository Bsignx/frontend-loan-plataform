import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type: string
  placeholder: string
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <Container className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...rest} placeholder={placeholder} />
    </Container>
  )
}

export default Input
