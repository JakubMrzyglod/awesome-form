import React, { FC } from 'react'
import { Control, ControlProps, Form, InputGroup } from 'awesome-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const App = () => {
  const submit = console.log
  return (
    <Form {...{ submit, resolver }}>
      <InputGroup {...{ name: 'test', label: 'Test' }} />
      <Control {...{ name: 'a', Component, defaultValue: 0 }} />
    </Form>
  )
}

const schema = object().shape({
  test: string().required()
})

export const resolver = yupResolver(schema)

const Component: FC<ControlProps> = ({
  field: { onChange, value },
  formState
}) => {
  console.log(formState.errors, 'value')
  return (
    <>
      <button {...{ onClick: () => onChange(value + 1), type: 'button' }}>
        add
      </button>
      {value}
    </>
  )
}
