import type {Meta, StoryObj} from '@storybook/react';
import Heading from './Heading';

const meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>

export default meta;

type Story = StoryObj<typeof meta>

export const HugeHeading: Story = {
  args: {
    size: 'huge',
    content: 'Huge heading',
  }
}

export const BigHeading: Story = {
  args: {
    size: 'big',
    content: 'Big heading',
  }
}

