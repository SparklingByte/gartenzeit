import type {Meta, StoryObj} from '@storybook/react';
import StatusIndicator from './StatusIndicator';

const meta = {
  title: 'Components/Display/StatusIndicator',
  component: StatusIndicator,
} satisfies Meta<typeof StatusIndicator>

export default meta;

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    text: 'Request successful',
    color: 'green'
  }
}

export const ErrorOrPending: Story = {
  args: {
    text: 'Request pending',
    color: 'red',
  }
}

