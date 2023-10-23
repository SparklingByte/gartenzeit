import { InputHTMLAttributes } from 'react';

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
      {errorMessages &&
        errorMessages.map((errorMessage) => {
          return (
            <span
              key={`error-${errorMessage}`}
              className='bg-red-500 text-white p-3 rounded-md'
            >
              {errorMessage}
            </span>
          );
        })}
    </div>
  );
}
