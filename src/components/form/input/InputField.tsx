import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type SingleLineInputProps = {
  label: string;
  multiline: boolean;
  color: 'base' | 'error' | 'success';
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function SingleLineInput({
  label,
  multiline,
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
    inputStyling += ' bg-background-50 text-text-80 p-3 rounded-xl';
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
      {multiline ? (
        <textarea
          {...props}
          className={inputStyling}
        ></textarea>
      ) : (
        <input
          className={inputStyling}
          disabled={disabled}
          {...props}
        ></input>
      )}
    </div>
  );
}
