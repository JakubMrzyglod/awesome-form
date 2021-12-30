import React, { FC } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { FormProps } from './form.types'

export const Form: FC<FormProps> = ({
  children,
  submit,
  noReset,
  formProps,
  ...useFormProps
}) => {
  const methods = useForm(useFormProps)
  const onSubmit = methods.handleSubmit((data) => {
    submit(data)
    if (noReset) {
      return
    }
    methods.reset()
  })
  return (
    <FormProvider {...methods}>
      <form {...{ ...formProps, onSubmit }}>{children}</form>
    </FormProvider>
  )
}
