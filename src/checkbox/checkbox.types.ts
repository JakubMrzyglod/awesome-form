import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type CheckboxProps = { name: string; value: string } & Omit<
DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
'name' | 'ref' | 'type' | 'value'
>