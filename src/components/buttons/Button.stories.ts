import type {Meta, StoryObj} from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Interaction/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>

export const DarkButtonWithIcon: Story = {
  args: {
    text: 'Dark Button',
    color: 'dark',
    showIcon: true,
  }
}

export const DarkButtonWithoutIcon: Story = {
  args: {
    text: 'Dark Button',
    color: 'dark',
    showIcon: false,
    disabled: false,
  }
}

export const LightButton: Story = {
  args: {
    text: 'Light Button',
    color: 'light',
    showIcon: false,
  }
}

export const DisabledButton: Story = {
  args: {
    text: 'Disabled Button',
    showIcon: true,
    disabled: true,
  }
}

