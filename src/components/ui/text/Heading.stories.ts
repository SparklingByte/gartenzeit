import type {Meta, StoryObj} from '@storybook/react';
import Heading from './Heading';

const meta = {
  title: 'Components/Text/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>

export default meta;

type Story = StoryObj<typeof meta>

export const PageHeading: Story = {
  args: {
    size: 'page',
    content: 'Page heading',
  }
}

export const BigHeading: Story = {
  args: {
    size: 'big',
    content: 'Big heading',
  }
}

