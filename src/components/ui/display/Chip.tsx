import { ReactNode } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { TbCheck } from 'react-icons/tb';
import { LuClock } from 'react-icons/lu';

type ChipIcon = 'location' | 'check' | 'clock';
interface ChipProps {
  text: string;
  color?: 'primary' | 'secondary';
  icon?: ChipIcon;
  onClick?: () => {};
}

export default function Chip({ text, color, icon, onClick }: ChipProps) {
  if (!color) color = 'primary';

  const colorMap = {
    primary: {
      background: 'bg-primary-100',
      text: 'text-text-100',
      icon: 'text-text-100',
    },
    secondary: {
      background: 'bg-background-80',
      text: 'text-text-100',
      icon: 'text-primary-120',
    },
  };

  const iconMap: { [key in ChipIcon]: ReactNode } = {
    location: <FaLocationDot className={colorMap[color].icon} />,
    check: <TbCheck className={colorMap[color].icon} />,
    clock: <LuClock className={colorMap[color].icon} />,
  };

  return (
    <div
      className={`p-[5px] ${colorMap[color].background} ${colorMap[color].text} rounded-md justify-center items-center gap-[5px] inline-flex `}
    >
      {icon && iconMap[icon]}
      <p className={`text-base`}>{text}</p>
    </div>
  );
}
