import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Typography';

const meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HugeHeading: Story = {
  args: {
    children: 'Hello world',
    size: 'huge',
  },
};
