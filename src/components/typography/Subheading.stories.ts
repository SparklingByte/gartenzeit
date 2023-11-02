import type { Meta, StoryObj } from '@storybook/react';
import { Subheading } from './Typography';

const meta = {
  title: 'Components/Typography/Subheading',
  component: Subheading,
} satisfies Meta<typeof Subheading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BigSubtitle: Story = {
  args: {
    children: 'Big Subtitle',
    size: 'big',
  },
};
