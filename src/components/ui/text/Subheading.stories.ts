import type {Meta, StoryObj} from '@storybook/react';
import Subheading from './Subheading';

const meta = {
  title: 'Components/Text/Subheading',
  component: Subheading,
} satisfies Meta<typeof Subheading>

export default meta;

type Story = StoryObj<typeof meta>

export const BigSubheading: Story = {
  args: {
    size: 'big',
    content: 'Big subheading',
  }
}

export const MediumSubheading: Story = {
  args: {
    size: 'medium',
    content: 'Medium subheading',
  }
}

