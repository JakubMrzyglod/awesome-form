import { DetailedHTMLProps, FormHTMLAttributes } from 'react'
import { SubmitHandler, UseFormProps } from 'react-hook-form'

export type FormProps = {
  useFormProps: UseFormProps
  submit: SubmitHandler<any>
} & Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
>
