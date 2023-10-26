import { InputHTMLAttributes } from 'react';

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
    <div className='grid gap-1'>
      <label
        className={`text-small-heading font-bold ${
          disabled ? 'text-text-50' : 'text-text-100'
        }`}
        htmlFor={props.id}
      >
        {label} {required && '(Required)'}
      </label>
      {errorMessage && !disabled && (
        <span
          key={errorMessage}
          className='text-semantic-warning font-bold'
        >
          {errorMessage}
        </span>
      )}
      <input
        className={`p-3 rounded-xl ${inputStyling}`}
        disabled={disabled}
        {...props}
      ></input>
    </div>
  );
}
