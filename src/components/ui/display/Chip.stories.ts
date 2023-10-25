import type {Meta, StoryObj} from '@storybook/react';
import Chip from './Chip';

const meta = {
  title: 'Components/Display/Chip',
  component: Chip,
} satisfies Meta<typeof Chip>

export default meta;

type Story = StoryObj<typeof meta>

export const ChipWithPrimaryBackground: Story = {
  args: {
    text: 'Default chip',
    color: 'primary',
  }
}

export const ChipWithSecondaryBackground: Story = {
  args: {
    text: 'Secondary chip',
    color: 'secondary',
  }
}
