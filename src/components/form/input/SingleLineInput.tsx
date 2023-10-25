import { InputHTMLAttributes } from 'react';
import AlertBox from './AlertBox';

type SingleLineInputProps = {
  label: string;
  color: 'base' | 'error' | 'success';
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function SingleLineInput({
  label,
  color,
  errorMessage,
  disabled,
  required,
  ...props
}: SingleLineInputProps) {
  let inputStyling;

  if (disabled) {
    inputStyling = 'bg-semantic-disabled text-text-50';
  } else {
    inputStyling =
      color === 'error'
        ? 'border-solid border-2 border-semantic-warning'
        : color === 'success'
        ? 'border-solid border-2 border-semantic-success'
        : '';
    inputStyling += ' bg-background-50 text-text-80';
  }

  return (
    <div className='grid gap-3'>
      <label
        className='text-small-heading font-bold'
        htmlFor={props.id}
      >
        {label} {required && '(Required)'}
      </label>
      <input
        className={`p-3 rounded-md ${inputStyling}`}
        disabled={disabled}
        {...props}
      ></input>
      {errorMessage && (
        <AlertBox
          message={errorMessage}
          status='error'
        ></AlertBox>
      )}
    </div>
  );
}
