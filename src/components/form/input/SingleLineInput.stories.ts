import type {Meta, StoryObj} from '@storybook/react';
import SingleLineInput from './SingleLineInput';

const meta = {
  title: 'Components/Input/SingleLineInput',
  component: SingleLineInput,
} satisfies Meta<typeof SingleLineInput>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default input field',
    color: 'base',
    errorMessage: 'Invalid input',
  }
}
