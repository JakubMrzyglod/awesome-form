import { DetailedHTMLProps, FormHTMLAttributes } from 'react'
import { UnpackNestedValue, UseFormProps } from 'react-hook-form'
import { Methods } from '..'

export type FormProps = {
  useFormProps: UseFormProps
  submit: Submit
} & Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
>

type Submit = (data: UnpackNestedValue<any>, methods: Methods) => void
