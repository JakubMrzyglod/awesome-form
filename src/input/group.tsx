import React, { FC } from 'react'
import { Input } from '.'
import { GroupWrapper } from '../group'
import { Group } from '../group/group.types'
import { InputProps } from './input.types'

export const InputGroup: FC<Group<InputProps>> = (props) => (
  <GroupWrapper {...{ ...props, Input }} />
)
