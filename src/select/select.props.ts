import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'

export type SelectProps = {
  name: string
  options: Option[]
} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

type Option = { value: string; text: string }
