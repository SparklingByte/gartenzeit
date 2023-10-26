import { FaCheck } from 'react-icons/fa';
import { TbInfoSquareRounded } from 'react-icons/tb';
import { PiWarningBold } from 'react-icons/pi';
import { VscError } from 'react-icons/vsc';

type InputAlertProps = {
  status: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message?: string;
};

export default function InputAlert({
  status,
  title,
  message,
}: InputAlertProps) {
  const styleMap = {
    success: {
      style: 'bg-semantic-success text-text-100',
      icon: <FaCheck className='text-medium-heading text-text-100' />,
    },
    info: {
      style: 'bg-blue-400 text-text-100',
      icon: (
        <TbInfoSquareRounded className='text-medium-heading text-text-100' />
      ),
    },
    warning: {
      style: 'bg-yellow-400 text-text-100',
      icon: <PiWarningBold className='text-medium-heading text-text-100' />,
    },
    error: {
      style: 'bg-semantic-warning text-background-50',
      icon: <VscError className='text-medium-heading text-background-50' />,
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
        {styleMap[status].icon}
        <div>
          <p className='text-small-heading font-accent'>{title}</p>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}
