import type {Meta, StoryObj} from '@storybook/react';
import InputField from './InputField';

const meta = {
  title: 'Components/Input/InputField',
  component: InputField,
} satisfies Meta<typeof InputField>

export default meta;

type Story = StoryObj<typeof meta>

export const SingleLineInput: Story = {
  args: {
    label: 'Default single line input field',
    color: 'base',
    errorMessage: 'Example Error Message',
    multiline: false,
  }
}

export const MultiLineInput: Story = {
  args: {
    label: 'Multi line input field',
    color: 'base',
    errorMessage: 'Example Error Message',
    multiline: true,
  }
}
