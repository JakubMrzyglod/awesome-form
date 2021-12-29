import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputProps } from './input.types'

export const Input: FC<InputProps> = ({ name, ...inputProps }) => {
  const { register } = useFormContext()
  return <input {...{ ...inputProps, ...register(name) }} />
}
