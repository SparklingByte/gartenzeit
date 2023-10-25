interface ChipProps {
  text: string;
  color?: 'primary' | 'secondary';
  onClick?: () => {};
}

export default function Chip({ text, color, onClick }: ChipProps) {
  if (!color) color = 'primary';

  const colorMap = {
    primary: {
      background: 'bg-primary-100',
      text: 'text-black',
    },
    secondary: {
      background: 'bg-secondary-100',
      text: 'text-black',
    },
  };

  return (
    <div
      className={`p-[5px] ${colorMap[color].background} rounded-md justify-center items-center gap-[5px] inline-flex`}
    >
      <p className={`text-base ${colorMap[color].text}`}>{text}</p>
    </div>
  );
}
