'use client';

import { ReactNode } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { TbSettingsFilled } from 'react-icons/tb';
import { PiPencilSimpleFill } from 'react-icons/pi';

export type MenuIcon = 'settings' | 'back' | 'edit';

type ActionMenuItemProps = {
  text: string;
  icon?: MenuIcon;
  iconPosition?: 'left' | 'right';
  onOpen: () => void;
};

export default function ActionMenuItem({
  text,
  icon,
  iconPosition,
  onOpen,
}: ActionMenuItemProps) {
  const iconMap: { [key in MenuIcon]: ReactNode } = {
    back: <FaArrowLeftLong />,
    settings: <TbSettingsFilled />,
    edit: <PiPencilSimpleFill />,
  };

  const iconElement = icon ? (
    <span className='text-small-heading'>{iconMap[icon]}</span>
  ) : undefined;
  const textElement = <p>{text}</p>;

  return (
    <div
      onClick={onOpen}
      className='flex gap-2 items-center cursor-pointer'
    >
      {iconPosition === 'right'
        ? [textElement, iconElement]
        : [iconElement, textElement]}
    </div>
  );
}
