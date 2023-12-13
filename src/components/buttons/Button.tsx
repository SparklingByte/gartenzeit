import { IoArrowForward } from 'react-icons/io5';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: 'primary' | 'dark' | 'warning';
  disabled?: boolean;
  showIcon: boolean;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => undefined;
}

export default function Button({
  text,
  color,
  showIcon,
  disabled,
  isLoading,
  loadingText = 'Loading...',
  onClick,
  ...props
}: ButtonProps) {
  color = color ? color : 'primary';

  const disabledBackgroundStyling =
    'bg-semantic-disabled text-text-50 cursor-not-allowed';

  const backgroundStyling: { [key in ButtonProps['color']]: string } = {
    dark: 'bg-primary-120 text-background-50',
    primary: 'bg-primary-100 text-text-100',
    warning: 'bg-semantic-warning text-background-50',
  };

  return (
    <button
      className={`flex justify-between items-center gap-3 p-3 rounded-md ${
        disabled ? disabledBackgroundStyling : backgroundStyling[color]
      }`}
      {...props}
      onClick={disabled ? () => {} : onClick}
    >
      <p className='text-small-heading font-bold'>
        {isLoading ? loadingText : text}
      </p>
      {showIcon && <IoArrowForward />}
    </button>
  );
}
