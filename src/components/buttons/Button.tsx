import Paragraph from '../ui/typography/Paragraph';

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
      className={`flex gap-3 p-3 rounded-md ${
        color === 'light'
          ? 'bg-primary-100 text-black'
          : 'bg-primary-120 text-white'
      }`}
      {...props}
    >
      <Paragraph content={text} />
      {showIcon && <p>{'>'}</p>}
    </button>
  );
}
