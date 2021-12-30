import React, { FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { ControlProps } from './control.types'

export const Control: FC<ControlProps> = ({
  name,
  Component,
  defaultValue
}) => {
  const { control } = useFormContext()
  const controlProps = useController({ control, name, defaultValue })
  return <Component {...controlProps} />
}
