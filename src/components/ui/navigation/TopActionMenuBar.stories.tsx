import type { Meta, StoryObj } from '@storybook/react';
import TopActionMenuBar from './TopActionMenuBar';

const meta = {
  title: 'Components/Navigation/TopActionMenuBar',
  component: TopActionMenuBar,
} satisfies Meta<typeof TopActionMenuBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TwoItems: Story = {
  args: {
    hasBackItem: true,
    hasSettingsItem: true,
    settingsPathname: '/settings',
  },
};
