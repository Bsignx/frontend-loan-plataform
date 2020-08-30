import React, { SelectHTMLAttributes } from 'react'

import { SelectElement } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  initialName: string
  name: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  initialName,
  ...rest
}) => {
  return (
    <SelectElement value="" id={name} {...rest}>
      <option value="" disabled hidden>
        {initialName}
      </option>
      {options.map(option => (
        <option key={option.value}>{option.label}</option>
      ))}
    </SelectElement>
  )
}

export default Select
