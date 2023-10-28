import type { Meta, StoryObj } from '@storybook/react';
import ActionMenuItem from './ActionMenuItem';

const meta = {
  title: 'Components/Navigation/ActionMenuItem',
  component: ActionMenuItem,
} satisfies Meta<typeof ActionMenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuItemWithLeftIcon: Story = {
  args: {
    text: 'Menu Item',
    icon: 'back',
    iconPosition: 'left',
  },
};

export const MenuItemWithRightIcon: Story = {
  args: {
    text: 'Menu Item',
    icon: 'settings',
    iconPosition: 'right',
  },
};
