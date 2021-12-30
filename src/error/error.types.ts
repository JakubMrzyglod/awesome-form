import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ErrorProps = {
  name: string
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
