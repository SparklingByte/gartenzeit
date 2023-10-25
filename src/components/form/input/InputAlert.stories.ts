import type {Meta, StoryObj} from '@storybook/react';
import InputAlert from './InputAlert';

const meta = {
  title: 'Components/Input/InputAlert',
  component: InputAlert,
} satisfies Meta<typeof InputAlert>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    alerts: [
      {
        message: 'Test test',
        status: 'success',
      }
    ]
  }
}
