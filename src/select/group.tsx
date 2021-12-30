import React, { FC } from 'react'
import { Select as Input } from '.'
import { GroupWrapper } from '../group'
import { Group } from '../group/group.types'
import { SelectProps } from './select.props'

export const SelectGroup: FC<Group<SelectProps>> = (props) => (
  <GroupWrapper {...{ ...props, Input }} />
)
