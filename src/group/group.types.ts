import { FC } from 'react'

export type GroupWrapperProps = {
  label: string
  name: string
  Input: FC<{ name: string }>
}

export type Group<T> = {
  label: string
} & T
