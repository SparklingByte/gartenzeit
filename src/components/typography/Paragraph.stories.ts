import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Typography';

const meta = {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello world',
  },
};
