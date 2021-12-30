import { FC } from 'react'
import { UseControllerReturn } from 'react-hook-form'

export type ControlProps = {
  name: string
  Component: FC<UseControllerReturn>
  defaultValue?: any
}
