type AuthenticationAlertProps = {
  status: 'error' | 'success' | 'info';
  message: string;
};

export default function AuthenticationAlert({
  status,
  message,
}: AuthenticationAlertProps) {
  const style = `${
    status === 'error'
      ? 'bg-red-600'
      : status === 'info'
      ? 'bg-blue-600'
      : 'bg-green-600'
  } text-white p-2 rounded-md`;

  return (
    <figure className={style}>
      <figcaption>{message}</figcaption>
    </figure>
  );
}
