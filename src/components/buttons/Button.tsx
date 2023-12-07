import { IoArrowForward } from 'react-icons/io5';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: 'light' | 'dark';
  disabled?: boolean;
  showIcon: boolean;
  isLoading: boolean;
}

export default function Button({
  text,
  color,
  showIcon,
  disabled,
  isLoading,
  ...props
}: ButtonProps) {
  let backgroundStyling;
  if (disabled) {
    backgroundStyling = 'bg-semantic-disabled text-text-50 cursor-not-allowed';
  } else {
    backgroundStyling =
      color === 'dark'
        ? 'bg-primary-120 text-background-50'
        : 'bg-primary-100 text-text-100';
  }

  return (
    <button
      className={`flex items-center gap-3 p-3 rounded-md ${backgroundStyling}`}
      {...props}
    >
      <p className='text-small-heading font-bold'>
        {isLoading ? 'Loading...' : text}
      </p>
      {showIcon && <IoArrowForward />}
    </button>
  );
}
