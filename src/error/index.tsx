import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorProps } from './error.types'

export const Error: FC<ErrorProps> = ({ name, ...spanProps }) => {
  const { formState } = useFormContext()
  const errorMessage = formState.errors[name]?.message
  return <span {...spanProps}>{errorMessage}</span>
}
