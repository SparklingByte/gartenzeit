import type {Meta, StoryObj} from '@storybook/react';
import LogoBar from './LogoBar';

const meta = {
  title: 'Components/Display/LogoBar',
  component: LogoBar,
} satisfies Meta<typeof LogoBar>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
}