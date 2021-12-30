import { DetailedHTMLProps, FormHTMLAttributes } from 'react'
import { UnpackNestedValue, UseFormProps } from 'react-hook-form'

export type FormProps = {
  submit: Submit
  noReset?: boolean
  formProps?: Omit<
    DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
    'onSubmit'
  >
} & UseFormProps

type Submit = (data: UnpackNestedValue<any>) => void
