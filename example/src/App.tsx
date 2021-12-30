import React, { FC } from 'react'

import { Control, ControlProps, Form, Input, Methods } from 'awesome-form'

export const App = () => {
  const submit = (data: any, methods: Methods) => {
    console.log(data)
    methods.reset()
  }
  return (
    <Form {...{ submit, useFormProps: {} }}>
      <Input {...{ name: 'test' }} />
      <Control {...{ name: 'a', Component: Counter, defaultValue: 0 }} />
    </Form>
  )
}

const Counter: FC<ControlProps> = ({ field: { onChange, value } }) => {
  console.log(value, 'value')
  return (
    <>
      <button {...{ onClick: () => onChange(value + 1), type: 'button' }}>
        add
      </button>
      {value}
    </>
  )
}
