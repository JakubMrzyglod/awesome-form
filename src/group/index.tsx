import React, { FC } from 'react'
import { Error } from '../error'
import { GroupWrapperProps } from './group.types'

export const GroupWrapper: FC<GroupWrapperProps> = ({
  label,
  name,
  Input,
  className,
  ...otherInputProps
}) => {
  return (
    <div {...{ className }}>
      <label>{label}</label>
      <Input {...{ name, ...otherInputProps }} />
      <Error {...{ name }} />
    </div>
  )
}
