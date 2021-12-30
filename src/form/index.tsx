import React, { FC } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { FormProps } from './form.types'

export const Form: FC<FormProps> = ({
  children,
  submit,
  useFormProps,
  ...formProps
}) => {
  const methods = useForm(useFormProps)
  const onSubmit = methods.handleSubmit((data) => submit(data, methods))
  return (
    <FormProvider {...methods}>
      <form {...{ ...formProps, onSubmit }}>{children}</form>
    </FormProvider>
  )
}
