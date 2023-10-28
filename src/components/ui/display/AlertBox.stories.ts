import type {Meta, StoryObj} from '@storybook/react';
import AlertBox from './AlertBox';

const meta = {
  title: 'Components/Display/AlertBox',
  component: AlertBox,
} satisfies Meta<typeof AlertBox>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Success!',
    message: 'Successfully created account',
    status: 'success',
  }
}
