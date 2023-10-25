import { IoArrowForward } from 'react-icons/io5';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: 'light' | 'dark';
  showIcon: boolean;
}

export default function Button({
  text,
  color,
  showIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-3 p-3 rounded-md ${
        color === 'light'
          ? 'bg-primary-100 text-black'
          : 'bg-primary-120 text-white'
      }`}
      {...props}
    >
      <p className='text-small-heading font-bold'>{text}</p>
      {showIcon && <IoArrowForward />}
    </button>
  );
}
