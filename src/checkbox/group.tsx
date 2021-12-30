import React, { FC } from 'react'
import { Checkbox as Input } from '.'
import { GroupWrapper } from '../group'
import { Group } from '../group/group.types'
import { CheckboxProps } from './checkbox.types'

export const CheckboxGroup: FC<Group<CheckboxProps>> = (props) => (
  <GroupWrapper {...{ ...props, Input }} />
)
