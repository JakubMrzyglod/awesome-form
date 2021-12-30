import React from 'react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { SelectProps } from './select.props'

export const Select: FC<SelectProps> = ({ name, options }) => {
  const { register } = useFormContext()
  return (
    <select {...register(name)}>
      {options.map(({ value, text }) => (
        <option {...{ value, children: text }} />
      ))}
    </select>
  )
}
