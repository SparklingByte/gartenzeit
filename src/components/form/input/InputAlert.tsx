import { FaCheck } from 'react-icons/fa';
import { TbInfoSquareRounded } from 'react-icons/tb';
import { PiWarningBold } from 'react-icons/pi';
import { VscError } from 'react-icons/vsc';

type messageType = {
  status: 'success' | 'info' | 'warning' | 'error';
  message: string;
};

type InputAlertProps = {
  alerts: messageType[];
};

export default function InputAlert({ alerts }: InputAlertProps) {
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
      {alerts.map((alert) => {
        return (
          <div
            key={alert.message}
            className={
              'flex items-center gap-3 p-3 rounded-xl ' +
              styleMap[alert.status].style
            }
          >
            <span className='text-small-heading'>
              {styleMap[alert.status].icon}
            </span>
            <p>{alert.message}</p>
          </div>
        );
      })}
    </div>
  );
}
