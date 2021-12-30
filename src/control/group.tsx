import React, { FC } from 'react'
import { Control as Input } from '.'
import { GroupWrapper } from '../group'
import { Group } from '../group/group.types'
import { ControlProps } from './control.types'

export const ControlGroup: FC<Group<ControlProps>> = (props) => (
  <GroupWrapper {...{ ...props, Input }} />
)
