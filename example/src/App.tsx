import React, { FC } from 'react'
import { Control, ControlProps, Form, Methods, InputGroup } from 'awesome-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const App = () => {
  const submit = (data: any, methods: Methods) => {
    console.log(data)
    methods.reset()
  }
  return (
    <Form {...{ submit, useFormProps: { resolver } }}>
      <InputGroup {...{ name: 'test', label: 'Test' }} />
      <Control {...{ name: 'a', Component: Counter, defaultValue: 0 }} />
    </Form>
  )
}

const schema = object().shape({
  test: string().required()
})

export const resolver = yupResolver(schema)

const Counter: FC<ControlProps> = ({
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
