import { InputHTMLAttributes } from 'react';
import InputAlert from './InputAlert';

type SingleLineInputProps = {
  label: string;
  errorMessages?: string[];
} & InputHTMLAttributes<HTMLInputElement>;

export default function SingleLineInput({
  label,
  errorMessages,
  ...props
}: SingleLineInputProps) {
  return (
    <div className='grid gap-3'>
      <label htmlFor={props.id}>{label}</label>
      <input
        className='bg-orange-50 text-slate-900 p-3 rounded-md'
        {...props}
      ></input>
      {errorMessages && <InputAlert errorMessages={errorMessages}></InputAlert>}
    </div>
  );
}
