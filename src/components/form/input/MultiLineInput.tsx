import { InputHTMLAttributes } from 'react';
import AlertBox from '../../ui/display/AlertBox';

type MultiLineInputProps = {
  label: string;
  errorMessage: string;
} & InputHTMLAttributes<HTMLTextAreaElement>;

export default function MultiLineInput({
  label,
  errorMessage,
  ...props
}: MultiLineInputProps) {
  return (
    <div>
      <label>{label}</label>
      <textarea {...props} />
      {errorMessage && (
        <AlertBox
          message={errorMessage}
          status='error'
        ></AlertBox>
      )}
    </div>
  );
}
