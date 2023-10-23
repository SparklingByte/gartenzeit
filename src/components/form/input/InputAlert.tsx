type InputAlertProps = {
  errorMessages: string[];
};

export default function InputAlert({ errorMessages }: InputAlertProps) {
  // Return if there is no error message
  if (errorMessages.length === 0) {
    return;
  }

  return (
    <div className='grid gap-1 bg-red-500 text-white p-3 rounded-md'>
      {errorMessages.map((message) => (
        <p key={`error-${message}`}>{message}</p>
      ))}
    </div>
  );
}
