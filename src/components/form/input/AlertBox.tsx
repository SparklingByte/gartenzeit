import { FaCheck } from 'react-icons/fa';
import { TbInfoSquareRounded } from 'react-icons/tb';
import { PiWarningBold } from 'react-icons/pi';
import { VscError } from 'react-icons/vsc';

type InputAlertProps = {
  status: 'success' | 'info' | 'warning' | 'error';
  message: string;
};

export default function InputAlert({ status, message }: InputAlertProps) {
  const styleMap = {
    success: {
      style: 'bg-semantic-success text-background-50',
      icon: <FaCheck />,
    },
    info: {
      style: 'bg-blue-400 text-background-50',
      icon: <TbInfoSquareRounded />,
    },
    warning: {
      style: 'bg-yellow-400 text-text-100',
      icon: <PiWarningBold />,
    },
    error: {
      style: 'bg-semantic-warning text-background-50',
      icon: <VscError />,
    },
  };

  return (
    <div className='grid gap-3'>
      <div
        key={message}
        className={
          'flex items-center gap-3 p-3 rounded-xl ' + styleMap[status].style
        }
      >
        <span className='text-small-heading'>{styleMap[status].icon}</span>
        <p>{message}</p>
      </div>
    </div>
  );
}
