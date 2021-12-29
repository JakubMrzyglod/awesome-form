import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type InputProps = {
  name: string
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'name' | 'ref'
>
