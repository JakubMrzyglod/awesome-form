import React, { FC } from 'react'
import { Error } from '..'
import { GroupWrapperProps } from './group.types'

export const GroupWrapper: FC<GroupWrapperProps> = ({
  label,
  name,
  Input,
  ...otherInputProps
}) => {
  return (
    <div>
      <label>{label}</label>
      <Input {...{ name, ...otherInputProps }} />
      <Error {...{ name }} />
    </div>
  )
}
