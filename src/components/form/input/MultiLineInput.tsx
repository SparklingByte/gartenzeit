import { InputHTMLAttributes } from 'react';
import InputAlert from './InputAlert';

type MultiLineInputProps = {
  label: string;
  errorMessages: string[];
} & InputHTMLAttributes<HTMLTextAreaElement>;

export default function MultiLineInput({
  label,
  errorMessages,
  ...props
}: MultiLineInputProps) {
  return (
    <div>
      <label>{label}</label>
      <textarea {...props} />
      {errorMessages && (
        <InputAlert errorMessages={errorMessages}></InputAlert>
      )}
    </div>
  );
}
