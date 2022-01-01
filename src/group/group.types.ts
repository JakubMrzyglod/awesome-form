import { FC } from 'react'

export type GroupWrapperProps = {
  label: string
  name: string
  className: any
  Input: FC<{ name: string }>
}

export type Group<T> = {
  label: string
  className: any
} & T
