import React from 'react'
import { FC } from 'react'
import { Input } from '..'
import { CheckboxProps } from './checkbox.types'

export const Checkbox: FC<CheckboxProps> = (props) => {
  return <Input {...{ ...props, type: 'checkbox' }} />
}
